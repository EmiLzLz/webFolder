import react from "react";
import MainLayout from "./components/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App ">
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
