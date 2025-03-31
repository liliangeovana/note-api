interface IMessage {
  message: string;
  status: number;
  success: boolean;
  data?: any;
}

class MessageManager {

  successMessage(message: string, status: number, data?: any): IMessage {
    console.log("Success message:", message);
    return {
      message,
      status,
      success: true,
      data,
    };
  }

  informationMessage(message: string, status: number, data?: any) {
    console.log("Information message: ", message);
    return {
      message,
      status,
      success: true,
      data,
    };
  }

  errorMessage(message: string, status: number, data?: any) {
    console.log("Error message:", message);
    return {
      message,
      status,
      success: true,
      data,
    };
  }
}

export const messageManager = new MessageManager();
