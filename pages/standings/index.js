import styles from './layout.module.css'
import MenuTopo from '../../src/components/MenuTopo/MenuTopo';
import {Classificacao} from '../../src/utils/config/cfg';

function Standings({data}){

    const standings = data.data;

    return (      
        <>
        <MenuTopo/>
        <h3 className='text-center'>Grupo das seleções 🏆⚽</h3>
        <div className='row'>
        {
            standings.map((standing,index)=>( 
               <div className='col mt-3' key={index}>
               
                
                <table key={index} class={`table table-hover caption-top text-center ${styles.tableBody}`}>
                    <caption><div className='text-center'> <strong>Grupo - {standing.group}</strong></div></caption>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Bandeira</th>
                                    <th>Seleção</th>  
                                    <th>Pontos</th>  
                                </tr>                            
                            </thead>

                {
                    standing.teams.map((team,index)=>(
                       
                            <tbody key={index}>
                                <tr>
                                    <th>#</th>
                                    <th><img src={team.flag} width='50px' height='30px'></img></th>
                                    <th>{team.name_en}</th>
                                    <th>{team.pts}</th>
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

export async function getServerSideProps() {
 
    const data = await Classificacao();
    return {
        props: { data },
    }
}
  

export default Standings