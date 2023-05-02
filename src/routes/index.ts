import bodyParser from "body-parser";
import express from "express";
import { ExpressTypeBasic } from "../@types/ExpressTypeBasic";

import { userRouters } from "./usersRouter";

const route = (app: express.Application) => {
	app.route("/").get(({ req, res }: ExpressTypeBasic) => {
		res.status(200).send({
			message: "Hello World",
		});
	});

	app.use(bodyParser.json(), userRouters);
};

export { route };
