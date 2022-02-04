import styled from "styled-components";
import { Card, } from "react-bootstrap";


export const Carro = styled.img`
float: right;
margin-top: 30px;
margin-left: 10px;
margin-right: 20px;
width: 40px;
height: 40px;
`

export const Foto = styled.img`
position: static;
width: 64px;
height: 69px;
left: 0px;
top: 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 52px;
`

export const Cafe = styled(Card)`
/* margin-top: 50%; */
float: left;
margin-right: 20px;
position: relative;
top: 0;
left: 0;
border: 1px, red solid;
`


export const Beba = styled(Card.Img)`
align-items: center;
border-radius: 20px;
`

export const Flecha = styled.img`
position: absolute;
width: 24px;
height: 24px;
left: 24px;
top: 44px;
`

export const Coma = styled.img`
margin-left: 550px;
margin-top: 50px;
width: 200px;
height: 200px;
left: 80px;
`

export const Boto = styled.button`
 background-color: #FA4A0C;
 border-radius: 20px;
 text-align: center;
 color: white;
 width: 290px;
 height: 40px;
 margin-left: 40%;
 border: none;
  color: white;
 `



export const Contenido = styled.div`
display: flex;
align-items: flex-start;

`


export const Contodo = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 200px);
gap: 40px;
padding: 40px;
justify-content: center;
`

export const Nombre = styled.h3`
color: black;
font-family: 'Times New Roman', Times, serif;
font-weight: bold;
font-size: larger;
`


export const Prepio = styled.p`
color: black;
font-family: 'Times New Roman', Times, serif;
font-weight: bold;
font-size: larger;
`

export const Fotografias = styled.img` 
max-width: 30%;
max-height: 30%;
display: block;
margin: auto;

`