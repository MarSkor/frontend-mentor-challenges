import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import data from "./api/data.json";

const technologies  = data.technology;

console.log("technology", technologies)

const Technology = () => {
  const [index, setIndex] = useState(0);
  const technology = technologies [index];

  useEffect(() => {
    document.body.classList.add('technology')
    return () => {
      document.body.classList.remove('technology')
    }
  }, [])

  return (
    <section id='main' className='grid-container grid-container--technology flow'>
      <h1 className='numbered-title'><span aria-hidden="true">03</span>Space launch 101</h1>

      <div className="number-navigation">
        <div className="number-wrap">
          {technologies.map((member, i) => (
            <span 
            key={member.name} 
            className={`${i === index ? "number active" : "number"}`} 
            onClick={() => setIndex(i)}
            >
              {i + 1}
            </span> 
          ))}
        </div>
      </div>

      <article className='tech-info'>
          <h3 className='uppercase text-accent ff-sans-cond'>The terminology...</h3>
          <TextAnimation index={index}>
          <div>
            <h2 className='uppercase text-white ff-serif'>{technology.name}</h2>
            <p className='text-accent'>{technology.description}</p>
          </div>
          </TextAnimation>
      </article>

      <div className="img-wrap img-wrap-tech">
        <ImageAnimation index={index}>
        <figure className='full-width'>
          <img className='technology-img-landscape img' src={technology.images.landscape} alt={technology.name}/> 
        </figure>
        </ImageAnimation>
      </div>

      <div className="img-wrap img-wrap-tech portrait-img">
        <ImageAnimation index={index}>
          <img 
          className='technology-img-portrait img' 
          src={technology.images.portrait} 
          alt={technology.name}/> 
        </ImageAnimation>
      </div>

    </section>
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

export default Technology