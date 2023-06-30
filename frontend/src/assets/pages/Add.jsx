import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

function Add({
    title, 
    setTitle, 
    genre, 
    setGenre,
    platform, 
    setPlatform, 
    cover, 
    setCover, 
    review, 
    setReview, 
    comment, 
    setComment,
    token
}) {
    
    const navigate = useNavigate();

    function backToHome() {
        navigate('/home');
    };

    function addNewGame(e) {
        e.preventDefault();
        
        if (review < 1 || review > 5) return toast.error('A review precisa ser de 1 a 5.')
        
        if (!title || !genre || !platform || !cover || !review || !comment) {
            return toast.error('Informe todos os campos!')
        } 

        const req = axios.post(`${import.meta.env.VITE_API_URL}/game/add`, {
            title,
            genre,
            platform,
            cover_photo: cover,
            review,
            comment
        }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });

        req.then((res) => {
            toast.success('Jogo adicionado com sucesso! :)');
            setTimeout(() => {
            navigate('/home');
          }, 2000);
        }).catch((err) => {
            if (err.response) {
              toast.error('Erro na comunicação com a API');
              console.log(err.response.data)
            } else if (err.request) {
              toast.error('Erro na comunicação com a API');
            } else {
              toast.error('Erro ao configurar a solicitação');
            }
        });
    }

    return (
        <AppContainer>
            <Header>
                <ion-icon name="home-outline" onClick={backToHome}></ion-icon>
                <p onClick={backToHome}>Gamebox</p>     
            </Header>
            
            <ContainerGame>
                <form onSubmit={addNewGame}>   
                    <div>
                    <p>Nome do jogo</p>
                        <Input 
                            required 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder='Nome do jogo' 
                            value={title}
                        />
                    <p>Gênero</p>
                        <Input 
                            required 
                            onChange={(e) => setGenre(e.target.value)} 
                            placeholder='Gênero' 
                            value={genre}
                        />
                    <p>Capa do jogo</p>
                        <Input 
                            required 
                            onChange={(e) => setCover(e.target.value)} 
                            placeholder='Capa do jogo' 
                            value={cover}
                        />
                    <p>Plataforma</p>
                        <Input 
                            required 
                            onChange={(e) => setPlatform(e.target.value)} 
                            placeholder='Plataforma' 
                            value={platform}
                        />
                    <p>Review (de 1 a 5)</p>
                        <Input 
                            required 
                            onChange={(e) => setReview(e.target.value)} 
                            placeholder='Review' 
                            value={review}
                        />
                    <p>Comentário da review</p>
                        <TextArea 
                            required 
                            onChange={(e) => setComment(e.target.value)} 
                            placeholder='Comentário' 
                            value={comment}
                        />
                    </div>
                <button type='submit'>Adicionar jogo</button>
                </form>
            </ContainerGame>

        </AppContainer>  
    )
}

const AppContainer = styled.div`
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
  p {
      cursor: pointer;
      pointer-events: auto;
      font-family: 'Press Start 2P', cursive;
      color: white;
      font-size: 25px;
    }
    ion-icon {
      cursor: pointer;
      pointer-events: auto;
      margin-right: 90%;
      position: absolute;
      font-size: 25px;
      color: white;
    }
`;

const ContainerGame = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 400px;
  height: 80%;
  background-color: #A4ADE1;
  margin-top: 55px;
  border-radius: 10px;
  button {
    padding: 10px;
    width: 100%;
    height: 40px;
    outline: none;
    border-color: #6376E6;
    border-radius: 4px;
    margin-bottom: 15px;
    margin-top: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: bold;
    background-color: #6376E6;
    cursor: pointer;
    pointer-events: auto;
   }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 95%;
  height: 70px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export default Add;