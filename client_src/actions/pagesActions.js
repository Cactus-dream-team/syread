import 'babel-polyfill'

export function nextPage(){
  return {
    type:'INCREMENT_PAGE'
  }
}
export function prevPage(){
  return {
    type:'DECREMENT_PAGE'
  }
}
function requestChapter(){
  return {
    type:'REQUEST_CHAPTER'
  }
}
function receiveChapter(text){
  return {
    type: 'RECEIVE_CHAPTER',
    chapter: text.chapter
  }
}
export default function fetchChapter(bookId,chId){
  return dispatch => {
    dispatch(requestChapter());
    return fetch(`http://46.105.85.199:3000/api/books/getChapter?id=${bookId}&name=${chId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveChapter(json)))
  }
}
