import React from 'react';
import styled from 'styled-components'
import {CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


const NewDiv = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
margin-left:33%;
margin-bottom: 3%;
margin-top:2%;

`; 

const NewCard = styled.div`
box-shadow: 5px 10px 50px;
background-color:white;
width:50%;
`;

function Characters(props) {

    // console.log(props);

    return (
        <NewDiv>
          <NewCard>
            <CardHeader className="display-3">{props.people.name}</CardHeader>
            <CardBody>
              <CardTitle className="lead">Born: {props.people.birth_year}</CardTitle>
              <CardText>Height: {props.people.height}</CardText>
              <CardText>Mass: {props.people.mass}</CardText>
              <CardText>Eye Color: {props.people.eye_color.toUpperCase()}</CardText>
              <CardText>Skin Color: {props.people.skin_color.toUpperCase()}</CardText>
              <CardText>Hair Color: {props.people.hair_color.toUpperCase()}</CardText>
           
            </CardBody>
               <CardFooter className="text-muted">Gender: {props.people.gender.toUpperCase()}</CardFooter>
          </NewCard>
    </NewDiv>
      );
    };



export default Characters;