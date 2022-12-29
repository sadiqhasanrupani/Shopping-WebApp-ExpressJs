import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { Message404 } from "../utils/message404";

export const get404 = (req: Req, res: Res, next: Next) => {
  const message404: Message404 = {
    pageTitle: "PageNotFound",
    path: "/404",
  };
  res.status(404).render("404", message404);
};
