import { Router } from "express";
import { User } from "../controllers/User";

const userRouters = Router();

const UserControllers = new User();

userRouters
	.get("/users", UserControllers.geAllUsers)
	.post("/users", UserControllers.createUser)
	.put("/users/:id", UserControllers.updateUsers)
	.delete("/users/:id", UserControllers.deleteUsersForId);

export { userRouters };
