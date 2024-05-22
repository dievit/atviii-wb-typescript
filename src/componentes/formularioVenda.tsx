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

    return (
        <div className="row">
            <div className="center">
                <h3>Terminal de Vendas</h3>
            </div>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <select id="cod cliente">
                            <option value="" disabled selected>Escolha uma opção</option>
                            <option value="1">ID: 1 - João da Silva - Telefone: 11789653214</option>
                            <option value="2">ID: 2 - Maria Oliveira - Telefone: 11987654321</option>
                            <option value="3">ID: 3 - Pedro Santos - Telefone: 11876543210</option>
                            <option value="4">ID: 4 - Ana Souza - Telefone: 11765432109</option>
                            <option value="5">ID: 5 - Lucas Pereira - Telefone: 11654321098</option>
                            <option value="6">ID: 6 - Carla Lima - Telefone: 11543210987</option>
                            <option value="7">ID: 7 - Marcos Costa - Telefone: 11432109876</option>
                            <option value="8">ID: 8 - Juliana Almeida - Telefone: 11321098765</option>
                            <option value="9">ID: 9 - Rafael Fernandes - Telefone: 11210987654</option>
                            <option value="10">ID: 10 - Fernanda Gomes - Telefone: 11109876543</option>
                            <option value="11">ID: 11 - Thiago Silva - Telefone: 11098765432</option>
                            <option value="12">ID: 12 - Roberta Santos - Telefone: 11988776655</option>
                            <option value="13">ID: 13 - Diego Oliveira - Telefone: 11877665544</option>
                            <option value="14">ID: 14 - Camila Rodrigues - Telefone: 11766554433</option>
                            <option value="15">ID: 15 - José Pereira - Telefone: 11655443322</option>
                            <option value="16">ID: 16 - Sandra Alves - Telefone: 11544332211</option>
                            <option value="17">ID: 17 - Paulo Lima - Telefone: 11433221100</option>
                            <option value="18">ID: 18 - Mariana Oliveira - Telefone: 11322110099</option>
                            <option value="19">ID: 19 - Carlos Silva - Telefone: 11211000988</option>
                            <option value="20">ID: 20 - Aline Souza - Telefone: 11199988877</option>
                            <option value="21">ID: 21 - Maria Oliveira - Telefone: 11987654321</option>
                            <option value="22">ID: 22 - Pedro Santos - Telefone: 11876543210</option>
                            <option value="23">ID: 23 - Ana Souza - Telefone: 11765432109</option>
                            <option value="24">ID: 24 - Lucas Pereira - Telefone: 11654321098</option>
                            <option value="25">ID: 25 - Carla Lima - Telefone: 11543210987</option>
                            <option value="26">ID: 26 - Marcos Costa - Telefone: 11432109876</option>
                            <option value="27">ID: 27 - Juliana Almeida - Telefone: 11321098765</option>
                            <option value="28">ID: 28 - Rafael Fernandes - Telefone: 11210987654</option>
                            <option value="29">ID: 29 - Fernanda Gomes - Telefone: 11109876543</option>
                            <option value="30">ID: 30 - Thiago Silva - Telefone: 11098765432</option>
                        </select>
                        <label htmlFor="cod cliente">Cód Cliente</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <select id="cod produto">
                            <option value="" disabled selected>Escolha uma opção</option>
                            <option value="1">ID: 1 - Gel para cabelo n5 - Categoria: Cosméticos - Preço: 10.99</option>
                            <option value="2">ID: 2 - Shampoo Anticaspa - Categoria: Cabelo - Preço: 12.99</option>
                            <option value="3">ID: 3 - Condicionador Hidratante - Categoria: Cabelo - Preço: 9.99</option>
                            <option value="4">ID: 4 - Gel Fixador - Categoria: Cabelo - Preço: 7.49</option>
                            <option value="5">ID: 5 - Creme para Barbear - Categoria: Barba - Preço: 15.99</option>
                            <option value="6">ID: 6 - Óleo para Barba - Categoria: Barba - Preço: 11.49</option>
                            <option value="7">ID: 7 - Pente de Madeira - Categoria: Acessório - Preço: 5.99</option>
                            <option value="8">ID: 8 - Cera Modeladora - Categoria: Cabelo - Preço: 8.99</option>
                            <option value="9">ID: 9 - Tinta para Cabelo - Categoria: Cabelo - Preço: 14.99</option>
                            <option value="10">ID: 10 - Loção Pós-barba - Categoria: Barba - Preço: 9.49</option>
                            <option value="11">ID: 11 - Secador de Cabelo - Categoria: Acessório - Preço: 49.99</option>
                            <option value="12">ID: 12 - Escova de Cabelo - Categoria: Acessório - Preço: 6.99</option>
                            <option value="13">ID: 13 - Gel Esfoliante Facial - Categoria: Rosto - Preço: 11.99</option>
                            <option value="14">ID: 14 - Máscara Facial - Categoria: Rosto - Preço: 7.99</option>
                            <option value="15">ID: 15 - Creme Redutor de Medidas - Categoria: Corpo - Preço: 19.99</option>
                            <option value="16">ID: 16 - Esfoliante Corporal - Categoria: Corpo - Preço: 8.49</option>
                            <option value="17">ID: 17 - Spray Fixador de Maquiagem - Categoria: Maquiagem - Preço: 12.49</option>
                            <option value="18">ID: 18 - Delineador de Olhos - Categoria: Maquiagem - Preço: 9.99</option>
                            <option value="19">ID: 19 - Removedor de Esmalte - Categoria: Unhas - Preço: 5.49</option>
                            <option value="20">ID: 20 - Creme Hidratante para Mãos - Categoria: Cuidados Pessoais - Preço: 6.99</option>
                        </select>
                        <label htmlFor="cod produto">Cód Produto</label>
                        <div className="input-field col s12">
                            <input id="quantidade" type="text" className="validate" />
                            <label htmlFor="quantidade">Insira a quantidade</label>
                        </div>
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
