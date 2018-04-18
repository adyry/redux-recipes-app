import { combineReducers } from "redux";
import { recipes } from "./recipes";
import { tags } from "./tags";

export const rootReducer = combineReducers({
recipes,
ui: combineReducers({
home,
dashboard
//...
}),
data: combineReducers({
// reducery dla zasoboq
tranches,
users
})
});

// action typs

const ACTION1 = "MyDeal/Home/Tab/Duck1/ACTION1"; // '[ngrxModule - Feature] Action Name';
// reducer

function reducer (state = {}, action) {
switch(action.type) {
case ACTION1: {

    }
    default:
      return state

}
// plain actions

export const fetchRequest = id => ({
type: ACTION1,
id
});
export const fetchResponseSucc = id => ({
type: ACTION1,
id
});

// selectors
homeDuckSelector = state => state.ui.page;

selectHomeStatus = state => homeDuckSelector(state).status;
selectHomeFetching = state => homeDuckSelector(state).fetching;
// thnks

const fetchData = id => (dispatch, getState) => {
dispatch(fetchRequest(id));

return fetch('...')
.then(() => {
dispatch(batchedAction([
dispatch(fetchResponseSucc(id)),
dispatch(ChangePending(id)),
dispatch(ChangePending(id)),
dispatch(ChangePending(id)),
dispatch(ChangePending(id)),
dispatch(ChangePending(id)),
]))
})
.catch(() => {

    })

}
// export combined

const home = combineReducers({
page: reducer,
tabs: combineReducers({

 })
});
export default home;

///

import { fetchData } from '../duck';

const mapDispatchToProps = (dispatch, ownProps) => {
return bindActionCreators({
fetchData: () => fetchData(ownProps.id),
}, dispatch);
};

// cmp
// SFC

<div>
  <button onClick={props.fetchData}>do</button>
</div>
