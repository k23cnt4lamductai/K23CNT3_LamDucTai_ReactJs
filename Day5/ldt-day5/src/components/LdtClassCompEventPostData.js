import React, { Component } from 'react'

export default class LdtClassCompEventPostData extends Component {
    constructor(props){
        super(props);

    }
    // hàm sử lý sự kiện
    ldtHandleClick = ()=>{
        // Chuyển dự liêu lên app thông qua props
        this.props.onLdtDataToApp("Lesson05 Event; Dữ liệu từ conponents con  - ldtClassCompEventPostData ")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary'
        onClick={this.ldtHandleClick}> Button 1 - Chuyển dữ liệu lên App</button>
      </div>
    )
  }
}