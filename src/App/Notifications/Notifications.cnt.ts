import { connect } from "react-redux";

import Notifications from "./Notifications.cmp";
import { notificationsSelector } from "./Notifications.duck";

import { IRootState } from "./../App.duck";

const mapStateToProps = (state: IRootState) => ({
  notifications: notificationsSelector(state)
});

const NotificationsCnt = connect(mapStateToProps)(Notifications);

export default NotificationsCnt;
