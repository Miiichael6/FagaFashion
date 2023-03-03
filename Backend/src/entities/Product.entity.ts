import { Category } from "./index";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  Check,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false, unique: true })
  name: string;

  @Column({
    type: "text",
    nullable: false,
    default:
      "https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg",
  })
  image?: string;

  @Column({ type: "text", default: "No description yet" })
  description: string;

  @Column({ type: "float", nullable: false })
  price: number;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({
    name: "category_product",
    joinColumn: {
      name: "productId",
    },
    inverseJoinColumn: {
      name: "categoryId",
    },
  })
  categories?: Category[];

  @Column({ type: 'text', default: "mixto" })
  @Check(`"gender" IN ('men', 'women', 'mix')`)
  gender: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
