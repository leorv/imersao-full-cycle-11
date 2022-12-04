// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await axios.post('http://localhost:8000/players', {name: req.body.name});
    await res.revalidate('/players_isr_ondemand') // Coloca exatamente o endereço que quer revalidar.

    // Vercel: Se usassemos o stay while revalidate.
    // res.setHeader('stale-while-revalidate', '60')
    
    res.status(204);
}
