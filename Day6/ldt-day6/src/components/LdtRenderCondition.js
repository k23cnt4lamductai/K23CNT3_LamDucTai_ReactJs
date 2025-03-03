import React, { Component } from 'react';
import LdtLoginControl from './LdtLoginControl';

class LdtRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        ldtHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        ldtHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <LdtLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button onClick={this.ldtHandleLogout}>Logout</button>
                        :<button onClick={this.ldtHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default LdtRenderCondition;