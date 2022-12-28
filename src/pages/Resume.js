import React from 'react'
import resume from '../assets/mudassir.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function Resume() {
    


    

        return (
            <div className='resume'>
                
                <center>
                    <a className='resume-link' href={resume} download='Mudassir-resume'><button>Resume <img height={20} width={25} src='https://cdn-icons-png.flaticon.com/512/4208/4208397.png' alt=''/></button></a>
                    <Document file={resume}>
                        <Page className='resume-page' pageNumber={1}/>
                        <Page className='resume-page' pageNumber={2}/>
                    </Document>
                    

      
                 </center>

            </div>
        )
    }

