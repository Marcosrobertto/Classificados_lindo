import React, {Component} from 'react';
import { Form, Navbar, Container, Nav, Card,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Anunciar/Anunciar.css';
import logo from '../../Assets/img/Logo-Branca1.svg';
import axios from 'axios';
import Rodape from '../../Components/Rodape/rodape';

class Anunciar extends Component{
    constructor(props){
        super(props);
        this.state={
            nomeProduto: '',
            descricao: '',
            telefone: '',
            preco: '',
           
        }
    };

    efetuaAnuncio =  (event) =>{
        event.preventDefault();

        axios.post('http://localhost:5000/v1/product', {
            nomeProduto : this.state.nomeProduto,
            descricao: this.state.descricao,
            telefone: this.state.telefone,
            preco: this.state.preco,
         
        })

        .then(response =>{
            if (response.status ===201) {
                this.state({isSuccessful:true});
            }
        })
        .catch( () =>{
            this.setState({
                errorMensagem: "Anúncio não publicado :(",

            })
        })
    }

    atualizaStateCampo = (campo) =>{
        this.setState({ [campo.target.name] : campo.target.value })
    }

    pegarArquivo = (event) =>{
        this.setState({foto: event.target.files[0].name}, ()=> {console.log(event.target.foto)})
    }

     salvarFoto = (event) =>{
        event.preventDefault();

       
             var file = event.target.files[0];
            var dados = new FormData();
             if (file) {
                 dados.append("img", file)
             }
            
         FormData.append("files", event.target.files[0]);
        axios.post('http://localhost:5000/v1/product', FormData, {
            headers : {
                 'Content-Type' : 'multipart/form-data'
            }
        })
        .then(resposta =>{
            if (resposta.status === 200) {
                console.log('adicionado')
            }
        })
        .catch(erro => console.log(erro));
    }

    render(){
        return(            
            <div>

               <div>
                    <header className="cabecalho">
                        <div className="recipiente"> 
                            
                         <Link to="/"><img src={logo} alt="logo dos Classificados" /></Link>
                            
                            <nav className="cabecalho-nav">
                                <ul>
                                    <Link to="/"><a>Home</a></Link>
                                    <Link to="/anunciar"><a>Anunciar</a></Link>
                                    <Link className="cabecalho-nav-login" to="login"><a>Login</a>  </Link>
                                </ul>
                            </nav>
                        </div> 
                    </header>      
                </div>
              
                <main>
                    <section className="container-anuncio flex">
                          
                        <div className="img_anuncio"><div className="img_overlay"></div></div>
                        <div className="item_anuncio">
                            <div className="row">

                                <div className="item" id="item_title">
                                    <h2 className="text_anuncio" id="item_description">Anunciar</h2>
                                </div>

                                <form className="list" id="efetuaAnuncio">
                                    <div className="quadro">
                                        <input
                                        id="anuncio_nomeProduto"
                                        className="input_nomeProduto"
                                        type="text"
                                        name="nomeProduto"
                                        value={this.state.nomeProduto}
                                        required onChange={this.atualizaStateCampo}
                                        placeholder="Nome do Produto"
                                        />
                                    </div>
                                   
                                    <div className="quadro">
                                        <input
                                        id="anuncio_descricao"
                                        className="input_descricao"
                                       
                                        type="text"
                                        name="descricao"
                                        value={this.state.descricao}
                                        required onChange={this.atualizaStateCampo}
                                        placeholder="Descrição do Produto"
                                        />
                                    </div>

                                    <div className="quadro">
                                        <input
                                        id="anuncio_telefone"
                                        className="input_telefone"
                                        type="text"
                                        name="telefone"
                                        value={this.state.telefone}
                                        required onChange={this.atualizaStateCampo}
                                        placeholder="Telefone"
                                        />
                                    </div>

                                    <div className="quadro">
                                        <input
                                        id="anuncio_preco"
                                        InputGroupText= "$"
                                        className="input_preco"
                                        type="text" min="0" max="10000"
                                        name="preco"
                                        value={this.state.preco}
                                        required onChange={this.atualizaStateCampo}
                                       
                                        placeholder="Insira o preço" 
                                        aria-label="Amount (to the nearest real)" required
                                        InputGroupText= ".00"                                     
                                        />
                                    </div>

                                    <div className="quadro">
                                    <Form.Group controlId="formFileSm" className="mb-3">
                                        <Form.Label className="image-input"></Form.Label>
                                        <Form.Control type="file" size="sm" />
                                    </Form.Group>
                                    </div>

                                    <div className="item">
                                        <button 
                                        className="btn btn_anuncio" 
                                        id="anuncio_btn" 
                                        type="submit">
                                            Anunciar
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </section>
                </main>

                <Rodape />
            </div>
        );
    }
}

export default Anunciar;