import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages'

const App = () => {

  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <img src={logo} alt="Dall-F logo"/>
        </Link>
        <Link to="/create-post">Create</Link>
      </header>
    </BrowserRouter>
  )
}

export default App;