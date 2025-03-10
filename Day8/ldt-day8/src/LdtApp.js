import React, { Component } from 'react';
import LdtControl from './components/LdtControl';
import LdtStudentList from './components/LdtStudentList';
import LdtForm from './components/LdtForm';
import LdtStudentDetail from './components/LdtStudentDetail';

class LdtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LdtStudents: [
        { LdtID: "SV001", LdtStudentName: "Lâm Đức Tài", LdtAge: 21, LdtGender: "Nam", LdtBirthday: "26/09/2005", LdtBirthPlace: "HN", LdtAddress: "Long Biên " },
        { LdtID: "SV002", LdtStudentName: "Nhữ Anh Tuấn", LdtAge: 21, LdtGender: "Nam", LdtBirthday: "04/03/2005", LdtBirthPlace: "QN", LdtAddress: "Yên Xá" },
        { LdtID: "SV003", LdtStudentName: "Nguyễn Hữu Tuấn", LdtAge: 21, LdtGender: "Nam", LdtBirthday: "03/01/2005", LdtBirthPlace: "HD", LdtAddress: "Hải Dương" },
        { LdtID: "SV004", LdtStudentName: "Trần Thanh Tùng", LdtAge: 20, LdtGender: "Nam", LdtBirthday: "02/01/2005", LdtBirthPlace: "HD", LdtAddress: "Yên Xá" },
        { LdtID: "SV005", LdtStudentName: "Vũ Khánh Linh", LdtAge: 20, LdtGender: "Nữ", LdtBirthday: "01/01/2005", LdtBirthPlace: "HCM", LdtAddress: "Long Thành" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false,
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.LdtStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onLdtHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { LdtStudents, searchKeyword } = this.state;
    const filtered = LdtStudents.filter(student =>
      student.LdtStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onLdtHandleView = (LdtStudent) => {
    this.setState({
      selectedStudent: LdtStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onLdtHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onLdtHandleEdit = (LdtStudent) => {
    this.setState({ selectedStudent: LdtStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onLdtHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.LdtStudents.filter(student => student.LdtID !== studentID);
      return { LdtStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onLdtHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.LdtStudents.map(student =>
        student.LdtID === updatedStudent.LdtID ? updatedStudent : student
      );
      return { LdtStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onLdtHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onLdtHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      LdtStudents: [...prevState.LdtStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Lâm Đức Tài - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <LdtControl
                  onLdtHandleAddNew={this.onLdtHandleAddNew}
                  onLdtHandleSearch={this.onLdtHandleSearch}
                />
                <LdtStudentList
                  renderLdtStudents={this.state.filteredStudents}
                  onLdtHandleView={this.onLdtHandleView}
                  onLdtHandleEdit={this.onLdtHandleEdit}
                  onLdtHandleDelete={this.onLdtHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <LdtStudentDetail
                  student={this.state.selectedStudent}
                  onClose={this.onLdtHandleCloseDetail}
                />
              ) : (
                <LdtForm
                  renderLdtStudent={this.state.selectedStudent}
                  onLdtHandleUpdate={this.onLdtHandleUpdate}
                  onLdtHandleSaveNew={this.onLdtHandleSaveNew}
                  isAddingNew={this.state.isAddingNew}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LdtApp;