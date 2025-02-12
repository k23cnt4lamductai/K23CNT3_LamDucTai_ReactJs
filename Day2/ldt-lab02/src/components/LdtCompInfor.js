import React, { Component } from 'react'

export default class LdtCompInfor extends Component {
  render() {
    return (
      <div>
      <h2>Họ và Tên: {info.fullName}</h2>
      <p>Mã Sinh Viên: {info.studentId}</p>
      <p>Ngày Sinh: {info.birthDate}</p>
      <p>Điện Thoại: {info.phone}</p>
      <p>Tên Lớp: {info.className}</p>
    </div>
    )
  }
}
