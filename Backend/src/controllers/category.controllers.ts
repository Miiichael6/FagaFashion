// import { In } from "typeorm";
import { Response, Request } from "express";
import { handleError } from "../utils/handleError";
import { Category } from "../entities";
import categoriasSeed from "../seeds/Categories.seed";

const create = async (req: Request, res: Response) => {
  try {
    const { name, image } = req.body;

    const category = Category.create({ name, image });
    await Category.save(category);

    return res.send(category);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

const findOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findOneBy({ id: +id });

    return res.send(category);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

const findAll = async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    return res.send(categories);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({
      where: { id: +id },
    });

    if (!category) {
      throw new Error(`No existe el Post a eliminar`);
    }

    const result = await Category.delete({ id: +id });

    if (result.affected === 0) {
      throw new Error(
        `error del servidor post con Id: <<${id}>> no ha sido eliminado`
      );
    }

    return res.status(200).send({ msg: `category con <<${id}>> eliminado` });
  } catch (error) {
    return res.send(handleError(error));
  }
};

const seedCategory = async (req: Request, res: Response) => {
  try {
    await Category.insert(categoriasSeed);
    
    return res.send(categoriasSeed);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

export {
  create,
  deleteOne,
  findAll,
  findOne,
  seedCategory,
  // update
};
