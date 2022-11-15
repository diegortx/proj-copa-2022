import styles from './layout.module.css';
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import { Selecoes } from '../../src/utils/config/cfg';
import Router from 'next/router'
import { listPlayers } from '../../src/utils/config/players'


export async function getStaticPaths() {

    //Pegando todas selecoes
    const selecoes = await Selecoes();

    //Criando o path a partir de todos id das slelecoes
    const paths = selecoes.data.map((selecao) =>{
        return { params : { id : `${selecao.id}`}}
    });

    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

export async function getStaticProps(context) {

    //Pegando os jogadores de cada selecao por Id
    const players = await listPlayers(context.params.id);

    //Selecionando o perfil da selecao por id
    const data = await Selecoes(context.params.id);
    
    return {
        props: { 
            data,
            players      
        },
    }
}


function Teams({data,players}){
    const teams = data.data;
    return (      
        <>
        <MenuTopo selected="selecoes"/>
        <h3 className='text-center'>Seleção ⚽</h3>
        <div className='row'>
            {
                
                teams.map((team,index)=>( 
                    <div className={`col text-center p-2 ${styles.cardBody}`} key={index} onClick={() =>  Router.push(`/teams`)} >
                        <img className={`${styles.images}`} src={team.flag}></img>
                        <p className='mt-3'><strong>{team.name_en}</strong> -  {team.fifa_code}</p>
                        <p>Grupo: {team.groups}</p>    
                        
                        <hr/>
                        <div><strong>Goleiros</strong></div>
                        <div>{players.Goleiros}</div>
                        <hr/>
                        <div><strong>Defensores</strong></div>
                        <div>{players.Defensores}</div>
                        <hr/>
                        <div><strong>Meio Campistas</strong></div>
                        <div>{players.MeioCampistas}</div>
                        <hr/>
                        <div><strong>Atacantes</strong></div>
                        <div>{players.Atacantes}</div>
                        <hr/>
                    </div>
                    )
                )
                
            }
                        
        </div>
        </>   
    )

}


  

export default Teams