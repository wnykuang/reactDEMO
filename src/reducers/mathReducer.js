
const initialstate = {a: 2, b:3}

const reducer = (state = initialstate, action) => {
    if(action.type === "A_CHANGED"){
        return {a: parseInt(action.newA), b:state.b}
    }else if(action.type === 'B_CHANGED'){
        console.log(action)
        return {b: parseInt(action.newB), a:state.a}
    }
    console.log(action)
    // console.log(action)
    return state
}

export default reducer