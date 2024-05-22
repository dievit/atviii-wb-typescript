import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import TerminalDeVendas from "./formularioVenda";
import PaginaInicial from "./inicial";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProdutos";

type State = {
    tela: string;
}

const Roteador: React.FC = () => {
    const [tela, setTela] = useState<string>(() => {
        const telaSalva = localStorage.getItem("telaAtual");
        return telaSalva || "Home";
    });

    const selecionarView = (novaTela: string, evento?: React.MouseEvent) => {
        if (evento) evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
        localStorage.setItem("telaAtual", novaTela);
    }

    return (
        <>
            <BarraNavegacao seletorView={selecionarView} tema="cyan darken-1" botoes={[
                { titulo: "Home" },
                { titulo: "Clientes" },
                { titulo: "Produtos" },
                { titulo: "Terminal de Vendas" }
            ]} />
            {tela === 'Home' && <PaginaInicial tema="cyan darken-1" />}
            {tela === 'Clientes' && <ListaCliente tema="cyan darken-1" seletorView={selecionarView} />}
            {tela === 'Cadastrar Cliente' && <FormularioCadastroCliente tema="cyan darken-1" seletorView={selecionarView} />}
            {tela === 'Produtos' && <ListaProdutos tema="cyan darken-1" seletorView={selecionarView} />}
            {tela === 'Cadastrar Produto' && <FormularioCadastroProduto tema="cyan darken-1" seletorView={selecionarView} />}
            {tela === 'Terminal de Vendas' && <TerminalDeVendas tema="cyan darken-1" seletorView={selecionarView} />}
        </>
    );
}

export default Roteador;
