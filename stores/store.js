import { configureStore } from '@reduxjs/toolkit'
import { mainSteps } from "./slices/profileCreation";
import rootReducers from './reducers'
export const store = configureStore({
  reducer: rootReducers
})
