import React from 'react'
import abimg from '../../assets/about.png'
import skillset from './skillset'

export default function About() {
  return (
    <div className='about'>
      <div className='about1'>
    <h1>Know Who <span className='hightlight'>I'M</span></h1>
      <p>Hi Everyone, I am<span className='hightlight'> Mudassir Khan</span> from <span className='hightlight'>Nanded, Maharashtra, India.</span>
I am under graduate pursuing B.Tech in ENTC from
MGM college of engineering, Nanded.
</p>
<p>Apart from coding, some other activities that I love to do!</p>
<ul>
  <li>Playing Chess</li>
  <li>Reading Books</li>
  <li>Travelling</li>
</ul>
</div>
<img className='abimg' src={abimg} alt='' />
<div className='skill-set'>
  <h2 >Skill Set</h2>
  {skillset.map((set)=>(<img className='set-img' alt='' src={set.img}/>))}
</div>



    </div>
  )
}
