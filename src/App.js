import Expenses from "./components/Expenses";
import Nav from "./components/Nav";
import { ExpenseProvider } from "./context/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>

      <div className="App">
          <Nav />
          <Expenses />
      </div>
      
    </ExpenseProvider>
  );
}

export default App;
