import e, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../customer/repository/sequelize/customer.model";
import { customerRoute } from "../routes/customer.route";

export const app: Express = e();
app.use(e.json());
app.use("/customer", customerRoute);
export let sequelize: Sequelize;

async function initDb() {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
  await sequelize.addModels([CustomerModel]);
  await sequelize.sync();
}
initDb();
