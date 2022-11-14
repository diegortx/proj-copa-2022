import styles from './layout.module.css'
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import Router from 'next/router'
import {Selecoes} from '../../src/utils/config/cfg' 

function Teams({data}){

    const teams = data.data;
    return (      
        <>
        <MenuTopo/>
        <h3 className='text-center'>Seleções que estão na Copa 2022 🏆⚽</h3>
        <div className='row'>
        {
            teams.map((team,index)=>( 
                <div className={`col text-center p-2 ${styles.cardBody}`} key={index} onClick={() =>  Router.push(`/teams/${team.id}`)}>
                    <img className={`${styles.images}`} src={team.flag}></img>
                    <p className='mt-3'><strong>{team.name_en}</strong> -  {team.fifa_code}</p>
                    <p>Grupo: {team.groups}</p>                        
                </div>
                )
            )
        }
        </div>
        </>   
    )

}

export async function getServerSideProps() {
   
    const data = await Selecoes();
    return {
        props: { data },
    }
}
  

export default Teams