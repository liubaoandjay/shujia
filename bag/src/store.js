import { createStore } from 'redux'

let defaultProps = {
    navList: [],
    currentId: 0,
    dataList: [],
    data: []
}

const reducer = (state = defaultProps, action) => {
    switch (action.type) {
        case "SET_STATE":
            let newState = JSON.parse(JSON.stringify(state))
            newState[action.key] = action.value
            return newState;
        default:
            return state
    }
}

const store = createStore(reducer)

export default store