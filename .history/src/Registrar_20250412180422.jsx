import { useState } from "react";

export default function Registrar(){
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

return(
    <main>
        <h2>Registrar</h2>
        <form onSubmit={handleRegistrar}>
                <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

               <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                />
                <button type="submit">Registrar</button>
                </form>
                </main>
);
}
            