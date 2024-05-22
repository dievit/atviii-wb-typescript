import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
    tema: string;
    seletorView: (tela: string, evento?: React.MouseEvent) => void;
}

const FormularioCadastroProduto: React.FC<Props> = ({ tema, seletorView }) => {
    useEffect(() => {
        setTimeout(() => {
            const elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
        }, 0);
    }, []);

    let estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="row">
            <div className="center">
                <h3>Cadastro de Produtos</h3>
            </div>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" />
                        <label htmlFor="last_name">Categoria</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nomeSocial" type="text" className="validate" />
                        <label htmlFor="nomeSocial">Preço</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="cpf" type="text" className="validate" />
                        <label htmlFor="cpf">Custo</label>
                    </div>
                </div>
                <div className="row">
                    <div className="center col s12">
                        <button className="btn waves-effect waves-light cyan darken-1 mr-8" type="submit" name="action">Cadastrar
                            <i className="material-icons right">person_add</i>
                        </button>
                        <button className="btn waves-effect waves-light cyan darken-1 ml-8" type="button" onClick={(e) => seletorView('Produtos', e)}>Voltar
                            <i className="material-icons right">arrow_back</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormularioCadastroProduto;
