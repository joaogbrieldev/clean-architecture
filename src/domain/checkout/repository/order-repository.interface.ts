import RepositoryInterface from "../../@shared/repository/repository-interface";
import Order from "../orders/order";

export default interface IOderRepository extends RepositoryInterface<Order> {} {
  
}