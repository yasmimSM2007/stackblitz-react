import { Link } from 'react-router-dom';
import './App.css'; // Ou crie um Home.css se quiser separar

export default function Home() {
    return (
        <main className="home-container">
            <h1>Bem-vindo ao sistema Castro e Registro!</h1>
            <p>Escolha uma opção abaixo:</p>
            <div className="button-container">
                <Link to="/login">
                    <button className="btn-login">Login</button>
                </Link>
                <Link to="/registrar">
                    <button className="btn-register">Cadastrar</button>
                </Link>
            </div>
        </main>
    );
}
