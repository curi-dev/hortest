import React, { useState, useEffect } from 'react';

import classes from './styles.module.scss';

const Header = () => {
    const [currentViewport, setCurrentViewport] = useState(() => window.innerWidth);
    window.addEventListener('resize', () => setCurrentViewport(window.innerWidth))

    useEffect(() => {
        console.log('Reload page!')
    }, [currentViewport]);

    return (
        <header className={classes.container}>
            <div>
                <span>Hortifrutti</span>
                <div />
            </div>
            <div>
                <span>Bem vindo(a) ao mundo de cores e sabores</span>
                <div>
                    <button>Mudar loja</button>
                    <span>Fazendo pedidos na loja Tijuca</span>
                </div>
            </div>
        </header>
    )
}

export default Header;