import React, { Component } from 'react';

export default class LdtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LdtID: '',
      LdtStudentName: '',
      LdtAge: '',
      LdtGender: 'Nam',
      LdtBirthday: '',
      LdtBirthPlace: 'HN',
      LdtAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderLdtStudent !== this.props.renderLdtStudent) {
      if (this.props.renderLdtStudent) {
        this.setState({ ...this.props.renderLdtStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          LdtID: '',
          LdtStudentName: '',
          LdtAge: '',
          LdtGender: 'Nam',
          LdtBirthday: '',
          LdtBirthPlace: 'HN',
          LdtAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { LdtID, ...otherState } = this.state;

    if (!LdtID || LdtID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (LdtID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onLdtHandleSaveNew({ LdtID, ...otherState });
    } else {
        this.props.onLdtHandleUpdate({ LdtID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>

            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="LdtID" value={this.state.LdtID} onChange={this.handleChange} required />
                </div>
              </div>
            )}

            {/* Hiển thị mã sinh viên nhưng không cho sửa khi chỉnh sửa */}
            {!this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="LdtID" value={this.state.LdtID} readOnly />
                </div>
              </div>
            )}

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="LdtStudentName" value={this.state.LdtStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="LdtAge" value={this.state.LdtAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="LdtGender" value={this.state.LdtGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="LdtBirthday" value={this.state.LdtBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="LdtBirthPlace" value={this.state.LdtBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="LdtAddress" value={this.state.LdtAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}