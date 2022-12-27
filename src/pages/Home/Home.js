import React from 'react'
import Type from '../../component/Type'


import hmImg2 from '../../assets/avatar.svg'





export default function Home() {
  return (
    <div className='home'>
    
   
      <div className='writing'>
        <h1>Hi There!</h1>
        <h1>I'M <span style={{color:''}}>MUDASSIR KHAN</span></h1>
        <h2 className='typing' ><Type /></h2>
        
        </div>
        
        

      

      

   
    <div className='home-2'>
      <div className='home-intro'>
        <h2>LET ME<span className='hightlight'> INTRODUCE MYSELF</span></h2>
        <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
        <p>I am fluent in classics like<span className='hightlight'> Javascript.</span> </p>
        <p>My field of Interest's are building new <span className='hightlight'> Web Technologies and Products.</span></p>
        <p>Whenever possible, I also apply my passion for developing products with<span className='hightlight'> Modern Javascript Library and Frameworks</span>  like<span className='hightlight'> React.js.</span></p>

      </div>
    <img className='home-img' src={hmImg2} alt=''/>
    
    


    </div>
    
     
     

    </div>
  )
}
