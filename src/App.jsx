import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'
import './styles/repositories.scss'

export function App(){
    //throw Error('E agora José?');
    //return <h1>Hellow React</h1>
    return (
        <> //this is valid, is called Fragment on react
     
            <RepositoryList/>
                    </>
        
        );
}