import React, { Component } from 'react'

export default class LdtClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            ldtFullName:"Lâm Đức Tài",
            ldtAge:20
        }
    }
    // hàm xử lý sự kiện
    ldtEventHandleClick1 = ()=>{
        // lấy dữ lieuj trong state
        alert('FullName=' + this.state.ldtFullName + '\n Age' + this.state.ldtAge)
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ldtEventHandleClick1}>Button1 - Dữ liệu trong state</button>
    
      </div>
    )
  }
}