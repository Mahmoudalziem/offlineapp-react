const INITIAL_STATE = {
    lecture: {}
}

const reducerLecture = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GETLECTURE':
            return {
                ...state,
                lecture: action.payload.data
            }
        default:
            return state
    }
}

export default reducerLecture;