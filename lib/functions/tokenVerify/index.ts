import jwt from "jsonwebtoken";
export async function verifyToken(token: string) {
    const secretKey: string = process.env.ACCESS_TOKEN_SECRET as string;
    try {
        jwt.verify(token, secretKey);
        return true;
      } catch(err) {
        return false;
      }
}
