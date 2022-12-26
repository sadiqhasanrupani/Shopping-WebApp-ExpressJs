import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { Message404 } from "../model/message404";

export const get404 = (req: Req, res: Res, next: Next) => {
  const messageObj: Message404 = {
    pageTitle: "PageNotFound",
    path: "/404",
  };
  res.status(404).render("404", messageObj);
};
