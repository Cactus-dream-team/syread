const pages = (state = {
  isFetching: false,
  chapter: null
}, action) => {
  switch(action.type){
    case 'REQUEST_CHAPTER':
      return Object.assign({},state,{
        isFetching: true
      });
    case 'RECEIVE_CHAPTER':
      return Object.assign({},state,{
        isFetching: false,
        chapter: action.chapter
      });
    default:
      return state;
  }
};
export default pages;
