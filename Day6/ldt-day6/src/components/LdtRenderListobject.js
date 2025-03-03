import React, { Component } from 'react';

class LdtRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            LdtStudents :[
                {LdtId:1,LdtName:"Lâm Đức Tài ", LdtAge:20},
                {LdtId:2,LdtName:"Nguyễn Quang A", LdtAge:20},
                {LdtId:3,LdtName:"Nguyễn Quang B", LdtAge:22},
                {LdtId:4,LdtName:"Nguyễn Quang C", LdtAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {LdtStudents} = this.state;
        let LdtElement = LdtStudents.map((LdtItem)=>{
            return (
                <li>{LdtItem.LdtId} - {LdtItem.LdtName}</li>
            );
        })

        let LdtRenderElement = LdtStudents.map((LdtItem,index)=>{
            return (
                <tr key={index}>
                    <td>{LdtItem.LdtId}</td>
                    <td>{LdtItem.LdtName}</td>
                    <td>{LdtItem.LdtAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {LdtElement}
                <hr/>
                <h2> Ahihi Baka</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>LdtID</th>
                            <th>LdtName</th>
                            <th>LdtAge</th>
                            <th>LdtAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {LdtRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LdtRenderListObject;