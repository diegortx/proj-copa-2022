import styles from './layout.module.css';
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import { Selecoes } from '../../src/utils/config/cfg';
import Router from 'next/router'
import { listPlayers } from '../../src/utils/config/players'


export async function getStaticPaths() {
    return {
      paths: [
        { params: { id:'16'}},
        { params: { id:'9'}},
        { params: { id:'23'}},
        { params: { id:'25'}},
        { params: { id:'32'}},
        { params: { id:'24'}},
        { params: { id:'22'}},
        { params: { id:'18'}},
        { params: { id:'11'}},
        { params: { id:'2'}},
        { params: { id:'5'}},
        { params: { id:'15'}},
        { params: { id:'19'}},
        { params: { id:'28'}},
        { params: { id:'6'}},
        { params: { id:'20'}},
        { params: { id:'13'}},
        { params: { id:'17'}},
        { params: { id:'4'}},
        { params: { id:'14'}},
        { params: { id:'27'}},
        { params: { id:'1'}},
        { params: { id:'10'}},
        { params: { id:'3'}},
        { params: { id:'26'}},
        { params: { id:'30'}},
        { params: { id:'21'}},
        { params: { id:'31'}},
        { params: { id:'12'}},
        { params: { id:'7'}},
        { params: { id:'29'}},
        { params: { id:'8'}}, 
    ],
      fallback: false, // can also be true or 'blocking'
    }
  }

export async function getStaticProps(context) {

    const players = await listPlayers(context.params.id);
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