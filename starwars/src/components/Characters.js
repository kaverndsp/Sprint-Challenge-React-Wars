import React from 'react';
import styled from 'styled-components'

function Characters(props) {

    console.log(props);

    return (
        <div>
            <h1>{props.people.name}</h1>
            <h2>Born: {props.people.birth_year}</h2>
            <p>Mass: {props.people.mass}</p>
            <p>Height: {props.people.height}</p>
        </div>
    );
} 



export default Characters;