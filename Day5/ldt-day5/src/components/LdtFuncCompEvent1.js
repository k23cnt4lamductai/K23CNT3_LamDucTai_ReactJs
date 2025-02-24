import React from 'react'

export default function LdtFuncCompEvent1() {
    // hàm xữ lý sự kiện
    const ldtEventButton1Click = ()=>{
        alert('button 1 - Clicked')
    }
    
const ldtEventButton2Click = ()=>{
    alert('buttom 2 - Clicked')
}

    const ldtEventButton3Click = (name) => {
        alert("Name:" + name)
    }
  return (
    <div className='alert alert-info'>
        {/* <button className='btn btn-primary' onClick={ldtEventButton1Click()}>Button1</button> */}
        <button className='btn btn-success mx-1' onClick={ldtEventButton2Click}>Button2</button>
        <button className='btn btn-success mx-1' onClick={()=>ldtEventButton3Click("Đức Tài")}>Button3</button>
        {/* <button className='btn btn-success' onClick={ldtEventButton3Click("Đức Tài")}>Button4</button> */}


    </div>
  )
}