import styles from './layout.module.css'
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import Router from 'next/router';
import { Jogos } from '../../src/utils/config/cfg';


export async function getStaticProps() {
    const data = await Jogos();
    return {
        props: { data },
    }
}

function compare(a,b) {
    if (a.local_date < b.local_date)
       return -1;
    if (a.local_date > b.local_date)
      return 1;
    return 0;
  }

function convertDate(date){
    let data = new Date(date);

    data.setHours(data.getHours() - 6);
    data.setMonth(data.getMonth() );

    data = 
        data.getDate()+'/'
        +(data.getMonth() + 1)+'/'
        +data.getFullYear()+' '
        +data.getHours()+':'
        +(data.getMinutes() == 0 ? '00' : data.getMinutes())+':'
        +(data.getSeconds() == 0 ? '00' : data.getSeconds());

    return data;

}

function Games({data}){

    const games = data.data;
    games.sort(compare);

    return (      
        <>
        <MenuTopo/>
        <h3 className='text-center'>Jogos 🏆⚽</h3>
        <div className='row text-center'>
        {
            games.map((game,index)=>( 
                <div className={`${game.home_team_en == 'Brazil'? styles.cardGameBrazil : styles.cardGame}`} key={index} >  
                    <div className='text-center'>
                        <div className={`${styles.teamLine}`}>
                            <img className='m-2' src={game.home_flag} width='15px' height='12px'></img>
                            {game.home_team_en}
                            
                        </div>
                        <strong> ⚽ {game.home_score} X {game.away_score}</strong>
                        <div className=''>
                            <img  className='m-2' src={game.away_flag} width='15px' height='12px'></img>
                            <span>{game.away_team_en}</span> 
                        </div>                            
                    </div>              
                  
                    <div className={`text-center ${styles.date}`}>
                        Data e Hora de Brasilia :   <strong>{convertDate(game.local_date)}</strong>  - {game.matchday}º Dia
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