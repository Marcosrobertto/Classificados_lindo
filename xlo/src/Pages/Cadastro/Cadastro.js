import React, {Component} from "react";

import '../Cadastro/Cadastro.css'
import logo from '../../Assets/img/Logo.png'
import axios from "axios";

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email : '',
            telefone: '',
            senha: '',
            tipoUsuario: 2
          
        }
    };

    efetuaCadastro = (event) =>{
        event.preventDefault();

        axios.post('http://localhost:5000/v1/account/signin', {
            nome : this.state.nome,
            email : this.state.email,
            numeroTelefone: this.state.telefone,
            senha : this.state.senha,
            tipoUsuario : this.state.tipoUsuario
           
        })

        .then(response =>{
            if (response.status ===200) {
                this.state({isSuccessful:true});
            }
        })
        .catch( () =>{
            this.setState({
                errorMensagem: "Usuário já existente! Cadastre novamente",

            })
        })
    }

    atualizaStateCampo = (campo) =>{
        this.setState({ [campo.target.name] : campo.target.value })
    }

    render(){
        return(
           <div>
               <main>
                    <section className="container-cadastro flex">
                        <div className="img__cadastro"><div className="img_overlay"></div></div> {/* OBSERVAR PERMANÊNCIA*/}
                        <div className="item_cadastro">
                            <div className="row">
                                <div className="item">
                                    <img src={logo} className="icone_cadastro" alt="Logo"/>
                                </div>

                                <div className="item" id="item_title">
                                    <p className="text_cadastro" id="item_description">Faça seu cadastro, e fique por dentro dos melhores negócios!</p>
                                </div>

                                <form className="list" onSubmit={this.efetuaCadastro}>
                                    <div className="bloco">
                                       <input
                                        id="cadastro_nome"
                                        className="input_nome"
                                        type="text"
                                        name="nome"
                                        value={this.state.nome}
                                        required onChange={this.atualizaStateCampo}
                                       placeholder="Nome"
                                       />
                                    </div>  


                                    <div className="bloco">
                                       <input
                                        id="cadastro_email"
                                        className="input_email"
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        required onChange={this.atualizaStateCampo}
                                       placeholder="Email"
                                       />
                                    </div>  


                                    <div className="bloco">
                                       <input
                                        id="cadastro_telefone"
                                        className="input_telefone"
                                        type="text"
                                        name="telefone"
                                        value={this.state.telefone}
                                        required onChange={this.atualizaStateCampo}
                                       placeholder="Telefone"
                                       />
                                    </div>  
                                     
                                     
                                    <div className="bloco">
                                       <input
                                        id="cadastro_password"
                                        className="input_password"
                                        type="password"
                                        name="senha"
                                        value={this.state.senha}
                                        required onChange={this.atualizaStateCampo}
                                       placeholder="Senha"
                                       />
                                    </div>  
                                    
                                    <div className="item">
                                        <button className="btn btn_cadastro" id="cadastro_botao" type="submit">Cadastrar</button>
                                    </div>

                                </form>   
                            </div>
                        </div>
                   </section>
               </main>
           </div>
        );
    }

}

export default Cadastro;