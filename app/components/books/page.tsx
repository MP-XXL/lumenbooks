import React from 'react'
import Catalog from './Catalog';
import Nav from '../shared/Nav';
import BottomNav from '../shared/BottomNav';

async function Page(props: any) {
  return (
    <div>
        <Nav />
        <Catalog {...props} />
        <BottomNav />
    </div>
  )
}

export default Page