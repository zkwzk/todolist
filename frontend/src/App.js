import './App.css';
import Item from './components/Item';
import styled from 'styled-components'

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
                <Item task="add custom npm command" id={1}/>
                <Item task="hahahaha" id={1}/>
            </TaskListContainer>
        </>
    );
}

export default App;
