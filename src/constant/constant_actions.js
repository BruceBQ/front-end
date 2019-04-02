// actions for authentication
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const START_FETCHING = 'START_FETCHING'
// export const FINISH_AUTHENTICATION = 'FINISH_AUTHENTICATION'
export const LOG_OUT = 'LOG_OUT'

//action for sitemap
export const GET_SITEMAP = 'GET_SITEMAP'
export const GET_SITEMAP_SUCCESS = 'GET_SITEMAP_SUCCESS'
export const GET_SITEMAP_FAILURE = 'GET_SITEMAP_FAILURE'

//action for crossroad
export const GET_CROSSROADS = 'GET_CROSSROADS'
export const GET_CROSSROADS_SUCCESS = 'GET_CROSSROADS_SUCCESS'
export const GET_CROSSROADS_FAILURE = 'GET_CROSSROADS_FAILURE'
export const GET_CROSSROAD = 'GET_CROSSROAD'
export const GET_CROSSROAD_SUCCESS = 'GET_CROSSROAD_SUCCESS'
export const GET_CROSSROAD_FAILURE = 'GET_CROSSROAD_FAILURE'
export const ADD_CROSSROAD = 'ADD_CROSSROAD'
export const ADD_CROSSROAD_SUCCESS = 'ADD_CROSSROAD_SUCCESS'
export const ADD_CROSSROAD_FAILURE = 'ADD_CROSSROAD_FAILURE'
export const EDIT_CROSSROAD = 'EDIT_CROSSROAD'
export const EDIT_CROSSROAD_SUCCESS = 'EDIT_CROSSROAD_SUCCESS'
export const EDIT_CROSSROAD_FAILURE = 'EDIT_CROSSROAD_FAILURE'
export const DELETE_CROSSROAD = 'DELETE_CROSSROAD'
export const DELETE_CROSSROAD_SUCCESS = 'DELETE_CROSSROAD_SUCCESS'
export const DELETE_CROSSROAD_FAILURE = 'DELETE_CROSSROAD_FAILURE'
export const CLEAR_CROSSROAD_ERROR = 'CLEAR_CROSSROAD_ERROR'

//action for view
export const GET_SINGLEVIEWS = 'GET_SINGLEVIEWS'
export const GET_SINGLEVIEWS_SUCCESS = 'GET_SINGLEVIEWS_SUCCESS'
export const GET_SINGLEVIEWS_FAILURE = 'GET_SINGLEVIEWS_FAILURE'
export const GET_VIEW = 'GET_VIEW'
export const GET_VIEW_SUCCESS = 'GET_VIEW_SUCCESS'
export const GET_VIEW_FAILURE = 'GET_VIEW_FAILURE'
export const ADD_VIEW = 'ADD_VIEW'
export const ADD_VIEW_SUCCESS = 'ADD_VIEW_SUCCESS'
export const ADD_VIEW_FAILURE = 'ADD_VIEW_FAILURE'
export const DELETE_VIEW = 'DELETE_VIEW'
export const DELETE_VIEW_SUCCESS = 'DELETE_VIEW_SUCCESS'
export const DELETE_VIEW_FAILURE = 'DELETE_VIEW_FAILURE'
export const UPDATE_VIEW = 'UPDATE_VIEW'

//action for camera
export const ACTIVE_ADD_CAMERA = 'ACTIVE_ADD_CAMERA'
export const DISABLE_ADD_CAMERA = 'DISABLE_ADD_CAMERA'
export const GOTO_SITEMAP_PAGE = 'GOTO_SITEMAP_PAGE'
export const EXIT_SITEMAP_PAGE = 'EXIT_SITEMAP_PAGE'
export const CHANGE_CAMERA_PARAMS = 'CHANGE_CAMERA_PARAMS'
export const GET_CAMERAS = 'GET_CAMERAS'
export const GET_CAMERAS_SUCCESS = 'GET_CAMERAS_SUCCESS'
export const GET_CAMERAS_FAILURE = 'GET_CAMERAS_FAILURE'
export const GET_CAMERA = 'GET_CAMERA'
export const GET_CAMERA_SUCCESS = 'GET_CAMERA_SUCCESS'
export const GET_CAMERA_FAILURE = 'GET_CAMERA_FAILURE'
export const ADD_CAMERA = 'ADD_CAMERA'
export const ADD_CAMERA_SUCCESS = 'ADD_CAMERA_SUCCESS'
export const ADD_CAMERA_FAILURE = 'ADD_CAMERA_FAILURE'
export const EDIT_CAMERA = 'EDIT_CAMERA'
export const EDIT_CAMERA_SUCCESS = 'EDIT_CAMERA_SUCCESS'
export const EDIT_CAMERA_FAILURE = 'EDIT_CAMERA_FAILURE'
export const DELETE_CAMERA = 'DELETE_CAMERA'
export const DELETE_CAMERA_SUCCESS = 'DELETE_CAMERA_SUCCESS'
export const DELETE_CAMERA_FAILURE = 'DELETE_CAMERA_FAILURE'
export const CLEAR_CAMERA_ERRORS = 'CLEAR_CAMERA_ERRORS'

