import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import heroMobileSm from '../images/homepage/mobile/image-homepage-hero.jpg'
import heroMobileLg from '../images/homepage/mobile/image-homepage-hero@2x.jpg'
import heroTabletSm from '../images/homepage/tablet/image-homepage-hero.jpg'
import heroTabletLg from '../images/homepage/tablet/image-homepage-hero@2x.jpg'
import heroDesktopSm from '../images/homepage/desktop/image-homepage-hero.jpg'
import heroDesktopLg from '../images/homepage/desktop/image-homepage-hero@2x.jpg'

import profilePicture from '../images/homepage/profile.jpg'

import downArrows from '../images/icons/down-arrows.svg'

function Home({ breakPoints, setActive }) {
  const aboutRef = useRef()

  return (
    <div className='home container'>
      <div className='hero'>
        <img
          className='hero__image'
          alt='computer monitor showing example website'
          src={
            breakPoints.mobileSm
              ? heroMobileSm
              : breakPoints.mobileLg
              ? heroMobileLg
              : breakPoints.tabletSm
              ? heroTabletSm
              : breakPoints.tabletLg
              ? heroTabletLg
              : breakPoints.desktopSm
              ? heroDesktopSm
              : heroDesktopLg
          }
        />

        <div className='hero__message'>
          {breakPoints.desktopLg ? (
            <h1>Hey, I’m Glen. Let’s build a beautiful website.</h1>
          ) : (
            <h2>Hey, I’m Glen. Let’s build a beautiful website.</h2>
          )}

          <button
            className='btn btn-primary'
            onClick={() => {
              aboutRef.current.scrollIntoView()
            }}
          >
            <div className='btn-primary__arrows'>
              <object type='image/svg+xml' data={downArrows}>
                button image
              </object>
            </div>
            <p className='btn__text btn-primary__text'>ABOUT ME</p>
          </button>
        </div>
      </div>

      <div className='about'>
        <div className='about__image'>
          <img alt='site creators professional portrait shot' src={profilePicture} />
        </div>

        <div className='about__message' ref={aboutRef}>
          <h2 className='about__heading'>About Me</h2>
          <p className='about__text'>
            Greetings! I'm Glen, a full stack web developer specializing in MERN stack
            development. I create awesome client-facing applications and robust
            server-side API's while prioritizing inclusive and accessible digital
            experiences for all!
            <br></br>
            <br></br>
            Let's work together to build exceptional and inclusive web solutions.
          </p>

          <Link
            to='/portfolio'
            className='link about__link'
            onClick={() => {
              setActive('portfolio')
            }}
          >
            <button className='btn btn-secondary'>
              <p className='btn__text btn-secondary__text'>GO TO PORTFOLIO</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
