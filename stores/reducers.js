import { combineReducers } from 'redux'

import mainSteps from './slices/profileCreation'
import ActivePage from './slices/ActivePage';
const reducers = combineReducers({ 
    mainSteps,
    ActivePage
})

export default reducers;