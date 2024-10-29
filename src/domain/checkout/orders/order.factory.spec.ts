import OrderFactory from "./order.factory";

describe("Product factory unit tests", () => {
  test("should create a product type a", () => {
    const order = { id: "id1", customerId: "id2", items: [{
      id: 'any',
      name: 'any',
      productId: 'any',
      quantity:  1,
      price: 1,
    }]}
    const customer = OrderFactory.create(order);
    expect(customer.id).toBeDefined();
    expect(customer.customerId).toBe("id2");
    expect(customer.constructor.name).toBe("Order")
  })
})