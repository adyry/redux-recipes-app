import Divider from "material-ui/Divider";
import { ListItem } from "material-ui/List";
import React, { SFC } from "react";

export interface IOwnProps {
  text: string;
}

const Notification: SFC<IOwnProps> = ({ text }) => {
  return (
    <div>
      <ListItem secondaryText={<p>{text}</p>} secondaryTextLines={2} />
      <Divider inset={true} />
    </div>
  );
};

export default Notification;
