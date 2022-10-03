// import { Action } from "react-router/node_modules/history"

const babyState={
    baby:{
        Image:"",
        FullName:"",
        Id:"",
        Group:"",
        Phone:"",
        Email:"",
        Address:"",
        Status:""
    }
}

const babyReducer=(state=babyState,action)=>{
    switch(action.type){
        case 'BABY':
            return{...state,baby:action.baby}
    default:
        return state
    }
}

export default babyReducer;