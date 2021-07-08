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
                logo
            </div>
            <div>
                <span>Bem vindo(a) ao mundo de cores e sabores</span>
                {
                    currentViewport > 320 ? (
                        <div>
                            <a href="#">Mudar loja</a>
                            <span>Fazendo pedidos na loja Tijuca</span>
                        </div>
                    ) : (
                        <>
                            <div>
                                <a href="#">Mudar loja</a>
                            </div>
                            <div>
                                <span>Fazendo pedidos na loja Tijuca</span>
                            </div>
                        </>
                    )
                }
            </div>
        </header>
    )
}

export default Header;