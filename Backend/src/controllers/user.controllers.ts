import { Request, Response } from "express";
import { createUser, deleteOneUser, findAllUsers, findOneUser, updateOneUser } from '../services/user.services';

export function create({ body }: Request, res: Response) {
  return createUser(body, res);
}

export function findAll(_req: Request, res: Response) {
  return findAllUsers(res)
}

export function findOne(req: Request, res: Response){
  const {id} = req.params;
  return findOneUser(+id, res)
}

export function update (req:Request, res: Response) {
  const id = req.params.id;
  const body = req.body
  return updateOneUser(+id, body, res)
}

export function deleteOne (req:Request, res: Response) {
  const {id} = req.params;
  return deleteOneUser(+id, res)
}
