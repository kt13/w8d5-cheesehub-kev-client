import { NEW_REQUEST, NEW_SUCCESS, NEW_ERROR} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function reducer(state=initialState, action) {
  if(action.type === NEW_REQUEST){
    return Object.assign({}, state, {loading: true});
  }
  else if(action.type === NEW_SUCCESS){
    return Object.assign({}, state, 
      {loading: false, error: null, 
        cheeses: [...state.cheeses, ...action.data]});
  }
  else if(action.type === NEW_ERROR){
    return Object.assign({}, state, 
      {loading: false, error: action.error});
  }
  return state;
  // switch(action.type)
  //   case 'NEW_REQUEST': 
}
