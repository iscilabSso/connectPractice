import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

// Redux의 store 의 값(state)이 변경될 때마다 호출되는 함수.
// Redux의 store 의 state 값이 parameter 로 들어옴.
function mapReduxStateToReactProps(state){
// state 값을 가져오고, 구독(subscribe)하고, 변경된 값을 components 로 return 함.
    return {
// state 값을 가공해서 return하고 싶은 컴포넌트에 들어갈,
// props의 이름을 return{} 자리에 적고, 거기에 공급될 값을 적어줌
        number:state.number 
    }
}

export default connect(mapReduxStateToReactProps, null)
(DisplayNumber);


// import React, {Component} from 'react';
// import store from '../store';

// export default class extends Component{
//     state = {number:store.getState().number}
//     constructor(props){
//     super(props);
//     store.subscribe(function(){
//       this.setState({number:store.getState().number});
//     }.bind(this));
//   }
//     render(){
//         return(
//             <DisplayNumber number={this.state.number} />
//         )
//     }
// }

