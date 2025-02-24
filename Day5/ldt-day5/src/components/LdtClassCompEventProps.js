import React, { Component } from 'react'

export default class LdtClassCompEventProps extends Component {
   ldtEventHandleClick1 = ()=>{
    // lấy dữ liệu props từ App.js
    alert('Hello...' + this.props.ldtRenderTitle)
   }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ldtEventHandleClick1}>Button1</button>
      </div>
    )
  }
}