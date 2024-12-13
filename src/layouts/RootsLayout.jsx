import React from 'react'
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navbar/Navigation';

const RootsLayout = () => {
    return (
        <>
            <Header />
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootsLayout