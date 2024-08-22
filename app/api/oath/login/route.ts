import Users from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface BodyProps {
  email: string;
  pass: string;
}

export async function POST(request: Request) {
  const { email, pass }: BodyProps = await request.json();

  const checkEmail = await Users.findOne({ email: email });
  if (!checkEmail) {
    return Response.json(
      { data: { statusCode: 0, message: "Wrong Email or Password" } },
      { status: 200 }
    );
  }

  if (!bcrypt.compareSync(pass, checkEmail.password)) {
    return Response.json(
      { data: { statusCode: 0, message: "Wrong Email or Password" } },
      { status: 200 }
    );
  }

  const secretKey: string = process.env.ACCESS_TOKEN_SECRET as string;
  let jwtToken = jwt.sign({ email: email }, secretKey, {
    expiresIn: "1h",
  });

  return Response.json(
    {
      data: {
        statusCode: 1,
        message: "Login Successfully",
        token: jwtToken,
        email: email,
        fullName: checkEmail.fullName,
      },
    },
    { status: 200 }
  );
}
