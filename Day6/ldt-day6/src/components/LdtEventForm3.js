import React, { Component } from 'react'

export default class LdtEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state={
            ldtGioiTinh: "Nam"
        }
    }
    ldtHanleChange = (event)=>
    {
        this.setState({
            ldtGioiTinh:event.target.value
        })
    }

    // Hmaf xử lý sự kiện submit form
    ldtHandleSubmit = (event)=>{
        event.preventDefault()
        alert('Giới tính của bạn là:' + this.state.ldtGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
            <h2>Form Input - Radio</h2>
            <form>
                <div>
                    <label htmlFor=''>Giới tính:</label>
                    <input type='radio' name='ldtGioiTinh'  id='ldtNam' className='mx-2'
                     value="Nam" checked={this.state.ldtGioiTinh === 'Nam'} onChange={this.ldtHanleChange}/> 
                        <label htmlFor='ldtNam'>Nam</label>
                    <input type='radio' name='ldtGioiTinh'  id='ldtNu' className='mx-2'
                    value="Nữ" checked={this.state.ldtGioiTinh === 'Nữ'} onChange={this.ldtHanleChange}/> 
                        <label htmlFor='ldtNu'>Nữ</label>
                    <input type='radio' name='ldtGioiTinh'   id='ldtKhac' className='mx-2'
                    value="Khác" checked={this.state.ldtGioiTinh === 'Khác'} onChange={this.ldtHanleChange}/> 
                        <label htmlFor='ldtKhac'>Khác</label>
                  
                </div>
                <button onClick={this.ldtHandleSubmit} className='btn btn-success mt-3'> SubMit </button>
            </form>
      </div>
    )
  }
}