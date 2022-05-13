function App() {
  let valor1 = Math.round(Math.random() * 200);
  let valor2 = Math.round(Math.random() * 200);

  return (
    <div>
      <p>A soma entre 50 e 10 é {50 + 10} </p>.
      <p>
        {" "}
        a soma entre {valor1} e {valor2} é {valor1 + valor2}
      </p>
      <p>o resultado acima é {(valor1 + valor2) % 2 === 0 ? "par" : "impar"}</p>
    </div>
  );
}

export default App;
