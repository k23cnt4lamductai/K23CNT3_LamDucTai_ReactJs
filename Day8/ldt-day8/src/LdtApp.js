import React, { Component } from "react";
import LdtControll from "./components/LdtControll";
import LdtStudentList from "./components/LdtStudentList";
import LdtForm from "./components/LdtForm";

class LdtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      LdtStudents:[
        {LdtId:"SV001",LdtStudentName:"Lâm Đức Tài",LdtAge:21,LdtGender:"Nam",LdtBirthday:"26/09/2005",LdtBirthPlace:"HN", LdtAddress:"Gia Lâm"},
        {LdtId:"SV002",LdtStudentName:"Trần Thanh Tùng",LdtAge:23,LdtGender:"Cam",LdtBirthday:"25/05/1979",LdtBirthPlace:"HP", LdtAddress:"Trung quốc"},
        {LdtId:"SV003",LdtStudentName:"Vũ Khánh Linh",LdtAge:20,LdtGender:"Nữ",LdtBirthday:"25/05/1985",LdtBirthPlace:"TpHCM", LdtAddress:"Trung Quốc"},
        {LdtId:"SV004",LdtStudentName:"Hà Quang Minh",LdtAge:22,LdtGender:"Nam",LdtBirthday:"25/05/1976",LdtBirthPlace:"TpHCM", LdtAddress:"Hồ chí minh"},
      ],
      LdtStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  LdtHandleView = (LdtStudent)=>{
    this.setState({
      LdtStudent:LdtStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.LdtStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Lâm Đức Tài - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <LdtControll  />
                {/* danh sách sinh vien  */}
                <LdtStudentList  renderLdtStudents={this.state.LdtStudents} onLdtHandleView={this.LdtHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <LdtForm  renderLdtStudent = {this.state.LdtStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LdtApp;