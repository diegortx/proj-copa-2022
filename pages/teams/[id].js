import styles from './layout.module.css';
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import { Selecoes } from '../../src/utils/config/cfg';
import Router from 'next/router'
import { listPlayers } from '../../src/utils/config/players'


function Teams({data,players}){
    const teams = data.data;
    return (      
        <>
        <MenuTopo/>
        <h3 className='text-center'>Seleção ⚽</h3>
        <div className='row'>
            {
                teams.map((team,index)=>( 
                    <div className={`col text-center p-2 ${styles.cardBody}`} key={index} onClick={() =>  Router.push(`/teams`)} >
                        <img className={`${styles.images}`} src={team.flag}></img>
                        <p className='mt-3'><strong>{team.name_en}</strong> -  {team.fifa_code}</p>
                        <p>Grupo: {team.groups}</p>    
                        
                        <hr/>
                        <div>Goleiros</div>
                        <div>{players.Goleiros}</div>
                        <hr/>
                        <div>Defensores</div>
                        <div>{players.Defensores}</div>
                        <hr/>
                        <div>Meio Campistas</div>
                        <div>{players.MeioCampistas}</div>
                        <hr/>
                        <div>Atacantes</div>
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

export async function getServerSideProps(ctx) {

    const id = await ctx.query.id;

    const players = await listPlayers(id);

    const data = await Selecoes(id);

    return {
        props: { 
            data,
            players       
        },
    }
}
  

export default Teams