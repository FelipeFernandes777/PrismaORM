import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import { route } from "./routes";
import { ErrorHandler } from "./middlewares/ErrorHandler";

const app: express.Application = express();

app.use(bodyParser.json(), express.json());

app.use(ErrorHandler);

route(app);

export default app;
