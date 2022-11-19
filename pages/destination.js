import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import data from "./api/data.json";

const destinations = data.destinations

const Destination = () => {
  const [index, setIndex] = useState(0);
  const destination = destinations[index];

  console.log("destination", destination)

  useEffect(() => {
    document.body.classList.add('destination')
    return () => {
      document.body.classList.remove('destination')
    }
  }, [])


  return (

    <main  id='destinationpage' className='grid-container grid-container--destination flow'>
      <h1 className='numbered-title'><span aria-hidden="true">01</span>Pick your destination</h1>
      
        <div className="img-wrap">
          <ImageAnimation index={index}>
            <img className='planet-img' src={destination.images.png} alt="planet"/> 
          </ImageAnimation>
        </div>
      
        <div className="tab-head underline-indicators flex">
          {destinations.map((item, i) => (
            <span 
            key={item.name} 
            className={`${i === index ? "tab active" : "tab"}`} 
            onClick={() => setIndex(i)}>
              {item.name.toUpperCase()}
            </span> 
          ))}
        </div>

        <article className="tab-body destination-info ">
          <TextAnimation index={index}>
            <div>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
            </div>
          </TextAnimation>

          <hr className='tab-line'/>

          <TextAnimation index={index}>
            <div className="destination-meta flex">
              <span>
                <h3 className='text-accent uppercase'>Avg. dsitance</h3>
                <p className='ff-serif uppercase'>{destination.distance}</p>
              </span>
              <span>
                <h3 className='text-accent uppercase'>Est. travel time</h3>
                <p className='ff-serif uppercase'>{destination.travel}</p>
              </span>
            </div>
          </TextAnimation>
        </article>
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

export default Destination




