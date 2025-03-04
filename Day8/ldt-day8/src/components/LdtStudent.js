import React, { Component } from "react";

class LdtStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    LdtHandleView = (LdtStudent)=>{
        // Chuyển lên LdtStudentList
        this.props.onLdtHandleView(LdtStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ LdtStudentList
    let {renderLdtStudent, key} = this.props;
    console.log("Student:",renderLdtStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderLdtStudent.LdtId}</td>
          <td>{renderLdtStudent.LdtStudentName}</td>
          <td>{renderLdtStudent.LdtAge}</td>
          <td>{renderLdtStudent.LdtGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.LdtHandleView(renderLdtStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default LdtStudent;