import { connectToMongoDB } from "@/lib/db";
import Listing from "@/models/Listing";

export async function POST(request: Request) {
  try {
    await connectToMongoDB();
    const bodyProps = await request.json();
    let {
      listingTitle,
      listingLocation,
      listingCategory,
      listingMin,
      listingMax,
    } = bodyProps;

    if (listingMax == 0) {
      listingMax = 100000000000000;
    }

    const filter: {
      $expr: any;
      category?: string;
      state?: string;
      title?: { $regex: string; $options: string };
    } = {
      $expr: {
        $and: [
          { $gte: [{ $toDouble: "$price" }, listingMin] },
          { $lte: [{ $toDouble: "$price" }, listingMax] },
        ],
      },
    };

    // Add search filter if listingTitle is not empty

    if (listingTitle) {
      filter.title = {
        $regex: listingTitle,
        $options: "i", // 'i' for case-insensitive search
      };
    }

    // Add state location filter if listingLocation is not empty
    if (listingLocation) {
      filter.state = listingLocation;
    }

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
    console.log(error);
    return Response.json(
      { data: { statusCode: 0, message: "Error log" } },
      { status: 200 }
    );
  }
}
