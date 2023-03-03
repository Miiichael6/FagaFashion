export interface CategoriesProps {
  id: number;
  name: string;
  image: string;
  createdAt: Date;
}

export interface ProductProps {
  id: number;
  name: string;
  image?: string;
  price: number;
  gender: string;
  description?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  categories?: CategoriesProps[];
}
