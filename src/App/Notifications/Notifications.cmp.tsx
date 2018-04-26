import React, { SFC } from "react";

import { List } from "material-ui/List";

import Notification from "./Notification/Notification.cmp";
import { INotificationsListState } from "./Notifications.duck";

export interface INotifs {
  notifications: INotificationsListState;
}

const Notifications: SFC<INotifs> = ({ notifications }) => {
  return (
    <List>
      {notifications.list.map(v => <Notification key={v.id} text={v.text} />)}
    </List>
  );
};

export default Notifications;
