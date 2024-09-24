import React, { useEffect, useState } from 'react'
import "./sass/oteley.scss"
import axios from 'axios'
const Oteley = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/nashiy-product`).then((res)=>{
        const arr=res.data.filter(item => item.category=="oteley"
            )
            setProducts(arr)
        })
    },[])
  return (
    <div>
        <div className='watch'>
            <h1>Замки для отелей</h1>
            <br />
            <br />
            <div className='lill'>
                {
                    products.map((item)=>(
                        <div style={{width:"288px",height:"453px", boxShadow:" 1px 1px 18px 3px rgba(0,0,0,0.65)", borderRadius:"6px",padding:"10px"}}>
                            <img style={{width:"268px",height:"320px"}} src={item.images[0].img1} alt="" />
                            <br />
                            <br />
                            <p style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"16px",lineHeight:"26px"}}>{item.productName}</p>
                            
                            <p style={{marginTop:"5px",color:"#161C24",fontWeight:"600",fontSize:"20px",lineHeight:"23.87px"}}>{item.price}₽</p>
                        </div>
                    ))
                }


            </div>


        </div>
    </div>
  )
}

export default Oteley