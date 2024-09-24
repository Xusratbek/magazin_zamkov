import React from 'react'
import "./sass/catalog.scss"
import logo1 from "./images/zamki.svg"
import logo2 from "./images/ofisiy.svg"
import logo3 from "./images/qulp.svg"
import { Link } from 'react-router-dom'
const Catalog = () => {
  return (
    <div>
      <div className='up'>
        <br />
        <br />
        <h1 className='kategoriya'>Категории</h1>
        <br />
        <div className='obj'>
          <div className='plus'>
            <Link to={"/oteley"} style={{textDecoration:"none"}}>
            <img style={{height:"300px"}} src={logo1} alt="" />
            <br />
            <br />
            </Link>
            <p className='nb'>Замки для отелей</p>
          </div>
          <div className='plus'>
            <Link style={{textDecoration:"none"}}>
          <img style={{height:"300px"}} src={logo2} alt="" />
            <br />
            <br />
            </Link>
            <p className='nb'>Замки для офиса</p>
            
</div>
<div className='plus'>
  <Link style={{textDecoration:"none"}}>
  
  
  <img style={{height:"300px"}} src={logo3} alt="" />
  <br />
            <br />
            </Link>
            <p className='nb'>Замки для шкафчиков</p>
            
</div>

        </div>

      </div>
    </div>
  )
}

export default Catalog