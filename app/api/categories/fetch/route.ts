import Listing from "@/models/Listing";

export async function POST(request: Request) {
  try {
    const bodyProps = await request.json();
    let { listingCategory, listingMin, listingMax } = bodyProps;

    if (listingMax == 0) {
      listingMax = 100000000000000;
    }
    
    const filter: { $expr: any; category?: string } = {
      $expr: {
        $and: [
          { $gte: [{ $toDouble: "$price" }, listingMin] },
          { $lte: [{ $toDouble: "$price" }, listingMax] },
        ],
      },
    };

    // Add category filter if listingCategory is not empty
    if (listingCategory) {
      filter.category = listingCategory;
    }

    const fetchListing = await Listing.find(filter)
      .select("title category price state images postView")
      .limit(9)
      .sort({ price: 1 });

    return Response.json(
      { data: { statusCode: 1, message: "success", data: fetchListing } },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { data: { statusCode: 0, message: "Error log" } },
      { status: 200 }
    );
  }
}
