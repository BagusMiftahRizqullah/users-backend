const admin = require("./firebase");

// Function to send notification
const sendNotification = async (deviceToken, title, body) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: deviceToken, // FCM token
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

// Example Usage
const deviceToken = "USER_FCM_TOKEN_HERE"; // Replace with a real FCM token
sendNotification(deviceToken, "Hello!", "This is a Firebase notification.");
