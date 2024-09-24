import React,{useState,useEffect} from 'react'
import "./sass/home.scss"

import logo5 from "./images/product.svg"
import logo6 from "./images/evaluate 1.svg"
import logo7 from "./images/photo.png"
import logo8 from "./images/qulf.png"
import logo9 from "./images/ofis.png"
import logo10 from "./images/zamka.png"
import logo11 from "./images/golden.svg"
import logo12 from "./images/vk.svg"
import logo13 from "./images/twitter.svg"
import logo14 from "./images/facebook.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./sass/styles.css"
import { FreeMode, Pagination } from 'swiper/modules';

import axios from 'axios'


const Home = () => {

  const [products,setProducts]=useState([])
  const [filterData,setFilterData]=useState([])


useEffect(()=>{
  getProducts()
  limitGetData()

},[])

const getProducts=()=>{
  axios({
    url:"http://localhost:8080/nashiy-product",
    method:"get"
  }).then((res)=>{
    setProducts(res.data)
  })
}

const limitGetData=()=>{

  axios({
    url:"http://localhost:8080/nashiy-product?_limit=3",
    method:"get"
  }).then((res)=>{
    setFilterData(res.data)
  })
}


  return (
    <div>
        
        <section className='section2'>
          <div className='golden-soft'>

          <Swiper style={{width:"1438px",height:"770px"}} pagination={true} modules={[Pagination]} >
        {
          filterData.map((item)=>(
            <SwiperSlide>
          <div style={{width:"1400px",height:"500px",display:"flex",gap:"60px"}}>
            <img style={{width:"400px",height:"500px",objectFit:"contain",marginLeft:"220px"}} src={item.images[0].img1} alt="" />
            <div style={{width:"604px",height:"433px",marginTop:"50px"}}>
              <h1 style={{fontFamily:"Roboto",fontWeight:"600",fontSize:"34px",lineHeight:"62px",textAlign:"center"}}>{item.productName}</h1>
              <div style={{width:"287px",height:"136px",marginLeft:"20px",marginTop:"20px"}}>
                <p style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"14px",lineHeight:"24px",textAlign:"center"}}>{item.desc1}</p>
                <p style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"14px",lineHeight:"24px",marginTop:"10px"}}>{item.desc2}</p>
              </div>
              <div style={{width:"220px",height:"121px",marginLeft:"20px"}}>
                <p style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"14px",lineHeight:"24px",marginLeft:"-160px"}}>Цена</p>
                <h1 style={{fontFamily:"Roboto",fontWeight:"600",fontSize:"24px",lineHeight:"28.64px",marginLeft:"-120px"}}>{item.price}₽</h1>
                <button style={{width:"220px",height:"50px",marginTop:"16px",background:"#4295E4",border:"none",color:"white"}}>Добавить в корзину</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
          </div>
        </section>
        <section className='section3'>


        </section>
        <section className='section4'>
          <div className='klient'>
            <h1 className='nomer'>5,567</h1>
            <br />
            <p className='bottom'>Счастливых клиентов</p>
          </div>
          <div className='vibor'>
          <h1 className='nomer'>1245</h1>
          <br />
          <p className='bottom'>Продуктов на выбор</p>

          </div>
          <div className='prodash'>
          <h1 className='nomer'>372</h1>
          <br />
          <p className='bottom'>Продаж в день</p>


          </div>
          <div className='rinke'>
          <h1 className='nomer'>20</h1>
          <br />
          <p className='bottom'>Лет на рынке</p>
          </div>
        </section>
        <section className='section5'>
          <div className='golden'>
            <h1 className='answer'>Почему GoldenService? </h1>
            <div className='time-out'>
              <div className='vazvrat'>
                <img className='card' src={logo5} alt="" />
                <br />
                <br />
                <p className='zamka'>Возврат удвоенной стоимости <br /> каждого замка в случае брака. </p>
              </div>
              <div className='vazvrat'>
              <img className='card' src={logo6} alt="" />
                <br />
                <br />
                <p className='zamka'>Наносим ваш логотип компании <br /> на наш продукт </p>
              </div>
              <div className='vazvrat'>
              <img className='card' src={logo5} alt="" />
                <br />
                <br />
                <p className='zamka'>Возврат удвоенной стоимости <br /> каждого замка в случае брака. </p>
