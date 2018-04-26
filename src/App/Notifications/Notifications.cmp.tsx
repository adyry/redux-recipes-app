import React, { SFC } from "react";

import { List } from "material-ui/List";

import Notification from "./Notification/Notification.cmp";

import { IStateProps } from "./Notifications.cnt";

const Notifications: SFC<IStateProps> = ({ notifications }) => {
  return (
    <List>
      {notifications.list.map(v => <Notification key={v.id} text={v.text} />)}
    </List>
  );
};

export default Notifications;
