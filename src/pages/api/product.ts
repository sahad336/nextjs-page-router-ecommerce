import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const data = [{ id: 1, title: "T Shirt" }];
    return res.status(200).json({ data });
  }

  if (req.method === "POST") {
    const prod = req.body;
    const data = [{ id: 1, title: "T Shirt", prod }];
    return res.status(200).json({ data });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
