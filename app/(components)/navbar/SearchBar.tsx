
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transiton cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-6">
            anywhere
        </div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
            any week
        </div>
        <div className='text-sm text-zinc-500 pl-6 pr-4 font-semibold flex items-center gap-3 '>
            <div className='hidden sm:block'>add guests</div>
            <div className="p-2 bg-rose-500 rounded-full text-sm">
            <Search className='text-white' size={16} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
