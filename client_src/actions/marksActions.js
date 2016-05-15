import 'babel-polyfill'

function requestMark(){
  return {
    type:'REQUEST_MARKS'
  }
}
function receiveMark(json){
   return {
    type: 'RECEIVE_MARKS',
    lastMark: json[0]
  }
}
export default function fetchMarks(id){
  return dispatch => {
    dispatch(requestMark());
    return fetch(`http://46.105.85.199:3000/api/books/${id}/marks?filter[order]=id%20DESC&filter[limit]=1`)
      .then(response => response.json())
      .then(json => dispatch(receiveMark(json)))
  }
}
