import EventDispatcher from "../../../@shared/events/event-dispacher";
import ProductCreatedEvent from "./product-created.event";
import SendEmailWhenProductIsCreatedHandler from "./send-email.handler";


describe(("Domain events tests"), () => {
  test(("should register an event handler"), ()  => {
    const eventDispacher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispacher.register("ProductCreatedEvent", eventHandler);
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
  })
  test("should unregister an event handler", () => {
    const eventDispacher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    eventDispacher.register("ProductCreatedEvent", eventHandler);
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
    eventDispacher.unregister("ProductCreatedEvent", eventHandler)
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
    
  })
  test("should unregisterAll an event handler", () => {
    const eventDispacher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    eventDispacher.register("ProductCreatedEvent", eventHandler);
    eventDispacher.unregisterAll()
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBe(undefined);
    
  })

  test("should notify all event handlers", () => {
    const eventDispacher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    eventDispacher.register("ProductCreatedEvent", eventHandler);
    const spyEventHandle = jest.spyOn(eventHandler, 'handle')
    const productCreatedEvent = new ProductCreatedEvent({
      name: "Product 1",
      description: "Product 1 description",
      price: 10
    })
    eventDispacher.notify(productCreatedEvent)
    expect(spyEventHandle).toHaveBeenCalled()

  })
})