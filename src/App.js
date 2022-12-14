import './App.css';
import React, {Component} from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {createSlice, configureStore } from '@reduxjs/tookit';

const counterSlice = createSlice({
  name:'counter',
  initialState:{value:0},
  reducers:{
    up:(state, action)=>{
      state.value = state.value + action.payload;
    }
  }
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});
// function reducer(state, action) {
//   if(action.type === 'up'){
//     return{...state, value:state.value + action.step}
//   }
//   return state
// }
// const initialState = {value:0}
// const store = createStore(reducer, initialState);
function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state=>{
    return state.counter.value;
  });
  return( <div>
            <button onClick={()=>{
              dispatch({type:'counterSlice/up', step:2});
              dispatch(counterSlice.actions.up(2));
            }}>+</button> {count}
          </div> )
}
class App extends Component {
  state = {number:0}
  render() {
  return (
    <div className='App'>
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot number={this.state.number}/>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
}

export default App;