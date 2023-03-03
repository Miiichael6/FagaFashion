import { Product } from "./Product.entity";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true, nullable: false })
  firstname: string;

  @Column({ type: "text", unique: true, nullable: false })
  lastname: string;

  @Column({ default: true })
  active: boolean;

  // @OneToMany(() => Product, (product) => product.seller)
  // products?: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
