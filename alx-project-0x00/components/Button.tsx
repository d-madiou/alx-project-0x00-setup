// let's create a simple button component in React with TypeScript that accepts a title and styles as props.
// and create multiple instances of this button in a landing page component.
import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({title, styles}) => {
    return (
        <button className={`border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full ${styles}`}>
        {title}
        </button>
    );

}
export default Button;