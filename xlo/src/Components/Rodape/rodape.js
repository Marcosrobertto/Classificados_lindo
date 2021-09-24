import React from 'react';

import logo from '../../Assets/img/Logo-Branca.png'

export default function Rodape(){
    return(
        <footer className="rodapePrincipal">
            <section className="rodapePrincipal-patrocinadores">
            <div className="container">
                <img src={logo} className="img-fotter" alt="logo da Classificados" />
                <p className="txt-rodape">© Copyright by XLO</p>
            </div>
            </section>
        </footer>
    );
}