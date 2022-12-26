"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get404 = void 0;
const get404 = (req, res, next) => {
    const messageObj = {
        pageTitle: "PageNotFound",
        path: "/404",
    };
    res.status(404).render("404", messageObj);
};
exports.get404 = get404;
