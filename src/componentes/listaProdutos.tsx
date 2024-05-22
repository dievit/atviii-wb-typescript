import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
    tema: string;
    seletorView: (tela: string, evento?: React.MouseEvent) => void;
}

const ListaProdutos: React.FC<Props> = ({ tema, seletorView }) => {
    useEffect(() => {
        setTimeout(() => {
            const elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 0);
    }, []);

    const estiloBotao = `btn waves-effect waves-light ${tema}`;
    const produtos = [
        { id: 1, nome: "Produto1", categoria: "Teste", preco: "150,00", custo: "70,00" },
        { id: 2, nome: "Produto2", categoria: "Teste", preco: "80,00", custo: "30,00" },
        { id: 3, nome: "Produto3", categoria: "Teste", preco: "50,00", custo: "20,00" },
        { id: 4, nome: "Produto4", categoria: "Teste", preco: "30,00", custo: "10,00" },
        { id: 5, nome: "Produto5", categoria: "Teste", preco: "20,00", custo: "5,00" }
    ];

    return (
        <>
            <div>
                <div className="center">
                    <h3>Produtos</h3>
                </div>
                <ul className="collapsible">
                    {produtos.map(produto => (
                        <li key={produto.id}>
                            <div className="collapsible-header"><i className="material-icons">crop_7_5</i><strong>Produto {produto.id}</strong></div>
                            <div className="collapsible-body">
                                <div className="row">
                                    <div className="col s6">
                                        <span>
                                            <strong>ID: </strong>{produto.id} <br />
                                            <strong>Nome: </strong>{produto.nome} <br />
                                            <strong>Categoria: </strong>{produto.categoria} <br />
                                            <strong>Preço: R$</strong>{produto.preco} <br />
                                            <strong>Custo: R$</strong>{produto.custo} <br />
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
                    <button className="btn-floating btn-large waves-effect waves-light cyan darken-1" onClick={(e) => seletorView('Cadastrar Produto', e)}>
                        <i className="material-icons right mt-8">person_add</i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;
