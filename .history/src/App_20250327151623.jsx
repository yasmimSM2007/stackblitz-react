export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const autenticarComFirebase = () => {}

  return (
      <main>
          <form onSubmit={autenticarComFirebase}>
              <label htmlFor="email">E-mail:</label>
              <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(evento) => setEmail(evento.target.value)}
              />

              <label htmlFor="password">Senha:</label>
              <input
                  id="password"
                  type="password"
                  value={senha}
                  onChange={(evento) => setSenha(evento.target.value)}
              />
          </form>
      </main>
  );
}

