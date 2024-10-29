import { v4 as uuid } from "uuid";
import { Order } from "../../checkout/orders/order";
import { OrderItem } from "../../checkout/orders/orderItem";
import Customer from "../../customer/entity/customer";

export default class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
  static placeOrder(customer: Customer, item: OrderItem[]): Order {
    const order = new Order(uuid(), customer.id, item);
    customer.addRewardPoints(order.total() / 2);
    return order;
  }
}
