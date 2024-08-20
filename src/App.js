import React, { useState } from 'react';
import './App.css';
import logo from './images/masterchef.jpg';

function App() {
  const [receitas, setReceitas] = useState([
    { id: 1, nome: 'Bolo de Chocolate', ingredientes: ['Farinha', 'Açúcar', 'Ovos', 'Chocolate'] },
    { id: 2, nome: 'Lasanha', ingredientes: ['Massa', 'Molho de Tomate', 'Queijo', 'Carne Moída'] }
  ]);
  const [novaReceita, setNovaReceita] = useState({ nome: '', ingredientes: '' });

  const addReceita = () => {
    const listaDeIngredientes = novaReceita.ingredientes.split(',').map(ingredient => ingredient.trim());
    const receitaCriada = { id: receitas.length + 1, nome: novaReceita.nome, ingredientes: listaDeIngredientes };
    setReceitas([...receitas, receitaCriada]);
    setNovaReceita({ nome: '', ingredientes: '' });
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Logo do masterchef Brunão" width={1560} height={200} />
      </header>
      <div>
        {receitas.map((receita) => (
          <article key={receita.id}>
            <strong>{receita.nome}</strong>
            <ul>
              {receita.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Nome da Receita"
          value={novaReceita.nome}
          onChange={(e) => setNovaReceita({ ...novaReceita, nome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredientes separados por vírgula. EX: batata, açúcar, pão"
          value={novaReceita.ingredientes}
          onChange={(e) => setNovaReceita({ ...novaReceita, ingredientes: e.target.value })}
        />
        <button onClick={addReceita}>Adicionar Receita</button>
      </div>
    </div>
  );
}

export default App;
