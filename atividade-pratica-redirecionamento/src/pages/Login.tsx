import { Button } from "../components/Button/Button";

export function Login() {
    return (
        <div>
            <label htmlFor="email">E-mail:</label>
            <input type="text"  id="email" />
            <a href="/TabelaPagina">
                <Button title="Entrar"/> 
            </a>
        </div>
    )
}