import scss from "../sass/modules/FilterSectionMan.module.scss";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { getClothesCategories } from "../app/features/categories/categoriesThunks";

interface FilterSectionProps {}

const FilterSection = ({}: FilterSectionProps) => {
  const dispatch = useAppDispatch();
  const menCategories = useAppSelector((state) => state.categories.filters);
  const [typesClothes, setTypesClothes] = useState({
    men: false,
    kids: false,
  });

  useEffect(() => {
    dispatch(getClothesCategories());
  }, []);

  const handlePressTypeButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { name } = e.currentTarget;
    if (name === "men") {
      setTypesClothes({ ...typesClothes, men: !typesClothes.men });
    } else if (name === "kids") {
      setTypesClothes({ ...typesClothes, kids: !typesClothes.kids });
    }
  };

  const filterManClothes = (e:React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    const {value} = e.currentTarget;
    // dispatch(filterMenClothesBy(value))
    // 
  }

  return (
    <div className={scss.filterClothesComponent}>
      <div className={scss.filtersContainer}>
        <div>
          <button
            type="button"
            name="men"
            className={`${scss.ManButton} ${
              typesClothes.men && scss.activeManButton
            }`}
            onClick={(e) => handlePressTypeButton(e)}
          >
            Men
          </button>
          <button
            type="button"
            name="kids"
            className={`${scss.KidButton} ${
              typesClothes.kids && scss.activeKidsButton
            }`}
            onClick={(e) => handlePressTypeButton(e)}
          >
            Kids
          </button>
        </div>
        <div>
          <input
            type="text"
            className={scss.searchBarMen}
            placeholder="buscar por nombre"
          />
        </div>
        <div>
          <select className={scss.selectBarMen} onClick={(e) => filterManClothes(e)}>
            <option value="">---</option>
            {menCategories.length &&
              menCategories.map((category) => {
                return (
                  <option value={category.name} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
