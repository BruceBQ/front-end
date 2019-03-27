import { combineReducers } from 'redux'
import reducer_user from './reducer_auth'
import reducer_modal from './reducer_modal'
import reducer_ui from './reducer_ui'
import reducer_camera from './reducer_camera'
import reducer_map from './reducer_map'
import reducer_followList from './reducer_followList'
import reducer_notifications from './reducer_notifications'
import reducer_political from './reducer_political';
import reducer_search from './reducer_search'

const reducer_root = combineReducers({
  user: reducer_user,
  modal: reducer_modal,
  ui: reducer_ui,
  cameras: reducer_camera,
  map: reducer_map,
  followList: reducer_followList,
  political: reducer_political,
  notifications: reducer_notifications,
  search: reducer_search
})

export default reducer_root