import { connectToMongoDB } from "@/lib/db";
import Listing from "@/models/Listing";

export const revalidate = 0;
export const dynamic = "force-static";

export async function GET(request: Request) {
  try {
    await connectToMongoDB();
    const fetchListings = await Listing.find({})
      .select("title category price state images postView")
      .limit(12)
      .sort({ createdAt: -1 })
      .maxTimeMS(20000);

    return Response.json(
      { status: true, statusCode: 1, message: "success", data: fetchListings },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { status: false, statusCode: 0, message: "fail" },
      { status: 200 }
    );
  }
}
