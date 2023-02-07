import { Post } from "../entities";

export interface UserInterface {
  firstname: string;
  lastname: string;
  posts?: Post[];
}
