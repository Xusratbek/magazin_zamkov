import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Catalog from './Catalog'
import "./sass/home.scss"
import logo1 from "./images/Logo.svg"
import logo2 from "./images/Vector.svg"
import logo3 from "./images/heart.svg"
import logo4 from "./images/savat.svg"
import { Link } from 'react-router-dom'
import Oteley from './Oteley'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <header>
<p>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</p>
        </header>
        <section className='section1'>
            <div>
                <img src={logo1} alt="" />
            </div>
            <div>
              <ul className='top'>
                <Link to={"/"} className='top-text'>Главная</Link>
                <Link to={"/catalog"} className='top-text'>Каталог</Link>
                <Link className='top-text'>Оптовая продажа</Link>
                <Link className='top-text'>О нас</Link>
              </ul>
            </div>
            <div className='phone'>
              <img className='img1' src={logo2} alt="" />
              <p>+7 (966) 55 88 499</p>
            </div>


            <div className='right'>
              <img  className='heart-and-card' src={logo3} alt="" />
              <img className='heart-and-card' src={logo4} alt="" />
             
            </div>

        </section>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/oteley' element={<Oteley/>}/>

      
    </Routes>
   </div>
     
  )
}

export default App
