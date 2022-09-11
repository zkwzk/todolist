import React from 'react';

import styled from 'styled-components'

const ItemContainer = styled.div`
    max-width: 800px;
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
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
        
        ::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em var(--form-control-color);
        }
        
        :checked::before {
          transform: scale(1);
        }
    }
`

const ItemDescriptionContainer = styled.div`
    flex: 10;
    word-break: break-word;
`
export default class Item extends React.Component {
    render() {
        return (
            <ItemContainer id={this.props.id}>
                <CheckBoxContainer><input type={"checkbox"} checked="checked"/></CheckBoxContainer>
                <ItemDescriptionContainer>{this.props.task}</ItemDescriptionContainer>
            </ItemContainer>
        )
    }
}
