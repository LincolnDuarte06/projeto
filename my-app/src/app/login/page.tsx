import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const login = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Simulação de autenticação
        if (email === "admin@example.com" && password === "password123") {
            // Redireciona para a página principal
            router.push("/");
        } else {
            // Exibe mensagem de erro
            setError("E-mail ou senha inválidos");
        }
    };

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={login} className={styles.form}>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    );
}
