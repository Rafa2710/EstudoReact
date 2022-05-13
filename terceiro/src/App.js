import { useState } from "react";
function App() {
  const [produto, setProduto] = useState([
    {
      id: 500,
      nome: "mouse",
      categoria: "Informatica",
      quantidade: 15,
      preco: 50.0,
    },
    {
      idid: 500,
      nome: "teclado",
      categoria: "Informatica",
      quantidade: 20,
      preco: 150.9,
    },
  ]);

  return (
    <div>
      <button
        onClick={() => {
          var cod = prompt("entre com o codigo");
          var no = prompt("entre com o nome do produto");
          var cat = prompt("entre com a categoria");
          var qt = prompt("entre com a quantidade");
          var pr = prompt("entre com o preco");

          setProduto(
            produto.concat({
              id: cod,
              nome: no,
              categoria: cat,
              quantidade: qt,
              preco: pr,
            })
          );
        }}
      >
        Clique
      </button>

      {produto.map((item, index) => (
        <div key={index}>
          <h2>{item.nome}</h2>
          <ul>
            <li>código:{item.id}</li>
            <li>categoria:{item.categoria}</li>
            <li>quantidade:{item.quantidade}</li>
            <li>preço:{item.preco}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