</div>
            </div>
          </div>
<div className='kategoriya'>
  <h1 className='group'>Категории</h1>
  <div className='oteley'>
    <div style={{width:"600px",height:"470px",backgroundImage:`url(${logo7})`}} >
      <div className='nashiy'>
        <b className='clear'>Для отелей</b>
        <button className='pereyti'>Перейти</button>
      </div>
    </div>
    <div style={{width:"600px",height:"470px",backgroundImage:`url(${logo8})`}}>
    <div className='nashiy'>
        <b className='clear'>Для шкафчиков</b>
        <button className='pereyti'>Перейти</button>
      </div>
    </div>
  </div>
  <div className='poteley'>
  <div style={{width:"600px",height:"470px",backgroundImage:`url(${logo9})`}} >
      <div className='nashiy'>
        <b className='clear'>Для офисов</b>
        <button className='pereyti'>Перейти</button>
      </div>
    </div>
    <div style={{width:"600px",height:"470px",backgroundImage:`url(${logo10})`}}>
    <div className='nashiy'>
        <b className='clear'>Замки для дома</b>
        <button className='pereyti'>Перейти</button>
      </div>
    </div>
  </div>
</div>
<div className='vse'>
  <button className='content'>Все категории</button>
</div>
<div className='product'>

<h1 className='soft'>Наши популярные продукты</h1>
<br />
<br />
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       {
        products.map((item)=>(
          <div >
          <SwiperSlide>
            <div style={{padding:"10px"}}>
              <img style={{width:"300px",height:"300px",objectFit:"contain"}} src={item.images[0].img1} alt="" />
              <br />
                <p style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"16px",lineHeight:"26px"}}>{item.productName}</p>
                
                <p style={{textAlign:"center",marginTop:"10px",marginLeft:"-200px"}}>{item.price}₽</p>
              </div>
          </SwiperSlide>
          </div>
        ))
       }
       
      </Swiper>
</div>
<div className='perezvonim'>
  <h1 className='link'>Мы Вам перезвоним</h1>
  <p className='outline'>Если у вас возникли какие-то вопросы или проблемы, заполните <br />
   форму и мы Вам перезвоним.</p>
   <div className='adress'>
    <input placeholder='Ваше имя' className='imya' type="text" />
    <input placeholder='Ваш Email' className='imya' type="text" />
    <button className='book'>Отправить</button>
   </div>
</div>

<div className='navigasiya'>

  <div className='tools'>
    <div className='doodge'>
      <div className='front'>
        <img src={logo11} alt="" />
        <div className='logots'>
          <img src={logo12} alt="" />
          <img src={logo13} alt="" />
          <img src={logo14} alt="" />
        </div>
      </div>
      <div className='ports'>
        <div >
          <p className='output'>Навигация</p>
          <br />
          <p className='output'>Главная</p>
          <br />
          <p className='output'>Каталог</p>
          <br />
          <p className='output'>Оптовая продажа</p>
          <br />
          <p className='output'>О нас</p>
        </div>
        <div>
          <p className='output'>Наши контакты</p>
          <br />
          <p className='output'>Телефоны</p>
          <br />
          <p className='output'>+7 (988) 565 00 38</p>
          <br />
          <p className='output'>+375 33 662 82 56</p>
          <br />
          <p className='output'>Email</p>
          <br />
          <p className='output'>vladpertcev@mail.ru</p>
          <br />
          <p className='output'>korobko416@gmail.com</p>
        </div>
        <div>
          <p className='output'>Наш адрес</p>
          <br />
          <p className='output'>Россия, <br /> Ростов-на-Дону ул. <br /> Богачева, 16</p>
        </div>
        <div>
          <p className='output'>Информация</p>
          <br />
          <p className='output'>Доставка и оплата</p>
          <br />
          <p className='output'>Гарантии</p>
          <br />
          <p className='output'>Возврат товара</p>
        </div>
      </div>
    </div>
    <hr />
    <br />
    <p className='config'>© 2021 Golden Soft All rights reserved.</p>

  </div>
</div>
        </section>
    </div>
  )
}

export default Home