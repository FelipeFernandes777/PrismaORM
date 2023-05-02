import { prisma } from "../config/connectDb";

import { Request, Response } from "express";

import { ErrorBase } from "../errors/ErrorBase";

interface BodyControll {
  name: string;
  email: string;
}

export class User {
  //Created Users
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      //Get attributes {name and email}
      const { name, email }: BodyControll = req.body;

      // Set Attributes
      const createdUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
        },
      });

      //Return User Created
      res.status(201).json(createdUser);
    } catch (error) {
      // Middleware Erro
      new ErrorBase(error, 400);
    }
  }

  async geAllUsers(req: Request, res: Response) {
    try {
      const getUsers = await prisma.user.findMany({});

      // Verify if have users in dataBase
      if (getUsers === null) {
        return res
          .status(200)
          .send({ message: "There are no users in the database" });
      } else {
        return res.status(200).json(getUsers);
      }
    } catch (error) {
      new ErrorBase(error, 400);
    }
  }

  async updateUsers(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const { name, email }: BodyControll = req.body;

      await prisma.user.update({
        where: {
          id: Number(id) || undefined,
        },
        data: {
          name: name,
          email: email,
        },
      });
      res.status(200).send({ message: `User ${name} updated` });
    } catch (error) {
      new ErrorBase(error, 400);
    }
  }

  async deleteUsersForId(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });

      res.status(200).send({ message: "User deleted" });
    } catch (error) {
      new ErrorBase(error);
    }
  }
}
