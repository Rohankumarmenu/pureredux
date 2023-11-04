
import {applyMiddleware, createStore} from 'redux'
import  logger from 'redux-logger'

const store=createStore(reducer,applyMiddleware(logger.default));
const history=[];

function reducer(state={amount:1},action){
    if(action.type=='Increment'){
        return {amount:state.amount+4}
    }
   return state;
}

// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history);
// })
// console.log(store.getState())
setInterval(()=>{
    store.dispatch({type:'Increment'});
}
,5000)

// console.log(store.getState());
