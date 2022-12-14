import AddNumber from "../components/AddNumber";
// connect API 는 2번 호출되는데, 첫번째는 인자가 2개. 
// 1. Redux의 Store의 State를 React의 Props로 전달(맵핑)하는 정보를 담은 함수
// 2. Redux의 Dispatch를 React의 컴포넌트의 Props로 연결시키는 정보를 담은 함수 
import { connect } from "react-redux";
// 전달되는 props가 event(onClick)만 있고, state(상태)를 전달하지 않으니,
// 첫번째 인자는 없어도 됨.

function mapReduxDispatchToReactProps(){
// 전달할 event props 값을 객체의 이름으로 주고,
// 값은 함수를 줌. 
    return {
// 함수가 실행되면 store에 dispatch 하는데, store 는 내장되어 있으니, dispatch만 호출.
        onClick:function(size){
        store.dispatch({type:'INCREMENT', size:size})
  }
 } 
}


export default connect(null, mapReduxDispatchToReactProps)
(AddNumber);



// import { Component } from "react";
// import store from "../store";

// export default class extends Component{
//     render(){
//         return <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size:size})
//         }.bind(this)}></AddNumber>
//     } 
// }
