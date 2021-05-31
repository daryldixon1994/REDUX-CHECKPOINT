import Header from "./Components/Header/Header";
import TodoList from "./Components/MainSection/TodoList/TodoList";
import Footer from "./Components/Footer/Footer"
import './App.css'
function App() {
    return (
        <div className="App">
            <Header />
            <TodoList />
            <Footer />
        </div>
    );
}

export default App;
