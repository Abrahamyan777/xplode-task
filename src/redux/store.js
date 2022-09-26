import {combineReducers, createStore } from 'redux'

import PageReduser from './page-reduser'

let redusers = combineReducers({
    PageReduser,
})

let store = createStore(redusers)

export default store;