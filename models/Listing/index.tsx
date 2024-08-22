import mongoose, { Document, Model } from "mongoose";
import Users from "../User";

export interface Listing {
  title: string;
  price: string;
  category: string;
  state: string;
  city: string;
  description: string;
  condition: string;
  propertyType: string;
  propertyPurpose: string;
  propertySize: string;
  propertyAge: string;
  landSize: string;
  bedrooms: string;
  bathrooms: string;
  security: string;
  mobileBrand: string;
  screenSize: string;
  screenResolution: string;
  phoneRam: string;
  phoneStorage: string;
  phoneColor: string;
  phoneBattery: string;
  operatingSystem: string;
  negotiable: string;
  postedBy: string;
  postView: number;
  listingStatus: number;
  images: string;
}

export interface ListingDocument extends Listing, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the Listing document, specifying the types
// and constraints
const ListingSchema = new mongoose.Schema<ListingDocument>(
  {
    title: {
      type: String,
    },
    images: { type: String },
    price: {
      type: String,
    },
    category: {
      type: String,
    },
    negotiable: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    description: {
      type: String,
    },
    condition: {
      type: String,
    },
    propertyPurpose: {
      type: String,
    },
    propertyType: {
      type: String,
    },
    propertySize: {
      type: String,
    },
    landSize: {
      type: String,
    },
    propertyAge: {
      type: String,
    },
    bedrooms: {
      type: String,
    },
    bathrooms: {
      type: String,
    },
    security: {
      type: String,
    },
    mobileBrand: {
      type: String,
    },
    screenSize: {
      type: String,
    },
    screenResolution: {
      type: String,
    },
    operatingSystem: {
      type: String,
    },
    phoneRam: {
      type: String,
    },
    phoneStorage: {
      type: String,
    },
    phoneColor: {
      type: String,
    },
    phoneBattery: {
      type: String,
    },
    postedBy: {
      type: String,
    },
    postView: {
      type: Number,
    },
    listingStatus: {
      type: Number,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Define a virtual field for `postedBy` to reference the Users collection
ListingSchema.virtual("userDetails", {
  ref: Users, // The model to use for population
  localField: "postedBy", // Field in the Listing schema
  foreignField: "email", // Field in the Users schema
  justOne: true, // Since we expect a single match
});

// Ensure that the virtuals are included when converting the document to JSON
ListingSchema.set("toObject", { virtuals: true });
ListingSchema.set("toJSON", { virtuals: true });

const Listing: Model<ListingDocument> =
  mongoose.models?.Listing || mongoose.model("Listing", ListingSchema);

export default Listing;
