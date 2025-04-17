export default function Home() {
    return (
        <main>
            <h1>Bem-vindo!</h1>
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/registrar">
                    <button>Cadastrar</button>
                </Link>
            </div>
        </main>
    );
}
