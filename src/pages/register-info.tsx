import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';
import '../app/globals.css';

const SelectionForm: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedOption) {
            router.push('/sigin');
        } else {
            alert('Por favor, selecione uma opção para continuar.');
        }
    };

    const handleBack = () => {
        router.push('/register');
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img src="/img/common/logo.png" alt="Logo" className={styles.logo} />
                <h1>Estamos quase lá!</h1>
                <span>Para finalizar o cadastro da sua conta, por favor nos informe o que te trouxe aqui:</span>

                <form onSubmit={handleSubmit}>
                    <div className={styles.radioContainer}>
                        <div className={styles.radioGroup}>
                            <label>
                                <input 
                                    type="radio" 
                                    value="Divulgar eventos com foco na saúde física dos idosos." 
                                    checked={selectedOption === 'Divulgar eventos com foco na saúde física dos idosos.'} 
                                    onChange={handleChange} 
                                />
                                Divulgar eventos com foco na saúde física dos idosos.
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="Publicar meus artigos relacionados a saúde dos idosos." 
                                    checked={selectedOption === 'Publicar meus artigos relacionados a saúde dos idosos.'} 
                                    onChange={handleChange} 
                                />
                                Publicar meus artigos relacionados a saúde dos idosos.
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="Prestar serviços e consultas para a terceira idade." 
                                    checked={selectedOption === 'Prestar serviços e consultas para a terceira idade.'} 
                                    onChange={handleChange} 
                                />
                                Prestar serviços e consultas para a terceira idade.
                            </label>
                        </div>
                        <div className={styles.radioGroup}>
                            <label>
                                <input 
                                    type="radio" 
                                    value="Cuidar de minha saúde física durante o envelhecimento." 
                                    checked={selectedOption === 'Cuidar de minha saúde física durante o envelhecimento.'} 
                                    onChange={handleChange} 
                                />
                                Cuidar de minha saúde física durante o envelhecimento.
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="Ajudar a cuidar da saúde de um parente ou conhecido." 
                                    checked={selectedOption === 'Ajudar a cuidar da saúde de um parente ou conhecido.'} 
                                    onChange={handleChange} 
                                />
                                Ajudar a cuidar da saúde de um parente ou conhecido.
                            </label>
                        </div>
                    </div>

                    <div className={styles.buttonGroup}>
                    <button type="button" className={styles.backButton} onClick={handleBack}>Voltar</button>
                        <button type="submit" className={styles.submitButton}>Criar minha conta</button>
                    </div>
                </form>
            </div>
            <div className={styles.loginImg}>
                <img className="login-img" src="/img/common/idoso_andando_de_bicicleta.jpg" alt="idosa meditando" />
            </div>
        </div>
    );
};

export default SelectionForm;
