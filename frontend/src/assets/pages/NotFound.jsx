import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound() {

    const navigate = useNavigate();

    function backToHome() {
        navigate('/home');
    }

    return (
      <ScreenContainer>
            <img src='https://media0.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=6c09b952j5lzmtaa6430xbls9hr7cqovdjk3r0qoghgyf7e6&ep=v1_gifs_search&rid=200w.gif&ct=g' />
            <Button onClick={backToHome}>Voltar</Button>    
      </ScreenContainer>
    );
}

const ScreenContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin-top: 150px;
`;

const Button = styled.button`
  cursor: pointer;
  pointer-events: auto;
  width: 50px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  width: 150px;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
`;
export default NotFound;