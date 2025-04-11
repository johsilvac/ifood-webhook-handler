export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Recebido do iFood:', req.body);
    res.status(200).json({ message: 'Recebido com sucesso!' });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
