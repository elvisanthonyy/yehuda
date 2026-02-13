import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnection";
import { Beat } from "@/models/beat";

const handler = async (req: Request) => {
  await dbConnect();

  try {
    const beats = await Beat.find();

    return NextResponse.json(
      { message: "Beats gotten", beats },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 201 },
    );
  }
};

export { handler as GET };
