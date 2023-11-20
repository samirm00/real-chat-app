import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5002');

const App = () => {
    return <div> Chat App</div>;
};

export default App;
