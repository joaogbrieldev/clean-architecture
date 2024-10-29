import Product from "../entity/product";
import IRepository from "./repository-interface";

export default interface ProductInterface extends IRepository<Product> {}
