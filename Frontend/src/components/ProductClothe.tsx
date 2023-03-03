import { ProductProps } from "../app/features/clothes/interfaces";
import scss from "../sass/modules/ProductClothe.module.scss";

const ProductClothe = ({
  id,
  name,
  image,
  price,
}: ProductProps) => {
  return (
    <div key={id} className={scss.ProductContainer}>
      <img src={image} alt={name} className={scss.ProductImage} />
      <p className={scss.ProductName}>{name}</p>
      <p className={scss.ProducPrice}>precio: ${price}</p>
    </div>
  );
};

export default ProductClothe;
