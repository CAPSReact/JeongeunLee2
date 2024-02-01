/*
import '../../styles/style.css';
import '../../styles/signupStyle.css';


export default function Signin() {
  return (
    <div className="Wrapper">
      
      <br/><br/><br/>

      <p className="titleStyle">로그인</p>
      <p className="titleStyle_2">로그인시 00일동안 데이터가 저장됩니다.</p>

      <p className="textStyle">ID</p>
      <input type="text" className="inputStyle" />

      <p className="textStyle">PW</p>
      <input type="text" className="inputStyle" />

      <br/><br/>

      <p className="textStyle">로그인이 가능합니다.</p>
      <button className="buttonStyle"><p className="buttonText">로그인(Signin)</p></button>
    </div>
  );
}
*/

import { useState } from "react";
import { Wrapper, Input } from "../../styles/style";

export default function Signin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  console.log(id);
  const handleIdChange = (event) => {
    setId(event.target.value); // 'id' 상태를 업데이트하는 함수

  };

  const handlePwChange = (event) => {
    setPw(event.target.value); // 'id' 상태를 업데이트하는 함수
  };

  return (
    <Wrapper>


      <div className="Wrapper">
      
      <br/><br/><br/>

      <p className="titleStyle">로그인</p>
      <p className="titleStyle_2">로그인시 00일동안 데이터가 저장됩니다.</p>

      <p className="textStyle">ID</p>
      <Input type="text" value={id} onChange={handleIdChange} />

      <p className="textStyle">PW</p>
      <Input type="text" value={pw} onChange={handlePwChange} />

      <br/><br/>

      <p className="textStyle">로그인이 가능합니다.</p>
      <button className="buttonStyle"><p className="buttonText">로그인(Signin)</p></button>
    </div>

    </Wrapper>
  );
}