import { Product } from "./index";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
  ManyToMany,
} from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false, unique: true })
  name: string;

  @Column({ type: "text", nullable: false })
  image?: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products?: Product[];

  @CreateDateColumn()
  createdAt: Date;
}
