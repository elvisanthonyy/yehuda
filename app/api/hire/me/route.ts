import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnection";
import { HireMe } from "@/models/hireMe";

interface HireMeBody {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}

const handler = async (req: Request) => {
  dbConnect();
  const body = (await req.json()) as HireMeBody;
  try {
    const hireMe = await new HireMe({
      name: body?.name,
      email: body?.email,
      serviceType: body?.serviceType,
      message: body?.message,
    });
    await hireMe.save();
    return NextResponse.json({ message: "message sent" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "message not send" }, { status: 201 });
  }
};

export { handler as POST };
