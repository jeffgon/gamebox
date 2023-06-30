import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import Home from './assets/pages/Home';
import Add from './assets/pages/Add';
import NotFound from './assets/pages/NotFound';
import GamePage from './assets/pages/GamePage';
import GlobalStyle from './styles/GlobalStyle';
import { useEffect, useState } from 'react';


function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [cover, setCover] = useState('');
  const [review, setReview] = useState('');
  const [comment, setComment] = useState('');
  const [info, setInfo] = useState([]);
  const [games, setGames] = useState(undefined);
  const [infoGame, setInfoGame] = useState([]);
  
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  
    const storedInfo = localStorage.getItem('info');
    if (storedInfo) {
      setInfo(JSON.parse(storedInfo));
    }
  }, []);  

  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route 
        path='/' 
        exact element={
          <Login 
            username={username} 
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            token={token}
            setToken={setToken}
            setInfo={setInfo}
          />} />
        <Route 
          path='/signup' 
          exact element={
            <Signup 
              email={email}
              setEmail={setEmail}
              username={username} 
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />} />  
        <Route 
          path='/home' 
          exact element={
            <Home 
              token={token}
              info={info}
              setInfo={setInfo}
              setToken={setToken}
              games={games}
              setGames={setGames}
            />} />
        <Route 
          path='/add' 
          exact element={
            <Add 
              token={token}
              title={title}
              setTitle={setTitle}
              genre={genre}
              setGenre={setGenre}
              platform={platform}
              setPlatform={setPlatform}
              cover={cover}
              setCover={setCover}
              review={review}
              setReview={setReview}
              comment={comment}
              setComment={setComment}
            />} />
        <Route
          path='/game/:idGame'
          element={
            <GamePage
              infoGame={infoGame}
              setInfoGame={setInfoGame}
              token={token}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
