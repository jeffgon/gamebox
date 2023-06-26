import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

function GamePage({ infoGame, setInfoGame, token }) {
    const { idGame } = useParams();
    const navigate = useNavigate();

    function backToHome() {
        navigate('/home')
    }

    useEffect(() => {
        function loadGame() {
            const req =  axios.get(`${import.meta.env.VITE_API_URL}/game/${idGame}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            req.then((res) => {
              console.log('Chegou as informações de registro!', res.data);
              setInfoGame(res.data);
            });
            req.catch((error) => {
                console.log(error.message);
            })
        };  
        
        loadGame();
      }, []);

    return (
        <>
            <AppContainer>
                <Header>
                    <p onClick={backToHome}>Gamebox</p>
                    <ButtonsContainer>
                        <ion-icon name="arrow-back-outline" onClick={backToHome}></ion-icon>
                    </ButtonsContainer>
                </Header>

                <GamesContainer>
                    <InformationGame>
                        <h1>{infoGame.title}</h1>
                        <img src={infoGame.cover_photo} />
                    </InformationGame>

                    <InformationReview>
                        <p>Platform: {infoGame.platform}</p>
                        <p>Genre: {infoGame.genre}</p>
                        <p>Review: {infoGame.review}</p>
                        <h1>{infoGame.comment}</h1>
                    </InformationReview>
                </GamesContainer>
                
            </AppContainer>
        </>
    )
}

export default GamePage;

const AppContainer = styled.div`
  position: relative;
  background-color: #7F86AD;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #2A3261;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  p {
      cursor: pointer;
      pointer-events: auto;
      font-family: 'Press Start 2P', cursive;
      color: white;
      font-size: 25px;
    }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 30px;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  left: 50px;
  ion-icon {
    cursor: pointer;
    pointer-events: auto;
    font-size: 25px;
    color: white; 
  }
`;

const GamesContainer = styled.div`
  margin-top: 60px;
  width: 95%;
  height: 90vh;
  background-color: #7F86AD;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
`;

const InformationGame = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
    height: 45%;
  }
  h1 {
    margin-bottom: 10px;
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
  }
  p {
    margin-top: 10px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  }
`;

const InformationReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-size: 30px;
  }
`;