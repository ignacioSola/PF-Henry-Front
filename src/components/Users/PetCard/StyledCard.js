import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cards = styled.div`
    height: 19rem;
    background-color: ${(props) => props.theme.card};
    padding: 1rem;
    border: 2px;
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:hover {
        transform: scale(1.03);
        transition: all .3s ease;
        -webkit-box-shadow: 6px 5px 12px 1px rgba(0,0,0,0.7); 
        box-shadow: 6px 5px 12px 1px rgba(0,0,0,0.7);
    }
` 

export const NameCard = styled(Link)`
    text-decoration: none;
    height: 35%;
`

export const CardImage = styled.img`
    width: 100%;
    height: 17rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const TitleCard = styled.h3`
    text-decoration: none;
    color: ${(props) => props.theme.font_card};
    font-size: 1.5rem;
    margin-bottom: 5px;
`