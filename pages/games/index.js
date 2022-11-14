import styles from './layout.module.css'
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import Router from 'next/router';
import { Jogos } from '../../src/utils/config/cfg';


export async function getServerSideProps() {
    const data = await Jogos();
    return {
        props: { data },
    }
}

function Games({data}){

    const games = data.data;

    return (      
        <>
        <MenuTopo/>
        <h3 className='text-center'>Jogos 🏆⚽</h3>
        <div className='row text-center'>
        {
            games.map((game,index)=>( 
                <div className={`${styles.cardGame}`} key={index} onClick={() =>  Router.push(`/games/${game.id}`)}>  
                    <div className='text-center'>
                        <div className={`${styles.teamLine}`}>
                            <img className='m-2' src={game.home_flag} width='15px' height='12px'></img>
                            {game.home_team_en}
                        </div>
                        <strong>X</strong>
                        <div className=''>
                            <img  className='m-2' src={game.away_flag} width='15px' height='12px'></img>
                            <span>{game.away_team_en}</span> 
                        </div>                            
                    </div>              
                  
                    <div className={`text-center ${styles.date}`}>
                        Data e Hora local :  {game.local_date} 
                    </div>
                </div>               
                )
            )
        }
        </div>
        </>   
    )

}

export default Games