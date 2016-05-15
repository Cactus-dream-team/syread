const books = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch(action.type){
        case 'REQUEST_BOOKS':
            return Object.assign({},state,{
               isFetching: true
            });
        case 'RECEIVE_BOOKS':
            return Object.assign({},state,{
                isFetching: false,
                items: action.books
            });
        default:
            return state;
    }
};
export default books;