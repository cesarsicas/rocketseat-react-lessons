import { RepositoryItem } from "./RepositoryItem";

const repoObj = {
    name : 'unform',
    description: 'Forms in react',
    url: 'http://hellow'

}

export  function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository = {repoObj} />
                <RepositoryItem repository = {repoObj}/>
                <RepositoryItem repository = {repoObj}/>
                <RepositoryItem repository = {repoObj}/>
                <RepositoryItem repository = {repoObj}/>
            </ul>
        </section>
    );

}