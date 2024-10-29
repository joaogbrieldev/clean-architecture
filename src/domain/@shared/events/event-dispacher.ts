import IEventDispacher from "./event-dispacher.interface";
import IEventHandler from "./event-handler.interface";
import IEvent from "./event.interface";

export default class EventDispatcher implements IEventDispacher {

  notify(event: IEvent): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]){
      this.eventHandlers[eventName].forEach(eventHandler => {
        eventHandler.handle(event)
      })
    }
  }

  register(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (!this.eventHandlers[eventName]){
      this.eventHandlers[eventName] = []
    } 
    this.eventHandlers[eventName].push(eventHandler)
  }

  unregister(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (this.eventHandlers[eventName]){
      const index = this.eventHandlers[eventName].indexOf(eventHandler);
      if (index !== -1){
        this.getEventHandlers[eventName].splice(index, 1)
      }
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {}
  }

  private eventHandlers: { [ eventName: string]: IEventHandler[] } = {};

  get getEventHandlers(): {[eventName: string]: IEventHandler[]} {
    return this.eventHandlers;
  }
}