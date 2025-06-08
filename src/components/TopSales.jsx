import { Row } from "react-bootstrap";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

const TopSales = ({ products = [] }) => {
  return products.length > 0 ? (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>

      {/* <Loader /> */}

      <Row className="g-4 d-flex">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cardClassName="card"
            basePath={"catalog/"}
          />
        ))}
      </Row>
    </section>
  ) : null;
};

export default TopSales;
