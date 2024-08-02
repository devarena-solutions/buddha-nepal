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
        from: "clients@the-table-himalaya.com",
        to: [
          "neetesh2000@gmail.com",
          "prashunnaral8@gmail.com",
          "rajkumar.777@hotmail.com",
          "thetablehimalaya@gmail.com",
        ],
        subject: `Catering Reservation from ${name}`,
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
