import "./entry.css";

let lancamentos = [
  {
    id: 2,
    user_id: 1,
    valor: "120.00",
    tipo: "Ganho",
    categoria: "Salário",
    data: "2024-01-15T03:00:00.000Z",
  },
  {
    id: 3,
    user_id: 1,
    valor: "100.00",
    tipo: "Ganho",
    categoria: "Salário",
    data: "2024-01-15T03:00:00.000Z",
  },
  {
    id: 4,
    user_id: 1,
    valor: "50.00",
    tipo: "Despesa",
    categoria: "Mercado",
    data: "2024-01-20T03:00:00.000Z",
  },
  {
    id: 5,
    user_id: 1,
    valor: "25.10",
    tipo: "Despesa",
    categoria: "Aluguel",
    data: "2024-01-18T03:00:00.000Z",
  },
];

function getTableHeader(){
  return(
      <tr>
        <th>Data</th>
        <th>Categoria</th>
        <th>Descrição</th>
        <th>Valor</th>
      </tr>
  )
}
function getTable(){
  return lancamentos.map((lancamento) => {
    return (
      <tr>
        <td>{lancamento.data}</td>
        <td>{lancamento.categoria}</td>
        <td>{lancamento.tipo}</td>
        <td>{lancamento.valor}</td>
        <td>
          <button className="edit" onClick = {console.log('edutar')}>Editar</button>
          <button className="delite" onClick = {console.log('excluir')}>X</button>
        </td>
      </tr>
    );
  })
}

function Lancamentos() {
return (
<div>
  <table>
    {getTableHeader()}
    {getTable()}
  </table>
</div>
)
}

export default Lancamentos;
