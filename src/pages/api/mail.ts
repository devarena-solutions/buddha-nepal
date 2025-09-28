// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

type Data = {
  name: string;
};

export default function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, guests, email, date, time, message, phone } = req.body;

  try {
    resend.emails
      .send({
        from: "clients@buddhanepal.se",
        //to: [`${email}, "pandey.dev25@gmail.com", "buddhanepal0707@gmail.com"`],
        to: ["pandey.dev25@gmail.com", "buddhanepal0707@gmail.com"],
        subject: `Table Reservation from ${name}`,
        html: `
        <div>
          Name: ${name},
          <br />
          Email: ${email},
          <br />
          Number of Guests: ${guests},
          <br />
          Date: ${date},
          <br />
          Time: ${time},
          <br />
          phone: ${phone},
          <br />
          message: ${message}
        </div>
      `,
      })
      .then((data) => {
        res.status(200).json({ message: "Success" });
      });
  } catch (error) {
    return res.json({ error });
  }
}
