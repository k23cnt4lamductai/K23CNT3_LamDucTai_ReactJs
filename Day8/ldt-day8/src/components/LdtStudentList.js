import React, { Component } from "react";
import LdtStudent from "./LdtStudent";

class LdtStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    LdtHandleView = (LdtStudent)=>{
        // Chuyển dữ liệu lên LdtApp
        this.props.onLdtHandleView(LdtStudent);
    }


  render() {
    // lấy dữ liệu trong props từ LdtApp chuyển xuống
    let {renderLdtStudents} = this.props;
    console.log("List:",renderLdtStudents);
    
    // chuyển dữ liệu vào LdtStudent để hiển thị
    let LdtElementStudent = renderLdtStudents.map((LdtItem,index)=>{
        return <LdtStudent key={index} renderLdtStudent={LdtItem} onLdtHandleView={this.LdtHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {LdtElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LdtStudentList;