export const CONNECT_CAMERA = 'CONNECT_CAMERA'
export const CONNECT_CAMERA_SUCCESS = 'CONNECT_CAMERA_SUCCESS'
export const CONNECT_CAMERA_FAILURE = 'CONNECT_CAMERA_FAILURE'

export const CONFIG_PARAMS = 'CONFIG_PARAMS'
export const CONFIG_PARAMS_SUCCESS = 'CONFIG_PARAMS_SUCCESS'
export const CONFIG_PARAMS_FAILURE = 'CONFIG_PARAMS_FAILURE'

export const CONFIG_FUNCTIONS = 'CONFIG_FUNCTIONS'
export const CONFIG_FUNCTIONS_SUCCESS = 'CONFIG_FUNCTIONS_SUCCESS'
export const CONFIG_FUNCTIONS_FAILURE = 'CONFIG_FUNCTIONS_FAILURE'

export const GET_DATA_BEFORE_SEARCH = 'GET_DATA_BEFORE_SEARCH'


export const GET_CAMERA_INFO = 'GET_CAMERA_INFO'
export const GET_CAMERA_INFO_SUCCESS = 'GET_CAMERA_INFO_SUCCESS'
export const GET_CAMERA_INFO_FAILURE = 'GET_CAMERA_INFO_FAILURE'

export const GET_CAMERA_LOCATIONS = 'GET_CAMERA_LOCATIONS'
export const GET_CAMERA_LOCATIONS_SUCCESS = 'GET_CAMERA_LOCATIONS_SUCCESS'
export const GET_CAMERA_LOCATIONS_FAILURE = 'GET_CAMERA_LOCATIONS_FAILURE'
export const EDIT_CAMERA_LOCATIONS = 'EDIT_CAMERA_LOCATIONS'
export const EDIT_CAMERA_LOCATIONS_SUCCESS = 'EDIT_CAMERA_LOCATIONS_SUCCESS'
export const EDIT_CAMERA_LOCATIONS_FAILURE = 'EDIT_CAMERA_LOCATIONS_FAILURE'

export const GET_CAMERA_CONFIGS = 'GET_CAMERA_CONFIGS'
export const GET_CAMERA_CONFIGS_SUCCESS = 'GET_CAMERA_CONFIGS_SUCCESS'
export const GET_CAMERA_CONFIGS_FAILURE = 'GET_CAMERA_CONFIGS_FAILURE'
export const EDIT_CAMERA_CONFIGS = 'EDIT_CAMERA_CONFIGS'
export const EDIT_CAMERA_CONFIGS_SUCCESS = 'EDIT_CAMERA_CONFIGS_SUCCESS'
export const EDIT_CAMERA_CONFIGS_FAILURE = 'EDIT_CAMERA_CONFIGS_FAILURE'

export const CHECK_CAMERA_AUTH = 'CHECK_CAMERA_AUTH'
export const CHECK_CAMERA_AUTH_SUCCESS = 'CHECK_CAMERA_AUTH_SUCCESS'
export const CHECK_CAMERA_AUTH_FAILURE = 'CHECK_CAMERA_AUTH_FAILURE'

export const CHECK_CAMERA_IDENTITY = 'CHECK_CAMERA_IDENTITY'
export const CHECK_CAMERA_IDENTITY_SUCCESS = 'CHECK_CAMERA_IDENTITY_SUCCESS'
export const CHECK_CAMERA_IDENTITY_FAILURE = 'CHECK_CAMERA_IDENTITY_FAILURE'

export const CHECK_CAMERA_LOCATION = 'CHECK_CAMERA_LOCATION'
export const CHECK_CAMERA_LOCATION_SUCCESS = 'CHECK_CAMERA_LOCATION_SUCCESS'
export const CHECK_CAMERA_LOCATION_FAILURE = 'CHECK_CAMERA_LOCATION_FAILURE'

export const CHECK_CAMERA_CONFIGS = 'CHECK_CONFIGS'
export const CHECK_CAMERA_CONFIGS_SUCCESS = 'CHECK_CAMERA_CONFIGS_SUCCESS'
export const CHECK_CAMERA_CONFIGS_FAILURE = 'CHECK_CAMERA_CONFIGS_FAILURE'

export const GET_CAMERA_LOCATION = 'GET_CAMERA_LOCATION'
// export const GET_CAMERA_LOCATION_SUCCESS = 'GET_CAMERA_LOCATION_SUCCESS'

export const GET_CAMERA_POSITION_SUCCESS = 'GET_CAMERA_POSITION_SUCCESS'
export const NEXT_STEP = 'NEXT_STEP'
export const BACK_STEP = 'BACK_STEP'

