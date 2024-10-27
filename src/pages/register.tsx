import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';
import '../app/globals.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { MdDriveFileRenameOutline } from "react-icons/md";

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const validarRegistro = () => {
        if (name === '' || email === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        
        router.push('/register-info');
    };

    return (
        <div className={styles.container}>
            <img src="/img/common/logo.png" alt="Logo" className={styles.logo} />
            <div className={styles.login}>
                <h1>Criar conta</h1>
                <div className={styles.inputGroup}>

                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Insira seu nome completo</label>
                        <div className={styles.inputWrapper}>
                            <MdDriveFileRenameOutline className={styles.icon} />
                            <input 
                                type="text" 
                                id="name"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder=" "
                            />        
                        </div>
                    </div>
                    
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
                    
                    <button onClick={validarRegistro}>Prosseguir</button>
                    <p className={styles.registerText}>
                        Já tem uma conta? {' '}
                        <a
                            onClick={() => router.push('/login')}
                            className={styles.registerLink}
                        >
                            clique aqui.
                        </a>
                    </p>
                </div>
            </div>
            <div className={styles.loginImg}>
                <img className="login-img" src="/img/common/idoso_andando_de_bicicleta.jpg" alt="idosa meditando" />
            </div>
        </div>
    );
};

export default Register;
