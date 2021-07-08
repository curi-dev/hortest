import React, { useState, useEffect } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import CustomBox from '../CustomBox/Index';
import Header from '../Header/Index';

import classes from './styles.module.scss';
import orderImage from '../../assets/cesta.png';

const Main = () => {
    const [currentViewport, setCurrentViewport] = useState(() => window.innerWidth);
    window.addEventListener('resize', () => setCurrentViewport(window.innerWidth))

    useEffect(() => {
        console.log('Reload page!')
    }, [currentViewport]);

    const infoStrategy = {
        orders: {
            title: "Pedidos recorrentes",
            text: "Monte uma lista de compras e escolha a frequência que gostaria de recebê-la.",
            buttonText: "Criar pedido",
            extraText: "Novidade"
        },
        gifts: {
            title: "Cesta de presentes",
            text: "Surpreenda na hora de presentear com as nossas cestas de presente incríveis.",
            buttonText: "Ver cestas"
        },
        restaurant: {
            title: "Estação natural",
            text: "Compre aqui as delícias do nosso restaurante.",
            buttonText: "IFood e Rappi"
        },
        signIn: {
            title: "Assinatura de orgânicos",
            text: "Experimente o nosso serviço em parceria com a Orgânicos in Box!",
            buttonText: "Ver catálogo"
        }
    }


    return (
        [
            <Header />,
            <header className={classes.title}>
                <h1>Qual serviço você está buscando?</h1>
            </header>,
            <main className={classes.container}>
                <section>
                    <div>
                        <header>
                            <img src={orderImage} alt="Cesta de frutas" />
                            PEDIDOS DE
                            <h3>Supermecado</h3>
                        </header>
                        <p>
                            Monte sua lista de compras com as suas preferências e deixe o trabalho de montar o carrinho
                            com a nossa equipe. Se algum produto estiver esgotado entraremos em contato com você.
                        </p>
                        <footer>
                            <div>
                                <small>
                                    <span>Próximo horário disponível</span>
                                    <time>17:00 - 21:00</time>
                                </small>
                            </div>
                            <div className={classes.button}>
                                <FiEdit3 />
                                <button>
                                    Pedir Agora
                                </button>
                            </div>
                        </footer>
                    </div>
                </section>
                <section>
                    {
                        (currentViewport >= 720 || currentViewport < 320) ? (
                            <>
                                <CustomBox {...infoStrategy["orders"]} />
                                <CustomBox {...infoStrategy["gifts"]} />
                                <CustomBox  {...infoStrategy["restaurant"]} />
                                <CustomBox {...infoStrategy["signIn"]} />
                            </>
                        ) : (
                            <>
                                <CustomBox {...infoStrategy["orders"]} />
                                <CustomBox {...infoStrategy["gifts"]} />
                            </>
                        )
                    }
                </section>
                {
                    (currentViewport < 720 && currentViewport > 320) && (
                        <section className={classes.extraSection}>
                            <CustomBox {...infoStrategy["restaurant"]} isExtra />
                            <CustomBox {...infoStrategy["signIn"]} isExtra />
                        </section>
                    )
                }
            </main>
        ]
    )
}

export default Main;