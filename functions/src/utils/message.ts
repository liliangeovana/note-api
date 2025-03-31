class MessageManager {
  successMessage(response?: any) {
    console.log("Success message:", response);
    return response;
  }

  informationMessage(response?: any) {
    console.log("Information message:", response);
    return response;
  }

  errorMessage(response?: any) {
    console.log("Error message:", response);
    return response;
  }
}

export const messageManager = new MessageManager();
