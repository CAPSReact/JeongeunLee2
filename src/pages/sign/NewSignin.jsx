import { Wrapper, Title, Introduce, InputBox, Label, Input, Alert, Button } from "../../styles/style";

export default function NewSignin() {
  return (
    <Wrapper>
        <Title>로그인</Title>
        <Introduce>로그인 후 00일동안 저장됩니다.</Introduce>
       
        <InputBox top="80px">
        <Label>ID</Label>
        <Input type="text" />
        </InputBox>

        

        <InputBox top="30px">
        <Label>PW</Label>
        <Input type="password" />
        </InputBox>

        <Alert top="70px">모든 값을 입력해주세요!</Alert>
        <Button>로그인</Button>

    </Wrapper>
  )
}
