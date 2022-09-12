import {Container} from "./Container";
import styled from "styled-components";
import {useState} from "react";

const ToDoItemContainer = styled(Container)`
    margin-bottom: 20px;
    align-item: middle;
    justify-content: space-between;
    
    input {
        color: palevioletred; 
        height: 30px;
        font-size: 20px;
        font-weight: 500;
        border-radius: 5px;
        border: 0 solid palevioletred;
        max-width: 600px;
        width: 600px;
        padding-left: 5px;
        
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: palevioletred;
            opacity: 0.7; /* Firefox */
        }
        
        :focus{
            outline: none;
        }
    }
    
    button {
        text-align: right;
        color: white;
        background: palevioletred;
        border: none;
        border-radius: 8px;
        max-width: 200px;
        min-width: 100px;
        text-align: center;
        font-weight: 600;
        
        :hover {
            background: #ffa6c9;
            cursor: pointer;
        }
    }
`;
export default function AddToDoItem(props) {
    const {onChange} = props;
    const [inputValue, setInputValue] = useState('');
    const buttonOnClick = () => {
        onChange && onChange(inputValue);
        setInputValue('');
    }
    return (<ToDoItemContainer>
        <input type="text" placeholder="Add a task" autoFocus={true} value={inputValue}
               onChange={(event) =>
                   setInputValue(event.target.value)
               }/>
        <button onClick={buttonOnClick}>ADD</button>
    </ToDoItemContainer>)
}