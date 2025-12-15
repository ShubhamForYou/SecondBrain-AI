import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader =
    (req.headers.authorization as string) ||
    (req.headers.Authorization as string);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const token = authHeader.split(" ")[1];
  const JWT_SECRET = process.env.JWT_SECRET;
  const decode = jwt.verify(token as string, JWT_SECRET as string);
  if (decode) {
    //@ts-ignore
    const userId = decode.userId;
    // @ts-ignore
    req.userId = userId;
    next();
  } else {
    return res.status(401).json({ message: "you are not logged in" });
  }
};
