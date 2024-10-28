import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';
import '../app/globals.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const validarLogin = () => {
        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            router.push('/home'); 
        } else {
            alert('E-mail ou senha inválidos.');
        }
    };

    return (
        <div className={styles.container}>
            <img src="/img/common/logo.png" alt="Logo" className={styles.logo} />
            <div className={styles.login}>
                <h1>Conectar</h1>
                <div className={styles.inputGroup}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Insira seu E-mail</label>
                        <div className={styles.inputWrapper}>
                            <FaEnvelope className={styles.icon} />
                            <input 
                                type="text" 
                                id="email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder=" "
                            />        
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Insira sua Senha</label>
                        <div className={styles.inputWrapper}>
                            <FaLock className={styles.icon} />
                            <input 
                                type="password" 
                                id="password"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder=" " 
                            />
                        </div>
                    </div>
                    <button onClick={validarLogin}>Entrar</button>
                    <p className={styles.registerText}>
                        Não tem uma conta? {' '}
                        <a
                            onClick={() => router.push('/register')}
                            className={styles.registerLink}
                        >
                            clique aqui.
                        </a>
                    </p>
                </div>
            </div>
            <div className={styles.loginImg}>
                <img className="login-img" src="/img/common/idosa_meditando.jpg" alt="idosa meditando" />
            </div>
        </div>
    );
};

export default Login;
