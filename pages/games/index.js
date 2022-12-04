import styles from './layout.module.css'
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import { Jogos } from '../../src/utils/config/cfg';


export async function getStaticProps() {
    const data = await Jogos();
    return {
        props: { 
            data 
        },
        //Tempo para rodar a consulta statica em segundos
        revalidate: 20,
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
        +data.getFullYear();

    return data;

}

function convertHour(hour){
    let data = new Date(hour);
    data.setHours(data.getHours() -6);

    data =  data.getHours()+':'
    +(data.getMinutes() == 0 ? '00' : data.getMinutes())+':'
    +(data.getSeconds() == 0 ? '00' : data.getSeconds())   
    
    return data;
}

function orderPorDia(data) {
    var dias = [];

    data.forEach(function(val,index) {
        var dia = val.matchday;
        if (dia in dias) {
            dias[dia].push(val);
        } else {
            dias[dia] = new Array(val);
        }
    });

    return dias;
}

function statusGame(status){
    switch(status){
        case 'finished':
            return 'Encerrado';
        case 'notstarted':
            return 'Não Iniciado';
        case 'h1':
            return 'Primeiro Tempo';
        case 'hf':
            return 'Intervalo';
        case 'h2':
            return 'Segundo Tempo';
    }

}

function jogadoresGols(jogadores){

    const jogador = jogadores.split(',');

    return jogador;
}



function Games({data}){
    let games = data.data;
    games.sort(compare);    

    let jogosPorDia = orderPorDia(games);

    return (      
        <>
        <MenuTopo selected="jogos"/>
        <h3 className='text-center'>Jogos 🏆⚽</h3>
        <div className='row text-center'>
        
        {
            jogosPorDia.map((dia, index) => {
            return (
            <div className={`${styles.cardGame}`} key={index}>   
            <div className={`${styles.cardTop}`}>
                <div className='col'>
                    <div>
                        {index}º Dia
                    </div>
                    <div className={`${styles.dateGame}`}>
                        {convertDate(dia[0].local_date)}
                    </div>
                </div>
                {
                    index != 0 ? '':<hr/>                   
                }
            </div>
                {
                    dia.map((jogo, index) => {
                        return (
                            <div className={`row w-100`} key={index}>
                                <div className='col row w-40 '>
                                    <div className='col w-25'>
                                        {
                                            jogo.home_flag == '' ? ''
                                            :
                                            <img src={jogo.home_flag} width='50px' height='30px'/>
                                        }                                       
                                        
                                    </div>
                                    <div className='col w-25'>
                                        <div>
                                        {jogo.home_team_en == '--' ? 'Não selecionado': jogo.home_team_en}
                                        </div>
                                        <div>
                                        {
                                            (jogo.home_scorers == "" || jogo.home_scorers == "null" ) ?
                                                ('')
                                                    :
                                                (
                                                    jogadoresGols(jogo.home_scorers[0]).map((jogador) =>{
                                                        return ( 
                                                            <p className={`${styles.nomeJogadoresGols}`}>
                                                            ⚽ {jogador}
                                                            </p>
                                                        )
                                                    })
                                                )                                        
                                        }    

                                        </div>
                                    </div>

                                </div>
                                <div className='col row w-10 text-center'>
                                    <div className='col'> 
                                        <div>
                                            
                                        {jogo.home_score > jogo.away_score ? '⚽' : ''} {jogo.home_score} x {jogo.away_score}{jogo.home_score < jogo.away_score ? '⚽' : ''}
                                            
                                            
                                        </div>
                                
                                        <div className={`${styles.dataJogo}`}>
                                            {convertHour(jogo.local_date)} -         <strong className={`${jogo.time_elapsed == 'finished' ? styles.finished : '' || jogo.time_elapsed == 'notstarted' ? styles.notstarted : '' || (jogo.time_elapsed != 'notstarted' && jogo.time_elapsed != 'finished') ? styles.h1hfh2 : ''  }`}>{statusGame(jogo.time_elapsed)}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className='col row w-40 '>
                                    <div className='col w-25'>
                                    <div>
                                        {jogo.away_team_en == '--' ? 'Não selecionado': jogo.away_team_en}
                                        </div>
                                        <div>
                                        {
                                            (jogo.away_scorers == "" || jogo.away_scorers == "null" ) ?
                                                ('')
                                                    :
                                                (
                                                    jogadoresGols(jogo.away_scorers[0]).map((jogador) =>{
                                                        return ( 
                                                            <p className={`${styles.nomeJogadoresGols}`}>
                                                            ⚽ {jogador}
                                                            </p>
                                                        )
                                                    })
                                                )                                        
                                        }      

                                        </div>
                                    </div>
                                    <div className='col w-25 '>
                                        {
                                            jogo.away_flag == '' ? ''
                                            :
                                            <img src={jogo.away_flag} width='50px' height='30px'/>
                                        } 
                                       
                                    </div>
                                </div> 
                                <hr/>
                            </div>
                        )
                    })
                }
            </div> 
            );            

        })
      }

      </div>
        </>   
    )

}

export default Games