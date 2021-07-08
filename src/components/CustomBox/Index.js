import React from 'react';

import classes from './styles.module.scss';


const CustomBox = (props) => {
    return (
        <div className={classes.container} >
            <div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
            <footer>
                <button>
                    {props.buttonText}
                </button>
                {
                    props.extraText && (
                        <small>{props.extraText}</small>
                    )
                }
            </footer>
        </div>
    )
}

export default CustomBox;