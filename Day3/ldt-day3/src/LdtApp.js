import LdtClassComp from "./components/LdtClassComp";
import LdtFuncComp from "./components/LdtFuncComp";
import LdtjsxExpression from "./components/LdtjsxExpression";


function LdtApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Day3 - Lâm Đức Tài </h1>

      <LdtjsxExpression />
      <hr/>
      {/*sử dụng function component*/}

      <LdtFuncComp />

      {/* sử dụng class componemt*/}
      <LdtClassComp></LdtClassComp>


    </div>
  );
}

export default LdtApp;
