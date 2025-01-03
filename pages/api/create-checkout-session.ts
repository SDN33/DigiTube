import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { VIEWS_PRICE_MAP, LIKES_PRICE_MAP } from '../../utils/constants';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

interface RequestBody {
  url: string;
  views?: string;
  likes?: string;
  serviceType: 'views' | 'likes';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { url, views, likes, serviceType } = req.body as RequestBody;

      if (!url || (!views && !likes) || !serviceType) {
        throw new Error('Paramètres invalides.');
      }

      let numericAmount: number;
      let displayAmount: string;
      let priceData: { unit_amount: number };

      if (serviceType === 'views') {
        if (!views) throw new Error('Nombre de vues non spécifié.');
        numericAmount = parseInt(views.replace(/,/g, ''), 10);
        displayAmount = views;
        priceData = VIEWS_PRICE_MAP[numericAmount];
        if (!priceData) throw new Error('Pack de vues invalide.');
      } else {
        if (!likes) throw new Error('Nombre de likes non spécifié.');
        numericAmount = parseInt(likes.replace(/,/g, ''), 10);
        displayAmount = likes;
        priceData = LIKES_PRICE_MAP[numericAmount];
        if (!priceData) throw new Error('Pack de likes invalide.');
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: serviceType === 'views'
                  ? `${displayAmount} Vues`
                  : `${displayAmount} Likes`,
                description: serviceType === 'views'
                  ? 'Vues YouTube de haute qualité'
                  : 'Likes YouTube de haute qualité',
              },
              unit_amount: priceData.unit_amount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
        metadata: {
          video_url: url,
          service_type: serviceType,
          amount: displayAmount,
        },
      });

      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur inattendue est survenue.";
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Méthode non autorisée');
  }
}
