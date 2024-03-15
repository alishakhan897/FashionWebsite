import styled from "styled-components";
import {Link} from 'react-router-dom'

export const NavItem = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin:auto;
    max-width: 1110px;
    padding-top: 15px;
    padding-bottom: 25px;/* Add padding to both left and right sides */

    @media screen and (min-width: 600px) {
        width: 90%;
        padding: 12px;
        max-width:none;
    }
`;


export const Image = styled.img`
    height: 80px;
    mix-blend-mode: color-burn;

    @media screen and (min-width:768px) {
        height:120px;
    }
`;

export const NavDiv = styled.div`
   
   display:none;

    @media screen and (min-width:756px) {
        width:30%;
    padding:15px;
    border:3px solid #c79691;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    color:#c79691;
    font-size:17px;
    font-weight:bold;
    cursor:pointer;

    }
`

export const Unorder = styled.ul`
   display:none;
   
   @media screen and (min-width:768px) {
    list-style-type:none;
    width:100%;
    padding:0px;
    margin:0px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
   }
   `
   
export const Button = styled.button`
  
   display:none;
   @media screen and (min-width:768px) {
    background: #c79691;
    color: white;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #c79691;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
  
    &:hover{
        width: calc(10%);
    }
   }

   
  
`

export const Icon = styled.div`
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #c79691;
    right: 0.3em;
    transition: all 0.3s;

    &:active{
        transform: scale(2.8);
    }
`
export const Svg = styled.svg`
    width: 1.1em;
    transition: transform 0.3s;
    color: #c79691;

    &:hover {
        transform: translateX(0.1em);
    }
`

export const LinkDes2 = styled(Link)`
    text-decoration:none;
    color:#c79691;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  
`

export const ForSmallDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between ;
    background-color:#f0d8d6;
    padding-top:12px;
    padding-bottom:12px;
    padding-left:10px;
    padding-right:10px;
    box-sizing: border-box;

    @media screen and (min-width:768px) {
        display:none;
    }

`

export const ButtonSmall = styled.button`
   background-color:transparent;
   outline:none;
   border:none;
   cursor:pointer;

   &::hover{
    transform-scale:2.8;
   }

    @media screen and (min-width:768px) {
        display:none;
    }

`