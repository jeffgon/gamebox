import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import React, { useEffect } from 'react';


function Signup(
    {
        username, 
        setUsername, 
        password, 
        setPassword, 
        confirmPassword, 
        setConfirmPassword, 
        email, setEmail
    }) {

    const navigate = useNavigate();

    function signUpConfig(e) {
        e.preventDefault();
      
        if (password !== confirmPassword) return toast.error('As senhas precisam ser iguais!');
        if (password.length < 8) return toast.error('A senha deve ter no mínimo 8 caracteres!');
      
        const req = axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
          email,
          username,
          password,
          confirmPassword
        });
      
        req.then((res) => {
          toast.success('Cadastro feito com sucesso :)');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }).catch((err) => {
          if (err.response) {
            return toast.error(err.response.data);
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
                <form onSubmit={signUpConfig}>   
                    <div>
                        <p>Email</p>
                            <Input
                                type='email'
                                required 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Email' 
                                value={email}
                            />
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
                        <p>Confirme a senha</p>
                            <Input 
                                type='password'
                                required 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                placeholder='Confirme a senha'
                                value={confirmPassword}
                            />
                    </div>
                <button type='submit'>Cadastrar</button>
            </form>
            </LoginContainer>
        </AppContainer>  
    );
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
  top: 10%; 
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

export default Signup;