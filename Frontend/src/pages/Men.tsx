import { useEffect } from "react";
import { getAllClothes } from "../app/features/clothes/clothesAsyncActions";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import ProductClothe from "../components/ProductClothe";
import scss from "../sass/modules/MenPage.module.scss";
import FilterSection from "../components/FilterSection";

const Men = () => {
  const dispatch = useAppDispatch();
  const menClothes = useAppSelector((state) => state.products.men);

  useEffect(() => {
    dispatch(getAllClothes());
  }, []);

  return (
    <div className={scss.ManPageClothes}>
      <section className={scss.MenSectionFilterClothes}>
        <FilterSection />
      </section>
      <section className={scss.MenSectionClothes}>
        {menClothes.length > 0 &&
          menClothes.map((clothe) => (
            <ProductClothe
              key={clothe.id}
              id={clothe.id}
              name={clothe.name}
              price={clothe.price}
              image={clothe.image}
              gender={clothe.gender}
            />
          ))}
      </section>
    </div>
  );
};

export default Men;
