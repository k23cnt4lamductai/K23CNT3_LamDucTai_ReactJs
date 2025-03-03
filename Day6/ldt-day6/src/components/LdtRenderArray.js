import React from 'react'

export default function LdtRenderArray() {

    const ldtNumbers = [10,20,30,40,50];
    const ldtElement = ldtNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {ldtElement}
    </div>
  )
}