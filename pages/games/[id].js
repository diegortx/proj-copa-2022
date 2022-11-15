import styles from './layout.module.css';
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import { Jogos } from '../../src/utils/config/cfg';
import Router from 'next/router';


function Game({data}){
    const game = data.data;
    return (      
        <>
        <MenuTopo selected="jogos"/>
        <h3 className='text-center'>Jogo ⚽</h3>
        <div className='row'>
        {
            game.map((game,index)=>( 
                <div className={`${game.home_team_en == 'Brazil'? styles.cardGameBrazil : styles.cardGame}`} key={index} onClick={() =>  Router.push(`/games`)}>  
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

export async function getServerSideProps(ctx) {

    const data = await Jogos(ctx.query.id);
    return {
        props: { data },
    }
}
  

export default Game