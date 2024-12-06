import React, { useState } from "react";
import PropTypes from "prop-types";

const NotificationsSection = () => {
  const [notifications, setNotifications] = useState([
    {
      title: "Blood Request Status",
      message: "Your request for O+ blood has been approved.",
    },
    {
      title: "Request Update",
      message: "AB+ blood is now available for your request.",
    },
  ]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">You have no new notifications.</p>
      ) : (
        <div className="bg-white p-6 rounded shadow-md">
          {notifications.map((notification, index) => (
            <div key={index} className="mt-4 p-4 border bg-gray-100">
              <h4 className="font-semibold">{notification.title}</h4>
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

NotificationsSection.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default NotificationsSection;
