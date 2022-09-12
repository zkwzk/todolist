import React from 'react';

import styled from 'styled-components'

const ItemContainer = styled.div`
    margin: 10px auto;
    text-align: left;
    padding: 20px 0;
    border-bottom: 2px solid palevioletred;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
`
const CheckBoxContainer = styled.div`
    flex: 1;
    max-width: 30px;
    
    input[type="checkbox"] {
        cursor: pointer;
    }
`

const ItemDescriptionContainer = styled.div`
    flex: 10;
    word-break: break-word;
`
export default function Item(props) {
    const {id, task} = props.item;
    return (
        <ItemContainer id={id}>
            <CheckBoxContainer><input type={"checkbox"} onChange={props.onChange}/></CheckBoxContainer>
            <ItemDescriptionContainer>{task}</ItemDescriptionContainer>
        </ItemContainer>
    )
}
