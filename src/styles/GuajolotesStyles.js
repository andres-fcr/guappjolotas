
import { Card } from "react-bootstrap";
import styled from "styled-components";

export const Foto = styled(Card.Img) `

height: 80px;
width: 80px;
`

export const Producto = styled.li`
list-style:none;
font-style: 1.5rem;
text-align:center;
margin-top:10px
:hover {
    opacity: 0.8;
}
`
export const ListProducto = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
padding:0 300px 0 300px;
justify-content: center;
`

export const Precio = styled(Card.Text)`
color: #FA4A0C;
font-weight: bold;
`
export const TProducto = styled(Card.Title)`
font-size: 14px;
line-height: 21px;
`
export const ConjuntoTexto =styled.div`
padding-right:20px
`