//action search camera
export const GET_PROVINCES_AVAILABLE = 'GET_PROVINCES_AVAILABLE'
export const GET_PROVINCES_AVAILABLE_SUCCESS = 'GET_PROVINCES_AVAILABLE_SUCCESS'
export const GET_PROVINCES_AVAILABLE_FAILURE = 'GET_PROVINCES_AVAILABLE_FAILURE'
export const GET_DISTRICTS_AVAILABLE = 'GET_DISTRICTS_AVAILABLE'
export const GET_DISTRICTS_AVAILABLE_SUCCESS = 'GET_DISTRICTS_AVAILABLE_SUCCESS'
export const GET_DISTRICTS_AVAILABLE_FAILURE = 'GET_DISTRICTS_AVAILABLE_FAILURE'

export const SEARCH_CAMERA = 'SEARCH_CAMERA'
export const SEARCH_CAMERA_SUCCESS = 'SEARCH_CAMERA_SUCCESS'
export const SEARCH_CAMERA_FAILURE = 'SEARCH_CAMERA_FAILURE'

export const CHANGE_SEARCH_CAM_PARAMS = 'CHANGE_SEARCH_CAM_PARAMS'

//action for modal
export const TOGGLE_DELETE_MODAL = 'TOGGLE_DELETE_MODAL'
export const TOGGLE_ADD_MODAL = 'TOGGLE_ADD_MODAL'
export const SHOW_ADD_MODAL = 'SHOW_ADD_MODAL'
export const SHOW_EDIT_MODAL = 'SHOW_EDIT_MODAL'
export const CLOSE_ADD_MODAL = 'CLOSE_ADD_MODAL'
export const SHOW_DELETE_MODAL = 'SHOW_DELETE_MODAL'
export const CLOSE_DELETE_MODAL = 'CLOSE_DELETE_MODAL'
export const LOAD_MODAL_DATA_SUCCESS = 'LOAD_MODAL_DATA_SUCCESS'
export const SHOW_MODAL = 'SHOW_MODAL'
export const SHOW_GET_LOCATION_MODAL = 'SHOW_GET_LOCATION_MODAL'

export const SHOW_LOADING_MODAL = 'SHOW_LOADING_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

//action for ui
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION'
export const TOGGLE_CAMERA_FILTER = 'TOGGLE_CAMERA_FILTER'
export const TOGGLE_SETTINGS_MENU = 'TOGGLE_SETTINGS_MENU'

//action for util
export const LOAD_DISTRICT = 'LOAD_DISTRICT'
export const LOAD_DISTRICT_SUCCESS = 'LOAD_DISTRICT_SUCCESS'
export const LOAD_DISTRICT_FAILURE = 'LOAD_DISTRICT_FAILURE'

export const LOAD_COMMUNE = 'LOAD_COMMUNE'
export const LOAD_COMMUNE_SUCCESS = 'LOAD_COMMUNE_SUCCESS'
export const LOAD_COMMUNE_FAILURE = 'LOAD_COMMUNE_FAILURE'



export const SHOW_INFO_WINDOW = 'SHOW_INFO_WINDOW'
export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW'


//action for follow list
export const CHANGE_LIST_SIZE = "CHANGE_LIST_SIZE"
export const GOTO_FOLLOWLIST_PAGE = "GOTO_FOLLOWLIST_PAGE"
export const EXIT_FOLLOWLIST_PAGE = "EXIT_FOLLOWLIST_PAGE"


//action for snackbar
export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR'
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR'

// action for political
export const GET_ALL_PROVINCES = 'GET_ALL_PROVINCES'
export const GET_PROVINCES = 'GET_PROVINCES'
export const GET_PROVINCES_SUCCESS = 'GET_PROVINCES_SUCCESS'
export const GET_DISTRICTS = 'GET_DISTRICTS'
export const GET_DISTRICTS_SUCCESS = 'GET_DISTRICTS_SUCCESS'
export const GET_COMMUNES= 'GET_COMMUNES'
export const GET_COMMUNES_SUCCESS = 'GET_COMMUNES_SUCCESS'
export const GET_POLITICAL_SUCCESS = 'GET_POLITICAL_SUCCESS'

export const CLEAR_PROVINCE = 'CLEAR_PROVINCE'
export const CLEAR_DISTRICT = 'CLEAR_DISTRICT'
export const RELOAD_POLITICAL = 'RELOAD_POLITICAL'

//action for group
export const CREATE_GROUP = 'CREATE_GROUP'
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS'
export const CREATE_GROUP_FAILURE = 'CREATE_GROUP_FAILURE'


export const GET_DATA_BEFORE_CONNECT = 'GET_DATA_BEFORE_CONNECT'


//action for map
export const FOCUSED_CAM = 'FOCUSED_CAM'
export const CHANGE_BOUNDS_MAP = 'CHANGE_BOUNDS_MAP'
export const CANCEL_FOCUSED_CAM = 'CANCEL_FOCUSED_CAM'