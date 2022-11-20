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
                                    <th>{team.pts}</th>
                                    <th>{team.mp}</th>
                                    <th>{team.w}</th>
                                    <th>{team.l}</th>
                                    <th>{team.gf}</th>
                                    <th>{team.ga}</th>
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