import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list';
import thunk from 'redux-thunk';
import reducer from './reducers/cheese';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <CheeseList/>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
