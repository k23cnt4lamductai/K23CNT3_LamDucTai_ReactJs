import React, { Component } from 'react';

export default class LdtStudent extends Component {
  render() {
    let { renderLdtStudent, LdtIndex, onLdtHandleView, onLdtHandleEdit, onLdtHandleDelete } = this.props;

    return (
      <tr>
        <td>{LdtIndex}</td>
        <td>{renderLdtStudent.LdtID}</td>
        <td>{renderLdtStudent.LdtStudentName}</td>
        <td>{renderLdtStudent.LdtAge}</td>
        <td>{renderLdtStudent.LdtGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onLdtHandleView(renderLdtStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onLdtHandleEdit(renderLdtStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onLdtHandleDelete(renderLdtStudent.LdtID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}