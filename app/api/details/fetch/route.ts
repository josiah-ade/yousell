import Listing from "@/models/Listing";
import Users from "@/models/User";

export async function POST(request: Request) {
  try {
    const bodyProps = await request.json();
    const listingId = bodyProps.id;

    const fetchListing = await Listing.findById(listingId)
      .select("-__v -updatedAt")
      .populate("userDetails", "fullName")
      .maxTimeMS(20000);

    // Check if the listing was found
    if (!fetchListing) {
      return Response.json(
        { data: { statusCode: 0, message: "fail" } },
        { status: 200 }
      );
    }

    fetchListing.postView += 1;

    await fetchListing.save();

    // console.log(fetchListing);

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
