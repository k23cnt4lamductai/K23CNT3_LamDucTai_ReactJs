import React, { Component } from 'react'

export default class LdtEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            ldtCourse: 'CSS3'
        }
    }
    ldtHandleChage = (event)=>{
        this.setState({
            ldtCourse:event.target.value
        })
    }
    ldtHandleSubmit = (ev) =>{
        alert('Khóa Học Đã Chọn Khi Submit:' + this.state.ldtCourse)
        ev.preventDefault()
    }
  render() {
    return (
      <div className='alert alert-danger'>
       <h2>Form Select</h2>
            <form onSubmit={this.ldtHandleSubmit}>
                <label>
                    Chọn khóa học:
                    <select name='ldtCourse' id='ldtCourse'
                     value={this.state.ldtCourse} onChange={this.ldtHandleChage}>
                        <option value={"HTML3"}>HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTRAP5">BOOTRAP5</option>
                    </select>
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
      </div>
    )
  }
}