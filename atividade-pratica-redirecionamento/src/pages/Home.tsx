import { Button } from "../components/Button/Button";


export function Home () {
    return (
        <div>
            <h1>
                Bem vindo
            </h1>
           <a href="/login">
                <Button title = "Acesse nossa plataforma" />
           </a>      
        </div>
    )
}