/* eslint-disable no-unused-vars */
exports.Messages = class Messages {
  constructor() {
    this.messages = [];
  }

  async find() {
    return this.messages;
  }

  async create(data) {
    const message = {
      id: this.messages.length,
      text: data.text,
    };
    this.messages.push(message);
    return message;
  }
};
