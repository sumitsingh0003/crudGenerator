import './App.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Main from './component/Main';
import Login from './component/Login';

function App() {

  const location = useLocation();
  const [state, setState] = useState(location.pathname);

  useEffect(() => {
    setState(location.pathname);
  }, [location]);

  return (
    <>
      {state === "/login" ? <Login /> : <Main />}
    </>
  )
}

export default App;