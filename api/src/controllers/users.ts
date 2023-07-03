import { Response, Request } from "express";

type UserInfo = {
  email: string;
  password: string;
};

const array: UserInfo[] = [];

export const createUser = async (req: Request, res: Response) => {
  array.push(req.body);
  console.log(array);
  res.status(200).json({
    message: "user created",
  });
};
