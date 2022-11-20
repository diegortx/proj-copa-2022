import styles from './layout.module.css'
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import {Classificacao} from '../../src/utils/config/cfg';

function Standings({data}){

    const standings = data.data;

    return (      
        <>
        <MenuTopo selected="classificacao"/>
        <h3 className='text-center'>Grupo das seleções 🏆⚽</h3>
        <div className='row'>
        {
            standings.map((standing,index)=>( 
               <div className='col mt-3' key={index}>
               
                
                <table key={index} class={`table table-hover text-center ${styles.tableBody}`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>G-{standing.group}</th>
                                    <th>Seleção</th>  
                                    <th>Pontos</th> 
                                    <th>Jogos</th> 
                                    <th>Win</th> 
                                    <th>Derrotas</th>
                                    <th>Gol</th>
                                    <th>Gol Contra</th>
                                </tr>                            
                            </thead>

                {
                    standing.teams.map((team,index)=>(
                       
                            <tbody key={index}>
                                <tr>
                                    <th>{index+1}</th>
                                    <th><img src={team.flag} className={`${styles.image}`}></img></th>
                                    <th>{team.name_en}</th>
                                    <th className={`${team.pts == 0 ? styles.thControl : ''}`}>{team.pts}</th>
                                    <th className={`${team.mp == 0 ? styles.thControl : ''}`}>{team.mp}</th>
                                    <th className={`${team.w == 0 ? styles.thControl : ''}`}>{team.w}</th>
                                    <th className={`${team.l == 0 ? styles.thControl : ''}`}>{team.l}</th>
                                    <th className={`${team.gf == 0 ? styles.thControl : ''}`}>{team.gf}</th>
                                    <th className={`${team.ga == 0 ? styles.thControl : ''}`}>{team.ga}</th>
                                </tr>
                            </tbody>
                       

                    ))
                } 
                </table>
                </div>               
                )
            )
        }
        </div>
        </>   
    )

}

export async function getStaticProps() {
 
    const data = await Classificacao();
    return {
        props: { data },
        revalidate: 30,
    }
}
  

export default Standings