import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages'

const App = () => {

  return (
    <BrowserRouter>
      <header className="bg-[#3a405a] flex justify-between items-center pr-5 pl-3 pt-3 pb-3 shadow-black shadow-[0_3px_5px_black] border-b-[1px] border-[#111]">
        <Link to="/">
          <img src={logo} alt="Dall-F logo" className="h-[50px]"/>
        </Link>
        <Link to="/create-post">Create</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;