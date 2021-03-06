import { RepositoryItem } from "./RepositoryItem";
import {useState, useEffect}  from 'react';

//https://api.github.com/orgs/rocketseat/repos

/*
const repoObj = {
    name : 'unform',
    description: 'Forms in react',
    url: 'http://hellow'

}
*/

export  function RepositoryList(){

    interface Repository{
        name:string;
        description:string;
        html_url:string;
    }

    const [repositories, setRepositories] = useState<Repository[]>([]);

    //By using this Hook, you tell React that your component needs to do something after render
    //ATENÇÃO pra sempre usar um segundo parametro pra evitar looping
    //ATENÇÃO para não atualizar a mesma variavel dentro do useEffect, pra evitar looping


    useEffect( ()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data)) //salva data nariavel useState
    },[]);


    //quando a variavel é atualizada, o componentetodo é atualizado com novosvalores
    
    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return  <RepositoryItem key={repository.name} repository = {repository} />

                })}

            </ul>
        </section>
    );

}