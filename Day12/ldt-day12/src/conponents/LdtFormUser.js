import React, { useState } from 'react'

export default function LdtFormUser() {

    const [id, setid] = useState('')
    const [LdtFullname, setLdtFullname] = useState('')
    const [LdtUsername, setLdtUsername] = useState('')
    const [LdtPass, setLdtPass] = useState('')

    const LdtHandleSubmit    = (event)=>{
        event.preventDefault();
    }
  return (
    <div>
        <form>
            <p>Mã Sinh Viên:
                <input type='text' value={id} onChange={(ev)=>setid(ev.target.value)}/> </p>
            <p>Họ Tên:
                <input type='text' value={LdtFullname} onChange={(ev)=>setLdtFullname(ev.target.value)}/> </p>
            <p>Tài Khoản:
                <input type='text' value={LdtUsername} onChange={(ev)=>setLdtUsername(ev.target.value)}/> </p>
            <p>Mật Khẩu:
                <input type='password' value={LdtPass} onChange={(ev)=>setLdtPass(ev.target.value)}/> </p>
            <p>
                <button name='LdtSave' onClick={LdtHandleSubmit}>Lưu</button>
            </p>

            
        </form>
    </div>
  )
}
