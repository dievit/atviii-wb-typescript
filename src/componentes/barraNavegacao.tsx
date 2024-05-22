import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import '../styles/custom-style.css';

type Props = {
    tema: string,
    botoes: { titulo: string }[],
    seletorView: (titulo: string, evento?: React.MouseEvent) => void
}

const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {
    useEffect(() => {
        setTimeout(() => {
            const elemsSidenav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elemsSidenav);
        }, 0);
    }, []);

    let estilo = `${tema}`;

    return (
        <>
            <div className="navbar-fixed">
                <nav className={estilo}>
                    <div className="nav-wrapper">
                        <a className="brand-logo">WorldBeauty</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {/* Botões para as páginas */}
                            {botoes.map((botao) => (
                                <li key={botao.titulo}>
                                    <a onClick={(e) => seletorView(botao.titulo, e)}>{botao.titulo}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Sidenav para dispositivos móveis */}
            <ul className="sidenav" id="mobile-demo">
                {botoes.map((botao) => (
                    <li key={botao.titulo}>
                        <a onClick={(e) => seletorView(botao.titulo, e)}>{botao.titulo}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default BarraNavegacao;
