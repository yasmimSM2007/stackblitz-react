import { Link } from 'react-router-dom';
import './App.css'; // Certifique-se de que o CSS foi aplicado corretamente

export default function Home() {
    return (
        <main>
            <h1>Bem-vindo!</h1>
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
