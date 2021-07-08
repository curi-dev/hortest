import React from 'react';

import classes from './styles.module.scss';


const CustomBox = (props) => {
    return (
        <div className={classes.container} style={props.isExtra && { display: 'flex', alignItems: "center" }} >
            <div style={props.isExtra && { width: '70%' }} >
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
            <footer style={props.isExtra && { flex: '1' }}>
                <button style={props.isExtra && { width: '100%', marginLeft: '0.4rem' }}>
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