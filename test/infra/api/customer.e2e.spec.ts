import request from "supertest";
import { app, sequelize } from "../../../src/infra/api/express/express";
describe("E2E test for customer", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });
  afterAll(async () => {
    await sequelize.close();
  });
  test("should create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "John",
        address: {
          street: "Street",
          city: "City",
          number: 123,
          zip: "12345",
        },
      });
    expect(response.status).toBe(201);
  });
});
