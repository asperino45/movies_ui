import React from 'react'

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0px 100px' }}>
            <h1 style={{ fontSize: '4em' }}>Avaliação Prática!</h1>
            <p>
                O projeto tem como objetivo ser um catálogo de filmes com informações básicas de título, descrição, diretor e produtor.
            </p>
            <p>
                Sua aplicação deverá conter:
            </p>
            <p>
                O back-end deverá ser uma API em Node que contenha:
            </p>
            <ul style={{ margin: '0px 150px' }}>
                <li>
                    End-point que consulta 50 filmes, extrai as informações de título, banner, descrição, diretor e produtor e salva no banco de dados da aplicação. A API para extração dos filmes é: <a href="https://ghibliapi.herokuapp.com/#tag/Films"> https://ghibliapi.herokuapp.com/#tag/Films </a>
                </li>
                <li>
                    End-point de consulta com paginação de 10 em 10 a todos os filmes que estão no nosso banco de dados.
                </li>
            </ul>

            <br />

            <p>
                O seu front-end deverá ser feito em React e irá conter:
            </p>

            <ul>
                <li>
                    Tela com a exibição dos filmes consultado de forma paginada ao back-end da aplicação;
                </li>
                <li>
                    Botão de atualizar que acessará o end-point que faz a consulta aos 50 filmes e atualiza nosso banco de dados;
                </li>
            </ul>

            <p>
                Requisitos básicos:
            </p>

            <ul>
                <li>
                    Utilizar NodeJs no back-end e React no front-end;
                </li>
                <li>
                    Ter uma documentação da API;
                </li>
                <li>
                    Ter um readme que explique como executar os projetos;
                </li>
                <li>
                    Estar versionado no GitHub
                </li>
            </ul>


            <p>
                Diferenciais:
            </p>

            <ul>
                <li>
                    Ter cobertura de testes;
                </li>
                <li>
                    Boas práticas de desenvolvimento;
                </li>
                <li>
                    Clean Code;
                </li>
                <li>
                    Ter realizado deploy dos projetos.
                </li>
            </ul>
        </div >
    )
}

export default HomePage
