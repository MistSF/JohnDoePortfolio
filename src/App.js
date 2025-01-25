import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Accueil';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      </head>
      <body>
        <Header />
        <HomePage />
      </body>
    </div>
  );
}

export default App;
