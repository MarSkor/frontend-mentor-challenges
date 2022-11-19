import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import data from "./api/data.json";

const crew = data.crew

const Crew = () => {
  const [index, setIndex] = useState(0);
  const crewmember = crew[index];


  useEffect(() => {
    document.body.classList.add('crew')
    return () => {
      document.body.classList.remove('crew')
    }
  }, [])
  
  
  return (
    <main  id='crewpage' className='grid-container grid-container--crew flow'>
      <h1 className='numbered-title'><span aria-hidden="true">02</span>Meet your crew</h1>
      
        <div className="img-wrap-crew">
          <ImageAnimation index={index}>
            <img className='crew-img img' src={crewmember.images.png} alt="planet"/> 
          </ImageAnimation>
        </div>
      
        <article className="dot-body crew-info">
          <TextAnimation index={index}>
            <div>
              <h3 className='uppercase ff-serif'>{crewmember.role}</h3>
              <h2>{crewmember.name}</h2>
              <p>{crewmember.bio}</p>
            </div>
          </TextAnimation>
        </article>

        <div className="dot-navigation">
          <div className="dot-wrap flex">
            {crew.map((member, i) => (
              <span 
              key={member.name} 
              className={`${i === index ? "dot active" : "dot"}`} 
              onClick={() => setIndex(i)}>   
              </span> 
            ))}
          </div>
        </div>
        
    </main>
  )
}


const TextAnimation = ({children, index}) => {
  return(
    <TransitionGroup>
      <CSSTransition
      timeout={500}
      key={index}
      classNames="text-animation"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

const ImageAnimation = ({children, index}) => {
  return(
    <TransitionGroup>
      <CSSTransition
      timeout={500}
      key={index}
      classNames="image-animation"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Crew