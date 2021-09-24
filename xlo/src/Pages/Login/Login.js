import React, { Component, useState} from 'react';
import axios from 'axios';

import './Login.css';

import logo from '../../Assets/img/Logo.png'

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : ''
        }
    };

    efetuaLogin = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/v1/account/signin', {
            email : this.state.email,
            senha : this.state.senha
        })

        .then(resposta => {

                if (resposta.data.sucesso) {
                    
                    localStorage.setItem('usuario-login', resposta.data.data.token)
    
                    console.log('Meu token é: ' + resposta.data.data.token)
                }
                else{
                    console.log("E-mail ou senha inválidos!")
                }
        })
    }

        atualizaStateCampo = (campo) => {
            this.setState({ [campo.target.name] : campo.target.value })
        }   

    render(){
        return(
            <div>
                <main>
                    <section className="container-login flex">
                        <div className="img__login"><div className="img__overlay"></div></div>
                        <div className="item__login">
                            <div className="row">
                                <div className="item">
                                    <img src={logo} className="icone__login" alt="logo da Gufi" />
                                </div>
                                <div className="item" id="item__title">
                                    <p className="text__login" id="item__description">Faça login para continuar!</p>
                                </div>

                                {/* Faz a chamada para a função de login quando o botão é pressionado */}
                                <form className="item" onSubmit={this.efetuaLogin}>
                                    <div className="item">
                                        <input
                                            // E-mail
                                            id="login__email"
                                            className="input__login"
                                            type="text"
                                            name="email"
                                            // Define que o input email recebe o valor do state email
                                            value={this.state.email}
                                            // Faz a chamada para a função que atualiza o state, conforme o usuário altera
                                            onChange={this.atualizaStateCampo}
                                            placeholder="E-mail"
                                        />
                                    </div>

                                    <div className="item">
                                        <input
                                            // E-mail
                                            id="login__password"
                                            className="input__login"
                                            type="password"
                                            name="senha"
                                            // Define que o input email recebe o valor do state email
                                            value={this.state.senha}
                                            // Faz a chamada para a função que atualiza o state, conforme o usuário altera
                                            onChange={this.atualizaStateCampo}
                                            placeholder="Senha"
                                        />
                                    </div>
                                        
                                    <div className="item">
                                    <button className="btn btn__login" id="btn__login" type="submit">
                                        Logar
                                    </button>
                                    </div>

                                    <div className="item">
                                    <a className="caminho-cadastro" href="/Cadastro">Não possui uma conta?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    };

}
export default Login;