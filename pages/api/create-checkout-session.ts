// pages/api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { PRICE_MAP } from '../../utils/constants';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { url, views } = req.body;

      if (!url || !views) {
        throw new Error('Paramètres invalides.');
      }

      // Convert string views to number for proper mapping
      const numViews = parseInt(views.replace(/,/g, ''), 10);
      const priceData = PRICE_MAP[numViews];

      if (!priceData) {
        throw new Error('Pack de vues invalide.');
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: `${views} Vues`,
              },
              unit_amount: priceData.unit_amount
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Méthode non autorisée');
  }
}
