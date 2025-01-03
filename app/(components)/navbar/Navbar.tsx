'use client'
import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';


const Navbar = () => {
  return (
    <div className="fixed bg-white shadow-sm z-20 w-full">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex items-center justify-between gap-3 md:gap-0">
                    {/**logo */}
                    <Logo />
                    {/**search bar */}
                    <SearchBar />
                    {/**login */}
                    <UserMenu />
                </div>
            </Container>
        </div>
    </div>
  );
}

export default Navbar;
