import React from 'react'

export default function LdtListUser({renderLdtUsers}) {



    const LdtElements = renderLdtUsers.map((ldtItem, index)=>{
        return ( 
                <>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ldtItem.id}</td>
                        <td>{ldtItem.LdtFullname}</td>
                        <td>{ldtItem.LdtUsername}</td>
                        <td>{ldtItem.LdtPass}</td>
                    </tr>
                </>)
    } ) 
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID:</th>
                    <th>Fullname</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {LdtElements}
            </tbody>
        </table>
    </div>
  )
}
