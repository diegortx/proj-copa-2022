import styles from './layout.module.css'
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import Router from 'next/router'
import {Selecoes} from '../../src/utils/config/cfg' 

export async function getStaticProps() {   
    const data = await Selecoes();
    return {
        props: { data },
    }
}

function compare(a,b) {
    if (a.name_en < b.name_en)
       return -1;
    if (a.name_en > b.name_en)
      return 1;
    return 0;
  }

function Teams({data}){

    const teams = data.data;
    teams.sort(compare);

    return (      
        <>
        <MenuTopo selected="selecoes"/>
        <h3 className='text-center'>Seleções da Copa 2022 🏆⚽</h3>
        <div className='row'>
        {
            teams.map((team,index)=>( 
                <div className={`col text-center p-2 ${styles.cardBody}`} key={index} onClick={() =>  Router.push(`/teams/${team.id}`)}>
                    <img className={`${styles.images}`} src={team.flag}></img>
                    <p className='mt-3'><strong>{team.name_en} </strong> -  {team.fifa_code}</p>
                    <p>Grupo: {team.groups}</p>                        
                </div>
                )
            )
        }
        </div>
        </>   
    )

}

export default Teams