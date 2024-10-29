import CustomerFactory from "./customer.factory";

describe("Product factory unit tests", () => {
  test("should create a product type a", () => {
    const customer = CustomerFactory.create("João");
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("João");
    expect(customer.constructor.name).toBe("Customer")
  })
})