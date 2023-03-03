import { Response, Request } from "express";
import { handleError } from "../utils/handleError";
import { Product, Category } from "../entities";
import { ProductProps } from "../interfaces";
import { In } from "typeorm";
import SeedProducts from "../seeds/Products.seed";

const create = async (req: Request, res: Response) => {
  try {
    let {
      description,
      image,
      name,
      price,
      categories = [],
      gender,
    }: ProductProps = req.body;

    const product = Product.create({
      description,
      image,
      name,
      gender,
      price: Number(price) || 100.99,
    });

    if (categories.length > 0) {
      const categoriesToNumber = categories.map((id) => Number(id));
      const productCategories = await Category.find({
        // "In" busca los productos que coincidan con los Ids coincida con varios Ids [1,2,4]
        where: { id: In(categoriesToNumber) },
      });

      if (!product.categories) product.categories = [];

      for (const category of productCategories) {
        product.categories.push(category);
      }
    }

    await Product.save(product);

    return res.send(product);
  } catch (error: any) {
    return res.status(400).send(handleError(error));
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      where: { id: +id },
    });

    if (!product) {
      throw new Error(`No existe el product a eliminar`);
    }

    const result = await Product.delete({ id: +id });

    if (result.affected === 0) {
      throw new Error(
        `error del servidor product con Id: <<${id}>> no ha sido eliminado`
      );
    }

    return res.status(200).send({ msg: `<<${id}>> eliminado` });
  } catch (error: any) {
    return res.status(400).send(handleError(error));
  }
};

const findAll = async (req: Request, res: Response) => {
  // ?take=10&offset=0
  const { limit = 3, offset = 0 } = req.query;
  let products;

  try {
    if (limit && offset) {
      products = await Product.find({
        skip: Number(offset) * Number(limit),
        take: Number(limit),
        relations: {
          // categories: true,
        },
      });
    } else {
      products = await Product.find({});
    }

    return res.send(products);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

// api/products/filters/:gender
const filterProducts = async (req: Request, res: Response) => {
  try {
    const { gender } = req.params;
    // => mix // => men // => women
    const { price } = req.query;
    // cheap and expensive
    let filterProductsBy;

    if (gender && (price === "cheap" || price === "expensive")) {
      filterProductsBy = await Product.find({
        where: { gender: gender },
        order: {
          price: price === "cheap" ? "ASC" : "DESC",
        },
      });
    } else if (gender) {
      filterProductsBy = await Product.find({
        where: { gender: gender },
      });
    }

    return res.status(201).send(filterProductsBy);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

const findOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      where: {
        id: +id,
      },
      relations: {
        categories: true,
      },
    });

    if (!product) {
      throw new Error(`El producto con Id <<${id}>> no Existe`);
    }

    return res.send(product);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const {
      description,
      image,
      name,
      price,
      categories = [],
    }: ProductProps = req.body;
    const { id } = req.params;

    const product = await Product.findOneBy({ id: +id });

    if (!product) {
      throw new Error(`El producto con <<${id}>> no existe`);
    }

    product.description = description || product.description;
    product.image = image || product.image;
    product.name = name || product.name;
    product.price = Number(price) || product.price;

    if (product && categories.length > 0 && Array.isArray(categories)) {
      const categoriesToNumber = categories.map((id) => Number(id));
      const productCategories = await Category.find({
        where: { id: In(categoriesToNumber) },
      });

      if (!product.categories || product.categories.length === 0) {
        product.categories = [];
      }

      for (const category of productCategories) {
        product.categories.push(category);
      }
    }

    await Product.save(product);

    return res.send(product);
  } catch (error: any) {
    return res.send(handleError(error));
  }
};

const productsSeed = async (req: Request, res: Response) => {
  try {
    await Product.delete({})
    await Product.insert(SeedProducts);

    return res.status(200).send(SeedProducts)
  } catch (error) {
    return res.send(handleError(error));
  }

};

export {
  create,
  deleteOne,
  findAll,
  findOne,
  update,
  filterProducts,
  productsSeed,
};
