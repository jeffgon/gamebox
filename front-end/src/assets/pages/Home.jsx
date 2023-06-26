import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


function Home({ token, setToken, info, setInfo }) {
    const navigate = useNavigate();

    function backToHome() {
      navigate('/home')
    }
    
    function handleLogout() {
      toast.error('Deslogando...');
      setTimeout(() => {
        navigate('/');
      }, 1000)
      localStorage.removeItem('token');
      localStorage.removeItem('info');
      setToken('');
      setInfo([]);
    }
    
    useEffect(() => {
      function loadGames() {
          const req = axios.get(`${import.meta.env.VITE_API_URL}/game/`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })

          req.then((res) => {
          console.log('Chegou as informações de registro!', res.data);
          setInfo(res.data);
          localStorage.setItem('info', JSON.stringify(res.data));
          })
          req.catch((err) => {
            console.log('Algo deu erro no banco de dados!', err);
          });
        };

        loadGames();
        }, []);
        
    function addNewGame() {
        toast.success('Adicione um novo jogo e dê uma review! :)')

        setTimeout(() => {
            navigate('/add');
        }, 2000);
    }

    return (
      <AppContainer>
      <Header>
        <p onClick={backToHome}>Gamebox</p>
        <ButtonsContainer>
          <ion-icon name='add-outline' onClick={addNewGame}></ion-icon>
          <ion-icon name='log-out-outline' onClick={handleLogout}></ion-icon>
        </ButtonsContainer>
      </Header>

      <GamesContainer>
        {info.length > 0 ? (
          info.map(i => (
            <Game key={i.game_id} game_id={i.game_id} to={`/game/${i.game_id}`}>
              <ImageContainer>
                {i.cover_photo.startsWith('http') ? (
                  <Image src={i.cover_photo} alt="Cover Photo" />
                ) : (
                  i.cover_photo
                )}
              </ImageContainer>
              <Review>
                <Title>{i.title}</Title>
                <p>Review: {i.review}</p>
              </Review>
            </Game>
          ))
        ) : (
          <Message>Você ainda não registrou nenhum jogo!</Message>
        )}
      </GamesContainer>
    </AppContainer>
    )
}

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
  margin-left: 0;
  margin-left: 80%;
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

const Game = styled(Link)`  
  position: relative;
  width: 220px;
  height: 280px;
  background-color: white;
  margin: 15px;
  border-radius: 10px;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  border-radius: 10px;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 25px;
  margin-left: 34%;
  margin-top: 20%;
`;

const Review = styled.div`
  display: flex;
	flex-direction: column;
  align-items: space-between;
  position: absolute;
  margin-top: 5px;
  left: 8px;
  height: 150px;
  font-family: 'Montserrat', sans-serif;
  }
  p {
    top: 0;
    font-size: 13px;
    margin-top: 23px;
  }
`;

const Title = styled.h1`
  position: absolute;
  font-size: 23px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
`;

export default Home;