import styled from "styled-components";
import AddToDoItem from "./AddToDoItem";
import ItemList from "./ItemList";
import {useEffect, useState} from "react";

const TaskListContainer = styled.div`
    color: palevioletred;
    background-color: white;
    padding: 10px 20px;
`
const Title = styled.div`
    font-size: 26px;
    margin: 20px;
    line-height: 50px;
    height: 50px;
    text-align: center;
`

export default function ToDoList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    const onAdd = (task) => {
        fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({task: task})
        }).then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }
    const onChecked = (id) => {
        fetch('http://localhost:3001/done', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        }).then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    };

    return (<>
        <Title>To-Do List</Title>
        <AddToDoItem onChange={onAdd}/>
        <TaskListContainer className="App">
            <ItemList items={items} onChange={onChecked}/>
        </TaskListContainer>
    </>);
}