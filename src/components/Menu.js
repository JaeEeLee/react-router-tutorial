import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withSplitting from './withSplitting';

//코드 스플리팅해야하는 코드는 상단에서 아래와 같이 입력
const SplitMe = withSplitting(() => import('./SplitMe'));

class Menu extends Component {
    state = {
        activeStyle : {
            color: 'green',
            fontSize: '2rem'
        },
        visible : false
    }
    

    handleClick = () => {
        // Split code!!! (codeSplitting)
        /**
         * 페이지 상단에 import를 하지않고 해당 함수를 불러올때만 import 하는 방법
         * import 함수를 사용시 Promise 반환
         * 
         * Higer-order Component(HOC)
         *  반복적 코드의 재사용성
         *  하나의 컴포넌트로서 함수 역할 
         *  파일명 명명시 withXX 방식으로 작성
         * https://velopert.com/3537
         * https://github.com/acdlite/recompose/blob/master/docs/API.md
         * 
         */
        this.setState({
            visible : true
        });
        // import('./SplitMe').then(({ default: SplitMe }) => {
        //     this.setState({
        //         SplitMe
        //     })
        // })
    }

    render () {
        const { visible } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                {visible && <SplitMe/>}
                <ul>
                    <li><NavLink exact to="/" activeStyle={this.activeStyle}>Home</NavLink></li>
                    <li><NavLink exact to="/about" activeStyle={this.activeStyle}>About</NavLink></li>
                    <li><NavLink to="/about/foo" activeStyle={this.activeStyle}>About Foo</NavLink></li>
                    <li><NavLink to="/posts" activeStyle={this.activeStyle}>Posts Foo</NavLink></li>
                </ul>
                <hr/>
            </div>
        )
    }
}

export default Menu;