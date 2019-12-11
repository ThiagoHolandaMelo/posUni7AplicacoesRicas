import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { compose } from 'redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore() {
  
  

  return createStore(
    rootReducer,
      compose(
        applyMiddleware(thunk),
        devTools
      )
  )

  

}
