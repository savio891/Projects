import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import MessagesBar from "./pages/mensagens/MessagesBar";


function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <MessagesBar />
    </div>
  );
}

export default App;
