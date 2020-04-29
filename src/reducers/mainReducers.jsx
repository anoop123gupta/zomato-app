const initialState = {
    state :{}
}

function rootReducer(state=initialState, action){
    if (action.type == "SEARCH_RESTAURENT"){
        state["res"] = {"data": "dummy"}
    }
    return state 
}

export default rootReducer;
