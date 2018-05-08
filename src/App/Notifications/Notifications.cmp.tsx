import React, { SFC } from "react";

import Notification from "./Notification/Notification.cmp";

import { IStateProps } from "./Notifications.cnt";

const Notifications: SFC<IStateProps> = ({ notifications }) => {
  return (
    <div>
      {notifications.list.map(v => (
        <Notification key={v.id} text={v.text} open={v.open} />
      ))}
    </div>
  );
};

export default Notifications;
