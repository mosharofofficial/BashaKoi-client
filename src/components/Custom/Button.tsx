import React, { ReactNode } from 'react';

const Button = ({children}:{children:ReactNode}) => {
    return (
      <button className="font-bold border rounded-md px-6 py-1 transition-colors duration-75 ease-in-out active:bg-[#4a818c] active:text-[#153045] active:border-[#153045]">
        {children}
      </button>
    );
};

export default Button;