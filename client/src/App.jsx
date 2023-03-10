import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages'

function App() {

  return (
    <BrowserRouter>
      <header className="bg-[#3a405a] flex justify-between items-center pr-5 pl-3 py-3 sm:pr-10 sm:pl-6 shadow-[0_px_5px_black]">
        <Link to="/">
          <img src={logo} alt="Dall-F logo" className="h-[45px]"/>
        </Link>
        <Link to="/create-post" className="text-[#fff] bg-[#247ba0] px-3 py-1 rounded-full">Create</Link>
      </header>
      <main className="bg-[#d8d8d8] h-screen pt-10">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;