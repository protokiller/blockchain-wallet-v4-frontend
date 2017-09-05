
import { combineReducers } from 'redux'
import settings from 'config'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxUiReducer } from 'redux-ui'
import { coreReducers } from 'blockchain-wallet-v4/lib'
import alertsReducer from './Alerts/reducers'
import authReducer from './Auth/reducers.js'
import formReducer from './Form/reducers.js'
import logReducer from './Log/reducers.js'
import modalsReducer from './Modals/reducers.js'
import preferencesReducer from './Preferences/reducers.js'
import scrollReducer from './Scroll/reducers.js'

const rootReducer = combineReducers({
  applicationState: combineReducers({
    alerts: alertsReducer,
    auth: authReducer.login,
    log: logReducer,
    modals: modalsReducer,
    scroll: scrollReducer
  }),
  ui: reduxUiReducer,
  form: formReducer,
  preferences: preferencesReducer,
  router: routerReducer,
  session: authReducer.session,
  [settings.BLOCKCHAIN_DATA_PATH]: coreReducers.data,
  [settings.WALLET_IMMUTABLE_PATH]: coreReducers.wallet,
  [settings.SETTINGS_PATH]: coreReducers.settings
})

export default rootReducer