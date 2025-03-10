import React from 'react';

const LdtStudentDetail = ({ student, onClose }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Thông tin chi tiết</h3>
                <p><strong>Mã sinh viên:</strong> {student.LdtID}</p>
                <p><strong>Họ tên:</strong> {student.LdtStudentName}</p>
                <p><strong>Tuổi:</strong> {student.LdtAge}</p>
                <p><strong>Giới tính:</strong> {student.LdtGender}</p>
                <p><strong>Ngày sinh:</strong> {student.LdtBirthday}</p>
                <p><strong>Nơi sinh:</strong> {student.LdtBirthPlace}</p>
                <p><strong>Địa chỉ:</strong> {student.LdtAddress}</p>
                <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
            </div>
        </div>
    );
};

export default LdtStudentDetail;