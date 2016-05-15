import 'babel-polyfill'

function requestMark(){
  return {
    type:'REQUEST_MARK'
  }
}
function receiveMark(text,chId){
  return {
    type: 'RECEIVE_MARK',
    mark: text.mark
  }
}
export default function fetchMark(bookId,chId){
  return dispatch => {
    dispatch(requestMark());
    return fetch(`http://46.105.85.199:3000/api/marks/`)
      .then(response => response.json())
      .then(json => dispatch(receiveMark(json,chId)))
  }
}
