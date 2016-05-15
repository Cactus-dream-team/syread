const pages = (state = {
  isFetching: false,
  marks: null,
  marksNum: 0
}, action) => {
  switch(action.type){
    case 'REQUEST_MARKS':
      return Object.assign({},state,{
        isFetching: true
      });
    case 'RECEIVE_MARKS':
      return Object.assign({},state,{
        isFetching: false,
        marks: action.marks,
        marksNum: action.chNum
      });
    default:
      return state;
  }
};
export default pages;
