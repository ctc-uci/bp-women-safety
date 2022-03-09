import React from 'react';

function Card(props){
    return (
        <a href={props.link}>
            <div>
                <img src={props.img}/>
            </div>
            <div>
                <h5>
                    {props.title}
                </h5>
                <p>
                    {props.text}
                </p>
            </div>


        </a>
    );
}

export default Card
