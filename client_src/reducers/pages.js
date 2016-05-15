const pages = (state = {
  isFetching: false,
  chapter: null,
  chapterNum: 0
}, action) => {
  switch(action.type){
    case 'REQUEST_CHAPTER':
      return Object.assign({},state,{
        isFetching: true
      });
    case 'RECEIVE_CHAPTER':
      return Object.assign({},state,{
        isFetching: false,
        chapter: action.chapter,
        chapterNum: action.chNum
      });
    default:
      return state;
  }
};
export default pages;
