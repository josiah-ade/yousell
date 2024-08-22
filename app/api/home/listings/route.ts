import Listing from "@/models/Listing";

export async function GET(request: Request) {
  const fetchListings = await Listing.find({}).select('title category price state images postView').limit(8).sort({ createdAt: -1 }) ;

  return Response.json(
    { status: true, statusCode: 1, message: "success", data: fetchListings },
    { status: 200 }
  );
}
