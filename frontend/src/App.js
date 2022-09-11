import './App.css';
import styled from 'styled-components'
import ItemList from "./components/ItemList";

const TaskListContainer = styled.div`
    max-width: 800px;
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

function App() {
    return (
        <>
            <Title>To-Do List</Title>
            <TaskListContainer className="App">
                <ItemList />
            </TaskListContainer>
        </>
    );
}

export default App;
