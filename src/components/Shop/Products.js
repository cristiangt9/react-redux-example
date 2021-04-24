import DummyProductsData from "./DummyProductsData";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProductsData.map((product) => (
          <ProductItem
            key={`product_${product.id}`}
            product={product}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
