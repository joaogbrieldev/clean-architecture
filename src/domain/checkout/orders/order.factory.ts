import Order from "./order";
import { IOrder } from "./order.interface";
import OrderItem from "./orderItem";

export default class OrderFactory {
  public static create (order: IOrder): Order{
    const items = order.items.map((item) => {
      return new OrderItem(
        item.id, item.name, item.price, item.productId, item.quantity
      )
    })
    return new Order(order.id, order.customerId, items)
  }
}