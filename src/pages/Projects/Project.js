import React from 'react'
import Skeliton from './projectdata';






export default function Project() {
  return (
    <div className='project'>
      {Skeliton.map((value)=>(<div key={value.id} className='card'>
      <img className='proj-img' alt='' src={value.img}/>
      <h3>{value.name}</h3>
      <p>{value.note}</p>
      <a  className='proj-link' href={value.visit}><button className='proj-btn'><img className='proj-btn-img' src='https://cdn-icons-png.flaticon.com/512/300/300221.png'  alt=''/></button></a>
      <a className='proj-link' href={value.github}><button className='proj-btn'><img className='proj-btn-img' src='https://cdn-icons-png.flaticon.com/512/3291/3291695.png'  alt=''/></button></a>


    </div>))}
    
    </div>
  )
}
