
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <div className='max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      <h1>{children}</h1>
    </div>
  );
}

export default Container;
