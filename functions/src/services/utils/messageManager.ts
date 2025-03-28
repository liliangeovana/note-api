import { IMessage } from "@utils/message";

class ServiceMessageManager {
  successMessage(message: string, response?: any): IMessage {
    console.log("Success message:", message);
    return {
      message,
      status: 200,
      success: true,
      response,
    };
  }

  informationMessage(message: string, response?: any): IMessage {
    console.log("Information message:", message);
    return {
      message,
      status: 250,
      success: true,
      response,
    };
  }

  errorMessage(message: string, response?: any): IMessage {
    console.log("Error message:", message);
    return {
      message,
      status: 400,
      success: false,
      response,
    };
  }
}

export const serviceMessageManager = new ServiceMessageManager();
