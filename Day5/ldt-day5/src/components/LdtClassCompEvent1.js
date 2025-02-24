import React, { Component } from 'react'

export default class LdtClassCompEvent1 extends Component {
  // hàm xử lý sự kiện
  ldtEventHandleClick1 = () => {
    alert('button 1 - Click1')
  }
  ldtEventHandleClick2 = (name) => {
    alert('button 2 - Click2 ; name=' + name )
  }
  render() {
    return (
      <div  className='alert alert-danger'>
        <button className='btn btn-primary mx-1 ' onClick={this.ldtEventHandleClick1}>Button1</button>
        <button className='btn btn-success mx-1' onClick={()=>this.ldtEventHandleClick2('Nam')}>Button2</button>
      </div>
    )
  }
}