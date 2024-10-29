import Product from "../../product/entity/product";

export class ProductService {
  static increasePrice(products: Product[], percentagem: number): void {
    products.forEach((product) => {
      product.changePrice((product.price * percentagem) / 100 + product.price);
    });
  }
}
