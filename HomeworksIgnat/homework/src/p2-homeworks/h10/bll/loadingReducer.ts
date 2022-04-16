const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case "CHENG-LOAD": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}
type LoadingActionType = {
    type: "CHENG-LOAD"
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: "CHENG-LOAD", isLoading})// fix any