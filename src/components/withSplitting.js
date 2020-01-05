import React, { Component } from 'react';

const withSplitting = getComponent => {
    //codeSplitting을 할때 반복되는 로직을 함수화해줌
    //코드 스필리팅된 컴포넌트를 렌더링하는 것만으로 코드를 불러와서 사용 가능
    // ==> App의 state에 컴포넌트 자체를 담을 필요 없이 조건부로 렌더링시 자동으로 스플리팅
    class WithSplitting extends Component { 
        state = {
            Splitted : null
        };

        constructor(props) {
            super(props);
            console.log(props)
            getComponent().then(({ default : Splitted})=> {
                this.setState({
                    Splitted
                });
            });
        }

        render() {
            const { Splitted } = this.state;
            if (!Splitted){
                return null;
            }
            return <Splitted {...this.props}/>;
        }
    }

    return WithSplitting;
};

export default withSplitting;