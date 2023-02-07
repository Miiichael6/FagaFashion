import { UserInterface } from "../interfaces/user.interface";
import { User, Post } from "../entities";
import { Response } from "express";
import { handleError } from "../utils/handleError";

export const createUser = async (body: UserInterface, res: Response) => {
  try {
    const { firstname, lastname, posts } = body;

    const user = User.create({ firstname, lastname, posts });
    await User.save(user);

    return res.send(user);
  } catch (error) {
    return res.status(400).send(handleError(error));
  }
};

export const findAllUsers = async (res: Response) => {
  try {
    const users = await User.find();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(handleError(error));
  }
};

export const findOneUser = async (id: number, res: Response) => {
  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
      relations: {
        posts: true,
      },
    });

    if (!user) {
      throw new Error(`el usuario con <<${id}>> no existe`);
    }

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(handleError(error));
  }
};

export const updateOneUser = async (
  id: number,
  body: UserInterface,
  res: Response
) => {
  try {
    const userExist = await User.findOne({ where: { id: id } });

    if (!userExist) {
      throw new Error(`El Usuario con Id: '${id}' no existe`);
    }

    // PRIMERA FORMA
    // userExist.firstname = body.firstname || userExist.firstname;
    // userExist.lastname = body.lastname || userExist.lastname;
    // await User.save(userExist)

    // SEGUNDA FORMA
    await User.update({ id: id }, body);

    return res.sendStatus(204);
  } catch (error: any) {
    return res.status(501).send(handleError(error));
  }
};

export const deleteOneUser = async (id: number, res: Response) => {
  try {
    const userExist = await User.findOne({ where: { id: id } });

    if (!userExist) {
      throw new Error(`El Usuario con Id: '${id}' no existe`);
    }

    const result = await User.delete({ id: id });

    if (result.affected === 0) {
      throw new Error(
        `error del servidor Usuario con Id: <<${id}>> no ha sido eliminado`
      );
    }

    return res.status(200).send({ msg: `<<${id}>> eliminado` });
  } catch (error: any) {
    return res.status(501).send(handleError(error));
  }
};
