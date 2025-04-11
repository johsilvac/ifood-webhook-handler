// api/webhook.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Webhook recebido:', req.body);
    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
  } else if (req.method === 'GET') {
    res.status(200).json({ message: 'Webhook ativo!' });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
