import { Category, User } from "../entities";

export interface ProductProps {
  description: string;
  image: string;
  name: string;
  price: number;
  gender: string;
  categories?: Category[] | [];
  seller?: User;
}
