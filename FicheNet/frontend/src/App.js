import React from 'react';
import Usuario from './components/User';
import Jogo from './components/Jogo';
import Compra from './components/Compra';
import AddonList from './components/Addon';



const App = () => {
  return (
    <div className="App">

      <h1>Dados de Addon</h1>
      <AddonList id={1} />


      <h1>Dados do Usuário</h1>
      <Usuario id={1} />

      <h1>Dados do Jogo e Compra</h1>
      <Jogo id={1} />

      <h1>Dados da Compra por Usuário</h1>
      <Compra id={1} />
    </div>
  );
};

export default App;

