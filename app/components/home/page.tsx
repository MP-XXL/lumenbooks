import React from 'react'
import Nav from '../shared/Nav';
import Hero from './Hero';
import Explore from './Explore';
import Featured from './Featured';
import Contact from './Contact';
import BottomNav from '../shared/BottomNav';

function page() {
  return (
    <div>
        <Nav />
        <Hero />
        <Explore />
        <Featured />
        <Contact />
        <BottomNav />
    </div>
  )
}

export default page