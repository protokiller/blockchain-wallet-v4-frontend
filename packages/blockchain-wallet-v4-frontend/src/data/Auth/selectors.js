import { path } from 'ramda'

export const getSession = guid => state => state.session[guid]
export const getIsAuthenticated = path(['applicationState', 'auth', 'isAuthenticated'])