import { NextFunction, Request, Response } from "express";

export interface ExpressTypeBasic {
	req: Request;
	res: Response;
	next?: NextFunction;
}
