import React from "react";
import LdtCompInfor from "./LdtCompInfor";

function App() {
  const personalInfo = {
    fullName: "Lâm Đức Tài",
    studentId: "2310900092",
    birthDate: "26/09/2005",
    phone: "0338962005",
    className: "K23CNT3"
  };

  return (
    <div className="App">
      <h1>Thông tin cá nhân</h1>
      <LdtCompInfor info={personalInfo} />
    </div>
  );
}

export default App;