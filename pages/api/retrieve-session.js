// pages/api/retrieve-session.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { session_id } = req.query;

      if (!session_id) {
        throw new Error('Session ID manquant.');
      }

      const session = await stripe.checkout.sessions.retrieve(session_id);

      res.status(200).json({
        productName: session.line_items?.data[0]?.description || 'Produit',
        videoUrl: session.metadata?.video_url || 'URL non disponible',
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Méthode non autorisée');
  }
}
