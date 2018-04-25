import React from "react";

import { List } from "material-ui/List";
import Notification from "./Notification/Notification.cnt";

export interface IProps {
  elements: Array<{id: number; text: string}>;
}

const Notifications = ({ elements }: IProps) => {
  return (
    <List>{elements.map(v => <Notification key={v.id} text={v.text} />)}</List>
  );
};

export default Notifications;
