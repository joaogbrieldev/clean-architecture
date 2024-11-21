import { Notification } from "./notification";

describe("Unit tests for notification pattern", () => {
  test("", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    };
    notification.addError(error);
    expect(notification.messages()).toBe("customer: error message,");
  });
});
