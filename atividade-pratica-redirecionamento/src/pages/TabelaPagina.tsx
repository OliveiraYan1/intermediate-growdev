import ListaMercado from "../components/ListaMercado";
import '../TabelaPagina.css'

export function TabelaPagina() {
    return (
        <div className="container">
            <h1>Lista de compras</h1>
            <ListaMercado />
       </div>
    )
}