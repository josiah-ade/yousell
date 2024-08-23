import Users from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import randomstring from "randomstring";

interface BodyProps {
  email: string;
  fullName: string;
  pass: string;
}

export async function POST(request: Request) {
  const { email, fullName, pass }: BodyProps = await request.json();

  const checkEmail = await Users.find({ email: email }).maxTimeMS(20000);
  if (checkEmail.length > 0) {
    return Response.json(
      { data: { statusCode: 0, message: "Email Already Taken" } },
      { status: 200 }
    );
  }

  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(pass, salt);

  const randomGen = randomstring.generate(30);

  const secretKey: string = process.env.ACCESS_TOKEN_SECRET as string;
  let jwtToken = jwt.sign({ email: email }, secretKey, {
    expiresIn: "1h",
  });

  await Users.create({ fullName, email, password, randomGen, jwtToken });

  return Response.json(
    {
      data: {
        statusCode: 1,
        message: "New User Created",
        token: jwtToken,
        email: email,
        fullName: fullName,
      },
    },
    { status: 201 }
  );
}
