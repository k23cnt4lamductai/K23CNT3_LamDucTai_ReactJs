import React, { Component } from 'react'
import LdtEventForm1 from './components/LdtEventForm1'
import LdtEventForm2 from './components/LdtEventForm2'
import LdtEventForm3 from './components/LdtEventForm3'
import LdtEventForm4 from './components/LdtEventForm4'
import LdtEventForm5 from './components/LdtEventForm5'


export default class LdtApp extends Component {
  // Hàm xử lý dữ liệu từ form student
  ldtHandleSubmitForm = (param)=>{
    console.log("Student:" ,param);
    
  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <LdtEventForm1 />
          <LdtEventForm2 />
          <LdtEventForm3 />
          <LdtEventForm4 />
          <LdtEventForm5 onLdtHandleSubmit={this.ldtHandleSubmitForm} />
      </div>
    )
  }
}
