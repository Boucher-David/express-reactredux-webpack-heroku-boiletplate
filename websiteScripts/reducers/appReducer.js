const appReducer = (state = [], action) => {
    switch(action.type) {
        case '':
            return Object.assign({}, state, action.text);
        default:
            return state;
    }
};

export default appReducer;