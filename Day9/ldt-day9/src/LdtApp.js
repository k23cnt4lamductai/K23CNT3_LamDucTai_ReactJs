import React from 'react'
import LdtUseState from './components/LdtUseState'
import LdtEffect1 from './components/LdtEffect1'
import LdtUseStateListObject from './components/LdtUseStateListObject'

export default function LdtApp() {
  return (
    <div className='container border my=t-3'>
      <h1> React Hook</h1>
      <hr/>
      <LdtUseState/>
      <LdtEffect1/>
      <LdtUseStateListObject/>
    </div>
  )
}
