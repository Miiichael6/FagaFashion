import { Product } from '../entities';

export interface CategoryProps {
  name: string;
  image: string
  products?: Product[]
}