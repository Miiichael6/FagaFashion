import { Response, Request } from "express";
import { handleError } from "../utils/handleError";
import { Post } from "../entities";

const create = async (req: Request, res: Response) => {
  try {
    const { description, user } = req.body;

    const post = Post.create({ description, user });
    await Post.save(post);

    return res.send(post);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({
      where: { id: +id },
    });

    if(!post) {
      throw new Error(`No existe el Post a eliminar`)
    }

    const result = await Post.delete({id: +id});

    if(result.affected === 0) {
      throw new Error(`error del servidor post con Id: <<${id}>> no ha sido eliminado`)
    }

    return res.status(200).send({msg: `<<${id}>> eliminado`});
  } catch (error) {
    return res.send(handleError(error));
  }
};

export {
  create,
  deleteOne,
  // findAll,
  // findOne,
  // update
};
