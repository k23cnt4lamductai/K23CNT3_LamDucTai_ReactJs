import React, { Component } from 'react'

export default class LdtEventForm1 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            ldtStudentName:"Đức Tài"
        }
    }
    // Hàm sử lý sự kiện khi dữ liệu trên textbox ldtStudentName thay đổi
    ldtHandleChage = (event)=>{
        // cập nhập setstate
        this.setState({
            ldtStudentName:event.target.value
        })
    }
    // khi submit dỏm, lấy dữ liệu và hiển thị
    ldtHandleSubmit = (ev)=>{
        alert('Hello:' + ' ' + this.state.ldtStudentName)
        ev.preventDefault()
    }
  render() {
    return (
      <div className='alert alert-info'>
            <h2>Form input</h2>
            <form onSubmit={this.ldtHandleSubmit}>
                <label htmlFor='ldtStudentName'>
                    <input type='text' name='ldtStudentName' id='ldtStudentName' value={this.state.ldtStudentName} 
                    onChange={this.ldtHandleChage} />
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
      </div>
    )
  }
}