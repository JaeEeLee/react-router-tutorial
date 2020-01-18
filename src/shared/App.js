import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Langs } from 'pages';
import { Menu } from 'components';
//import { Menu } from '/components'
/**
 *  url 요청시 response 해주는 곳
 *  route에 맞춰서 component render
 *  exact는 주어진 경로와 정확히 맞아야 compenentr가 render 된다는 명명
 * 
 *  ##route 경로에 특정 값을 넣는 방법
 *    1. params 2. query
 * 
 *      history 객체 : push, replace를 통해 다른 경로로 이동 전환 가능
 *      location 객체 : 현재 경로에 대한 정보와, url쿼리에대한 정보 보유
 *      match 객체 : 어떤 route에 매칭 되었는가에대한 정보 보유 
 *                  ex) uri/:NN    ==> match.params.NN  
 * 
 * ##Switch
 *  - component 중복 방지
 *  - Switch component에 감싸여진 route component는 매칭 되는 첫번째 route만 노출
 * 
 * ##query-string
 *   - url query를 해석하기 위한 library
 */
class App extends Component {
    render () {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>    
                    <Route path="/about/:name" component={About}/>
{/* {비교할 route를 가장 먼저 배치} */}
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
                <Route path="/langs" component={Langs}/>
            </div>
        )
    }
}
export default App;