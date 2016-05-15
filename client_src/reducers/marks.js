const marks = (state = {
  isFetching: false,
  marks: []
}, action) => {
  switch(action.type){
    case 'REQUEST_MARKS':
      return Object.assign({},state,{
        isFetching: true
      });
    case 'RECEIVE_MARKS':
      return Object.assign({},state,{
        isFetching: false,
        mark: action.lastMark
      });
    default:
      return state;
  }
};
export default marks;
