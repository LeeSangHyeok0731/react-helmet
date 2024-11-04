import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.div`
  top: 10%;
  left: 10%;
  background-color: skyblue;
  cursor: pointer; /* 버튼처럼 보이도록 추가 */
  padding: 10px; /* 버튼의 크기 추가 */
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/select")}>Select</Button>
      </ButtonWrapper>
    </>
  );
}

export default Navbar;
