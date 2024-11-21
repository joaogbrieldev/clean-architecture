export type NotificationError = {
  context: string;
  message: string;
};

export class Notification {
  private errors: NotificationError[] = [];

  addError(error: NotificationError) {
    this.errors.push(error);
  }

  messages(): string {
    let message = "";
    this.errors.forEach((error) => {
      message += `${error.context}: ${error.message},`;
    });
    return message;
  }
}
