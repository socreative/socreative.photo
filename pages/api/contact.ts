import { sendEmail } from '../../src/utils/sendEmail'

export default async function handler(req: any, res: any) {

  if (req.method === 'POST') {
    try {
      console.log(req.body);
      sendEmail(req.body);
      res.status(200).json({ success: true });

    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}