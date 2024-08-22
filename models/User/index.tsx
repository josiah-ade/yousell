import mongoose, { Document, Model } from "mongoose";

export interface Users {
  fullName: string;
  email: string;
  password: string;
  randomGen: string;
  jwtToken: string;
}

export interface UsersDocument extends Users, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the users document, specifying the types
// and constraints
const usersSchema = new mongoose.Schema<UsersDocument>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    randomGen: {
      type: String,
      required: true,
    },
    jwtToken: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

const Users: Model<UsersDocument> =
  mongoose.models?.Users || mongoose.model("Users", usersSchema);

export default Users;
