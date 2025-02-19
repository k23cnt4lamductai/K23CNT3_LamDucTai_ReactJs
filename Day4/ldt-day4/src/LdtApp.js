import LdtFuncComp from "./components/LdtFuncComp";
import LdtFuncComp1 from "./components/LdtFuncComp1";
import LdtClassComp from "./components/LdtClassComp";

function LdtApp() {
  // object
  const users = {
    fullName:'Chach van doanh',
    age:20,
    phone:"064545465"
  }
  return (
    <div className="container border">
      <h1>Demo Component - Props - State</h1>
      <hr/>
      <div className='alert alert-danger'>
          <LdtFuncComp name="Duc Tai" address="25 Vu Ngoc Phan" company = "Devmaster" />
          <hr/>
          <LdtFuncComp name="Mai Binh An" address="K23CNT2" company = "FIT-NTU" />
      </div>
      <div className="alert alert-info">
        <LdtFuncComp1 renderInfo={users} />
      </div>
        <LdtClassComp />
        {/* chuyen  du lieu tu LdtApp -> xuong Ldtclasscomp  */}
        <LdtClassComp name="K23CNT3" renderUsers={users} />
      
    </div>
  );
}

export default LdtApp;
