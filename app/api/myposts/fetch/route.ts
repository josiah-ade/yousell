import { connectToMongoDB } from "@/lib/db";
import { verifyToken } from "@/lib/functions/tokenVerify";
import Listing from "@/models/Listing";
import { headers } from "next/headers";

export async function POST(request: Request) {
  try {
    await connectToMongoDB();
    const headerList = headers();
    const tokenBearer = headerList.get("authorization");

    if (tokenBearer === null || tokenBearer === undefined)
      return Response.json(
        { data: { statusCode: 0, message: "No Token Found " } },
        { status: 200 }
      );

    const token: string = tokenBearer.split(" ")[1];
    const verify = await verifyToken(token);

    if (!verify)
      return Response.json(
        { data: { statusCode: 0, message: "Token Expired" } },
        { status: 200 }
      );

    const bodyProps = await request.json();
    let { user_id } = bodyProps;

    const filter: { postedBy?: string } = {};

    if (user_id) {
      filter.postedBy = user_id;
    } else {
      return Response.json(
        { data: { statusCode: 0, message: "Invalid User ID" } },
        { status: 200 }
      );
    }

    const fetchListing = await Listing.find(filter)
      .select("title category price state images postView")
      .limit(9)
      .sort({ createdAt: -1 })
      .maxTimeMS(20000);

    return Response.json(
      { data: { statusCode: 1, message: "success", data: fetchListing } },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return Response.json(
      { data: { statusCode: 0, message: "Error log" } },
      { status: 200 }
    );
  }
}
