import React, { SFC } from "react";

import { List } from "material-ui/List";

import Notification from "./Notification/Notification.cmp";

export interface INotifs {
  notifications: { list: Array<{ id: number; text: string }> };
  dispatch: any;
}

const Notifications: SFC<INotifs> = ({ notifications }) => {
  return (
    <List>
      {notifications.list.map(v => <Notification key={v.id} text={v.text} />)}
    </List>
  );
};

export default Notifications;
