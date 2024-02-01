import '../../styles/style.css';
import '../../styles/signupStyle.css';
import { useState } from "react";
import { Input } from "../../styles/style";


export default function Signup() {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value); // 'id' 상태를 업데이트하는 함수
  };

  const handlePwChange = (event) => {
    setPw(event.target.value); // 'id' 상태를 업데이트하는 함수
  };


  return (


    
    <div className="Wrapper">
      
      <br/><br/>

      <p className="titleStyle">회원가입</p>
      <p className="titleStyle_2">반갑습니다.</p>

      <p className="textStyle">ID</p>
      <Input type="text" value={id} onChange={handleIdChange} />

      <p className="textStyle">PW</p>
      <Input type="text" value={pw} onChange={handlePwChange} />

      <p className="textStyle">회원 유형</p>
      <select className="inputStyle">
        <option>회장</option>
        <option>부회장</option>
        <option>집행부</option>
        <option>부원</option>
      </select>

      <br/><br/>

      <p className="textStyle">가입이 가능합니다.</p>
      <button className="buttonStyle"><p className="buttonText">가입(Signup)</p></button>
    </div>
  );
}