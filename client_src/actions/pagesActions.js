import 'babel-polyfill'

function requestChapter(){
  return {
    type:'REQUEST_CHAPTER'
  }
}
function receiveChapter(text,chId){
  return {
    type: 'RECEIVE_CHAPTER',
    chapter: text.chapter,
    chNum: chId
  }
}
export default function fetchChapter(bookId,chId){
  return dispatch => {
    dispatch(requestChapter());
    return fetch(`http://46.105.85.199:3000/api/books/getChapter?id=${bookId}&name=${chId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveChapter(json,chId)))
  }
}
