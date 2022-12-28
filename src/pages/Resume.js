import React from 'react'
import resume from '../assets/mudassir.pdf'

import pg1 from '../assets/resumep1.jpg'
import pg2 from '../assets/resumep2.jpg'

export default function Resume() {
    
    


    

        return (
            <div className='resume'>
                
                <center>
                    <a className='resume-link' href={resume} download='Mudassir-resume'><button>Resume <img height={20} width={25} src='https://cdn-icons-png.flaticon.com/512/4208/4208397.png' alt=''/></button></a>
                    <img className='resume-page' alt=''  src={pg1}/>
                    <img className='resume-page' alt='' src={pg2}/>
                    

      
                 </center>

            </div>
        )
    }

