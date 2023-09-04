// import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonText="Cliccami" className="btn-class" />
      <ImageComponent
        src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Image green valley"
      />
    </div>
  );
}

export default App;
