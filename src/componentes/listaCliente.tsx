import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
    tema: string;
    seletorView: (tela: string, evento?: React.MouseEvent) => void;
}

const ListaCliente: React.FC<Props> = ({ tema, seletorView }) => {
    useEffect(() => {
        setTimeout(() => {
            const elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 0);
    }, []);

    const estiloBotao = `btn waves-effect waves-light ${tema}`;
    const clientes = [
        { id: 1, nome: "Ana Souza", cpf: "111.222.333-44", telefone: "(11) 99999-1111", genero: "F", dataCadastro: "2024-05-06" },
        { id: 2, nome: "Carlos Oliveira", cpf: "222.333.444-55", telefone: "(22) 88888-2222", genero: "M", dataCadastro: "2024-05-06" },
        { id: 3, nome: "Amanda Silva", cpf: "333.444.555-66", telefone: "(33) 77777-3333", genero: "F", dataCadastro: "2024-05-06" },
        { id: 4, nome: "João Santos", cpf: "444.555.666-77", telefone: "(44) 66666-4444", genero: "M", dataCadastro: "2024-05-06" },
        { id: 5, nome: "Maria Costa", cpf: "555.666.777-88", telefone: "(55) 55555-5555", genero: "F", dataCadastro: "2024-05-06" },
    ];

    return (
        <div>
            <div className="center">
                <h3>Clientes</h3>
            </div>
            <ul className='collapsible'>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente {cliente.id}</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID:</strong> {cliente.id}<br />
                                        <strong>Nome:</strong> {cliente.nome}<br />
                                        <strong>CPF:</strong> {cliente.cpf}<br />
                                        <strong>Telefone:</strong> {cliente.telefone}<br />
                                        <strong>Gênero:</strong> {cliente.genero}<br />
                                        <strong>Data de Cadastro:</strong> {cliente.dataCadastro}<br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className={estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>
                                        Editar
                                        <i className="material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <button className="btn-floating btn-large waves-effect waves-light cyan darken-1" onClick={(e) => seletorView('Cadastrar Cliente', e)}>
                    <i className="material-icons right mt-8">person_add</i>
                </button>
            </div>
        </div>
    );
}

export default ListaCliente;
