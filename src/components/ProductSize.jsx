import { useState } from "react";

const ProductSize = ({
  availableSize,
  isActive,
  index,
  setActiveIndex,
  handleSize,
}) => {
  return !isActive ? (
    <span
      className="catalog-item-size"
      onClick={() => {
        setActiveIndex(index);
        // Обновить поле в продукте с размером
        handleSize(availableSize.size);
      }}
    >
      {availableSize.size}
    </span>
  ) : (
    <span
      className="catalog-item-size selected"
      // onClick={() => setActiveIndex(null)}
    >
      {availableSize.size}
    </span>
  );
};

export default ProductSize;
