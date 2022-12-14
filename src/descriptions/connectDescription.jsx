import AddNumber from "../components/AddNumber";
// connect 장점
// 1. 등록해놓은 props에 대해서만 구독을 하니깐 불필요한 render 호출이 줄어듬
// 2. should component update 를 톨해 수동 작업을 Redux가 대신 함으로 
// 코드 양도 줄여지고, 더 많은 퍼포먼스를 할 수 있게 됨.

import { connect } from "react-redux";
// connect API 는 2번 호출되는데, 첫번째는 인자가 2개. 

// 1. Redux의 Store의 State를 React의 Props로 전달(맵핑)하는 정보를 담은 함수
// export default 
connect(mapReduxStateToReactProps, null)
(DisplayNumber);

// Redux의 store 의 값(state)이 변경될 때마다 호출되는 함수.
// Redux의 store 의 state 값이 parameter 로 들어옴.
function mapReduxStateToReactProps(state){
// state 값을 가져오고, 구독(subscribe)하고, 변경된 값을 components 로 return 함.
    return {
// state 값을 가공해서 return하고 싶은 컴포넌트에 들 어갈,
// props의 이름을 return{} 자리에 적고, 거기에 공급될 값을 적어줌
        number:state.number 
    }
}

// export default 
connect(mapReduxStateToReactProps, null)
(DisplayNumber);


// 2. Redux의 Dispatch를 React의 컴포넌트의 Props로 연결시키는 정보를 담은 함수 
// export default 
connect(null, mapReduxDispatchToReactProps)
(AddNumber);

// 전달되는 props가 event(onClick)만 있고, state(상태)를 전달하지 않으니,
// 첫번째 인자는 없어도 됨.

function mapReduxDispatchToReactProps(){
// 전달할 event props 값을 객체의 이름으로 주고(onClick),
// 값은 함수(function)를 줌. 
    return {
// 함수가 실행되면 store에 dispatch 하는데, store는 내장되어 있으니, dispatch만 호출.
        onClick:function(size){
        dispatch({type:'INCREMENT', size:size})
  }
 } 
}

export default connect(null, mapReduxDispatchToReactProps)
(AddNumber);


// 첫번째 함수가 하는 일은 새로운 함수를 return. 
// (2개의 인자 값을 close 개념을 이용해서 주입해주기 위해)
function connect (mapStateToProps, mapDispatchToProps) {
// WrappedComponent에 주입된 인자가 맨 밑에 Counter.
    return function (WrappedComponent) {
// This is component(container component - presentaion을 컴포넌트인 척을 하는 래핑하는 컴포넌트)
        return class extends React.Component {
            render() {
                return (
                    // 래핑 당한 컴포넌트(여기선 Counter)
                    <WrappedComponent 
                    // 우리가 만든 container component로 주입된 property를
                    // 래핑한 컴포넌트로 전달하는 코드
                    {...this.props}

                    // 어떠한 상태를 props 로 주입하는 역할
                    {...mapStateToProps(store.getState(), this.props)}
                    // return 하는 값은 객체 : 
                    // { 생성하려는 property name:(Redux Store)state }
                    // => WrappedComponent 의 props 로 셋팅.

                    // 이벤트를 props 로 주입하는 역할 
                    {...mapDispatchToProps(store.dispatch, this.props)}
                    />
                )
            }
// 컴포넌트가 실제 적용됐을 때 호출되는 method. 
componentDidMount() {
// store의 state가 바뀌면 subscribe 안에 있는 this.handleChange.bind(this) 코드실행,
// 그 때 강제로 rendering 이 되면서 컴포넌트의 값이 새롭게 바뀜.
    this.unsubscribe = store.subscribe(this.handleChange.bind(this))
}
// component가 제거될 때 호출되는 method.
// 컴포넌트가 사용되지 않게 되면 subscribe를 취소함.
componentWillUnmount() {
    this.unsubscribe()
}
// 이 컴포넌트를 강제로 업데이트 시켜, render()가 호출되게 하는 method.
handleChange() {
    this.forceUpdate()
}
    }
        }
            }

const ConnectedCounter = connect(
    // Given Redux state, return props
    state => ({
        value: state.counter,
    }),
    // Given Redux dispatch, return callback props
    dispatch => ({
        onIncrement(){
            dispatch({ type: 'INCREMENT' })
        }
    })
)(Counter)
    // This Counter is components