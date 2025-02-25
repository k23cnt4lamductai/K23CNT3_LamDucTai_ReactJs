import React, { Component } from 'react'

export default class LdtEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state={
            ldtName:"Đức Tài",
            ldtAge: 20,
            ldtGender:"Male",
            ldtCourse:"CSS3"
        }
    }

    // hàm sự kiện change
    ldtHandleChage = (event)=>{
        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]:value
        })
    }

    ldtHandleSubmit = (event)=>{
        event.preventDefault()
        alert(this.state.ldtName + "\n" 
            + this.state.ldtAge + "\n" 
            + this.state.ldtGender + "\n" 
            + this.state.ldtCourse )

         // Chuyển dữ liệu trên form lên App component (LdtApp);
         this.props.onLdtHandleSubmit(this.state);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form Student Info</h2>
        <div>
            <label htmlFor='ldtName' >Student Name:</label>
            <input type='text' name='ldtName' id='ldtName'
            value={this.state.ldtName}
           
            onChange={this.ldtHandleChage}  
            className='mx-2 text-center'/>
        </div>
        <div>
            <label htmlFor='ldtAge' >Student Name:</label>
            <input type='text' name='ldtAge' id='ldtAge'
            value={this.state.ldtAge}
        
            onChange={this.ldtHandleChage} 
              className='mx-2 text-center '/>
        </div>
        
        <div>
  
            <label htmlFor='ldtGender' >Student Gender:</label>
            <input type='radio' name='ldtGender' id='ldtMale' className='mx-2'
            value={'Male'}
            checked={this.state.ldtGender === 'Male'}
            onChange={this.ldtHandleChage} />
            <label htmlFor='ldtMale'>Male</label>
    

     
          
           
                <input type='radio' name='ldtGender' id='ldtFemale' className='mx-2'
                value={'Female'}
                checked={this.state.ldtGender === 'Female'}
                onChange={this.ldtHandleChage} />
           
                <label htmlFor='ldtFemale'>Female</label>
            

         
                <input type='radio' name='ldtGender' id='ldtNone' className='mx-2'
                value={'None'}
                checked={this.state.ldtGender === 'None'}
                onChange={this.ldtHandleChage}/>
                <label htmlFor='ldtNone'>None</label>
         
            </div>

       
        <div>
        <label>
                    Chọn khóa học:
                    <select name='ldtCourse' id='ldtCourse'  className='mx-2 text-center '
                     value={this.state.ldtCourse} onChange={this.ldtHandleChage}>
                        <option value={"HTML3"}>HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTRAP5">BOOTRAP5</option>
                    </select>
                </label>
        </div>
        <button onClick={this.ldtHandleSubmit} className='btn btn-primary'>button</button>
      </div>
    )
  }
}