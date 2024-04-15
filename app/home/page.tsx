import clsx from 'clsx';
import React from 'react';
import Button from '../ui/components/Button/Button';


const Home: React.FC = () => {
    return (
        <div className={clsx("dark:*")}>
            <p>Conteúdo da página home</p>
            <Button />
        </div>
       
    );
};

export default Home;