'use client';

import React, { useCallback, useState } from 'react';
import { AlignJustify, User } from 'lucide-react';
import MenuItem from './MenuItem';

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div onClick={() => {}} className="hidden md:block text-sm font-semibold px-4 py-3 rounded-full cursor-pointer transition hover:bg-slate-50">
            airbnb your home
        </div>
        <div onClick={toggleOpen}className="p-4 md:py-1 md:px-2 border-[1px] border-slate-200 flex items-center gap-3 cursor-pointer transition rounded-full hover:shadow-sm">
            <AlignJustify />
            <div className='hidden md:block'>
            <User />
        </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl bg-indigo-400 w-[40vw] top-12  md:w-3/4 overflow-hidden text-sm">
            <div className='flex flex-col cursor-pointer'>
                
                <MenuItem onClick={() => {}} label="Sign In" />
                <MenuItem onClick={() => {}} label="Sign Up" />
            </div>

        </div>
      )}

    </div >
  );
}


export default UserMenu;
