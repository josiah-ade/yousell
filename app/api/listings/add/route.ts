import { verifyToken } from "@/lib/functions/tokenVerify";
import Listing from "@/models/Listing";
import { headers } from "next/headers";

export async function POST(request: Request) {
  try {
    const headerList = headers();
    const tokenBearer = headerList.get("authorization");

    if (tokenBearer === null || tokenBearer === undefined)
      return Response.json(
        { status: false, statusCode: 0, message: "No Token Found" },
        { status: 200 }
      );

    const token: string = tokenBearer.split(" ")[1];
    const verify = await verifyToken(token);

    if (!verify)
      return Response.json(
        { status: false, statusCode: 0, message: "Token Expired" },
        { status: 200 }
      );

    const bodyProps = await request.json();
    await Listing.create(bodyProps.data);

    return Response.json(
      { status: true, statusCode: 1, message: "success" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return Response.json(
      { status: false, statusCode: 0, message: "Error Occured" },
      { status: 200 }
    );
  }
}
