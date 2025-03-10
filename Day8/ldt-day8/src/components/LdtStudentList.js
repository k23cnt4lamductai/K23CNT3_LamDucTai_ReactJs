import React, { Component } from 'react';
import LdtStudent from './LdtStudent';

export default class LdtStudentList extends Component {
  render() {
    let { renderLdtStudents, onLdtHandleView, onLdtHandleEdit, onLdtHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderLdtStudents.map((student, index) => (
            <LdtStudent
              key={student.LdtID}
              LdtIndex={index + 1}
              renderLdtStudent={student}
              onLdtHandleView={onLdtHandleView}
              onLdtHandleEdit={onLdtHandleEdit}
              onLdtHandleDelete={onLdtHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}