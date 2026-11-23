import "./App.css";
import UserProfile from "./components/UserProfile";
import PokemonList from "./components/PokemonList";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";

function App() {
    return (
        <>
            <UserProfile />
            <PokemonList />
            <Counter />
            <FocusInput />
        </>
    );
}

export default App;
