import "./App.css";
import Button from "./lib/components/Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "5rem",
      }}
    >
      <p>Should i push this button?</p>
      <Button label="Enter" kind="primary" />
    </div>
  );
}

export default App;
