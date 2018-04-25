import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";
import React from "react";

export interface INotificationProps {
  id: number;
  text: string;
}

const Notification = ({ id, text }: INotificationProps) => {
  return (
    <div key={id}>
      <ListItem secondaryText={<p>{text}</p>} secondaryTextLines={2} />
      <Divider inset={true} />
    </div>
  );
};

export default Notification;
