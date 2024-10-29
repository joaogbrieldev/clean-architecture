import Product from "../../../../domain/product/entity/product";
import ProductInterface from "../../../../domain/product/entity/product.interface";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductInterface {
  get id(): string {
    throw new Error("Method not implemented.");
  }
  get name(): string {
    throw new Error("Method not implemented.");
  }
  get price(): number {
    throw new Error("Method not implemented.");
  }
  async create(entity: Product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price,
    });
  }

  async update(entity: Product): Promise<void> {
    await ProductModel.update(
      {
        name: entity.name,
        price: entity.price,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }

  async find(id: string): Promise<Product> {
    const productModel = await ProductModel.findOne({ where: { id } });
    return new Product(productModel.id, productModel.name, productModel.price);
  }

  async findAll(): Promise<Product[]> {
    const productModels = await ProductModel.findAll();
    return productModels.map(
      (productModel) =>
        new Product(productModel.id, productModel.name, productModel.price)
    );
  }
}
