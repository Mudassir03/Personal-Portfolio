import React from 'react'
import socialMedia from '../socialM'

export default function Footer() {
  return (
    <div className='footer'>
        <footer>
          <p>Design and Develope by MUDASSIR KHAN</p>
         
          <u1 className='footer-ul'>
            {socialMedia.map((set)=>(<li className='footer-li' key={set.id}><a href={set.src}><img alt=' ' src={set.logo}/></a></li>))}

          </u1>

            

        </footer>

    </div>
  )
}
