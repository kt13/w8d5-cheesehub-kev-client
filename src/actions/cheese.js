
export const NEW_REQUEST = 'NEW_REQUEST';
export const fetchCheesesRequest = () => ({
  type: NEW_REQUEST
});

export const NEW_SUCCESS = 'NEW_SUCCESS';
export const fetchCheesesSuccess = data => ({
  type: NEW_SUCCESS,
  data
});

export const NEW_ERROR = 'NEW_ERROR';
export const fetchCheesesError = error => ({
  type: NEW_ERROR,
  error
});

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  console.log('I\'m making a get request to the back-end');
  return fetch('http://localhost:8080/api/cheeses')
    .then(res => {
      console.log(res);
      return res.json();
    }).then(res => {
      dispatch(fetchCheesesSuccess(res));
    })
    .catch(err => {
      dispatch(fetchCheesesError(err));
    });
};