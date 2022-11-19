import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    document.body.classList.add('home')
    return () => {
      document.body.classList.remove('home')
    }
  }, [])
  
  return (
    <main id='homepage'>
      <div className="wrapper">
        <section className="grid-container grid-container--home">

          <div className="grid-column">
            <h1 className='fs-500 uppercase letter-spacing-lg text-accent'>So, you want to travel to</h1>
            <span className='d-block uppercase ff-serif text-white heading-big'>Space</span>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer 
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
              give you a truly out of this world experience!</p>
          </div>

          <div className="grid-column">
            <div className="btn-wrap">
              <a className='lg-btn skip-to-content uppercase ff-serif text-dark bg-white' href="#">Explore</a>
            </div>
          </div>
          
        </section>
      </div>
    </main>
  )
}
