import Snackbar from "material-ui/Snackbar";
import React, { SFC } from "react";

export interface IOwnProps {
  text: string;
  open: boolean;
}

const Notification: SFC<IOwnProps> = ({ text, open }) => {
  return (
    <div>
      <Snackbar open={open} message={text} />
    </div>
  );
};

export default Notification;
