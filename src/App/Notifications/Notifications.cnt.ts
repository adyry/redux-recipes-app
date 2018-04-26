import { connect } from "react-redux";

import Notifications from "./Notifications.cmp";
import {
  INotificationsListState,
  notificationsSelector
} from "./Notifications.duck";

import { IRootState } from "./../App.duck";

export interface IStateProps {
  notifications: INotificationsListState;
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  notifications: notificationsSelector(state)
});

const NotificationsCnt = connect(mapStateToProps)(Notifications);

export default NotificationsCnt;
