import React, { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login(
    {
        username, 
        setUsername, 
        password, 
        setPassword,
        setToken,
        setInfo
    }) {

      useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('info');
        setToken('');
        setInfo([]);
      }, [])

    const navigate = useNavigate();

    function signUpCall(e){
        e.preventDefault();

        toast.success('Preencha suas informações para se cadastrar! :)');

        return setTimeout(() => {
            navigate('/signup');
        }, 2000);

    };

    function toDoLogin(e) {
        e.preventDefault();
      
        const req = axios.post(`${import.meta.env.VITE_API_URL}/signin`, {
          username,
          password
        });
      
        req.then((res) => {
          const token = res.data;
          setToken(token);
          localStorage.setItem('token', token);
          toast.success('Login feito com sucesso! :)')
          setTimeout(() => {
            navigate('/home');
          }, 2000);
        }).catch((err) => {
          if (err.response) {
            toast.error(err.response.data);
          } else if (err.request) {
            toast.error('Erro na comunicação com a API');
          } else {
            toast.error('Erro ao configurar a solicitação');
          }
        });
    };

    return (
        <AppContainer>
         <LoginContainer>

            <Gamebox>Gamebox</Gamebox>

            <form onSubmit={toDoLogin}>   
                <div>
                <p>Username</p>
                    <Input
                        required 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder='Username' 
                        value={username}
                    />
                <p>Senha</p>
                    <Input 
                        type='password'
                        required 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='Senha'
                        value={password}
                    />
                </div>
            <button type='submit'>Entrar</button>
            </form>
         </LoginContainer>

         <SignupContainer>
            <p>Não tem uma conta? <LinkPersonalizado onClick={signUpCall}>Cadastra-se</LinkPersonalizado></p>               
         </SignupContainer>

        </AppContainer>  
    )
};

const AppContainer = styled.div`
  position: relative;
  background-color: #7F86AD;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 400px;
  height: 90%;
  background-color: #A4ADE1;
  margin-top: 5px;
  border-radius: 10px;
  position: absolute;
  button {
    cursor: pointer;
    pointer-events: auto;
    padding: 10px;
    width: 100%;
    height: 40px;
    outline: none;
    border-color: #6376E6;
    border-radius: 4px;
    margin-bottom: 15px;
    margin-top: 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: bold;
    background-color: #6376E6;
   }
`;

const Gamebox = styled.p`
  position: absolute;
  top: 23%; 
  color: white;
  font-size: 25px; 
  font-family: 'Press Start 2P', cursive;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;
`;

const SignupContainer = styled.div`
  position: absolute;
  top: 70%;
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: bold;
  }
`;

const LinkPersonalizado = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: black;
  line-height: 18px;
`;

export default Login;