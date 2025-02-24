import React, { Component } from 'react'
import LdtFuncCompEvent1 from './components/LdtFuncCompEvent1'
import LdtClassCompEvent1 from './components/LdtClassCompEvent1'
import LdtFuncCompEventProp from './components/LdtFuncCompEventProp'
import LdtClassCompEventProps from './components/LdtClassCompEventProps'
import LdtClassCompEventState from './components/LdtClassCompEventState'
import LdtClassCompEventPostData from './components/LdtClassCompEventPostData'

export default class LdtApp extends Component {
    constructor(props){
        super(props);
        this.state={
            ldtNoiDung:"Chào"
        }
    }
    // hàm xử lý sự kiện khi components con chuyển dữ liệu lên
    ldtHandleDataToApp = (content)=>{
        alert(content)
        this.setState({ ldtNoiDung: content });  // Cập nhật trạng thái với dữ liệu nhận được
    }
  render() {
    return (
      <div className='container border mt-3'>
            <h1 className='text-center alert-info my-2'>K23CNT3 Lâm Đức Tài - Event and Form</h1>
            <hr/>
            <div>
                <h2> Function Components</h2>
            <LdtFuncCompEvent1 />
            </div>
            <hr/>
            <div>
                <h2> Class Components</h2>
                <LdtClassCompEvent1 />
            </div>
            <hr/>
            <div>
                <h2> Function Components - Event ;Props</h2>
                <LdtFuncCompEventProp  ldtRenderName="Lâm Đức Tài" />
            </div>
            <hr/>
            <div>
                <h2> Class Components - Event ;Props</h2>
                <LdtClassCompEventProps ldtRenderTitle=" chào bạn"/>
            </div>
            <hr/>
            <div>
                <h2>Class Component - State</h2>
                <LdtClassCompEventState />
            </div>
            <hr/>
            <div>
                <h1>{this.state.ldtNoiDung}</h1>
                <h2>Class Component - Event; Post Data to app</h2>
                <LdtClassCompEventPostData onLdtDataToApp={this.ldtHandleDataToApp} />
            </div>
      </div>
    )
  }
}