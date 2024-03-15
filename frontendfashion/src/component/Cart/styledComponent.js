import styled from "styled-components"

export const CartContainer = styled.div`
display: flex;
justify-content: center;
min-height: 75vh;

@media screen and (min-width:768px) {
    min-height: 90vh;
}

`

export const CartContentContainer = styled.div`
display: flex;
flex-direction: column;
width: 90%;
max-width: 1110px;
@media screen and (min-width:768px) {
    width: 80%;
    max-width: 1110px;
}

`

export const  CartHeading = styled.h1`
color: #3e4c59;
font-family: 'Roboto';
font-size: 24px;
font-weight: 700;
@media screen and (min-width:768px) {
    font-size: 48px;
}

`

export const RemoveButtonDiv = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;

`

export const RemoveButton = styled.button`

background-color: transparent;
border: 0px;
color: #0b69ff;
font-family: 'Roboto';
font-size: 20px;
cursor: pointer;
`

