import React from 'react'

export default function LdtFuncCompEventProp(Ldtprops) {
    const ldtHandleButtonClick1 = ()=>{
        alert('Dữ liệu từ props:' + Ldtprops.ldtRenderName);
        console.log("Xin chào" + Ldtprops.ldtRenderName)
    }

    const ldtHandleButtonClick2 = (param)=>{
        alert('Dữ liệu từ props:' + Ldtprops.ldtRenderName);
      console.log('=================================');
      console.log('hi',param);
      console.log('=================================');
      
    }
  return ( 
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1 ' onClick={ldtHandleButtonClick1}>Button 1</button>
        <button className='btn btn-danger mx-1' onClick={() => ldtHandleButtonClick2('Button2')}>Button 2</button>
    </div>
  )
}