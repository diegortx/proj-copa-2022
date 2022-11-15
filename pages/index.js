import MenuTopo from '../src/components/MenuTopo/MenuTopo'
import styles from './layout.module.css'


export default function Home(){

    return (
    <>
        <MenuTopo selected="home"/>     
        <div className={`mt-4 text-center ${styles.hbody}`}>
            <div className={`mt-4 ${styles.line} ${styles.typingAnimation}`}>
                <p>
                    Olá que incrível ter você aqui! 😄
                </p>
            </div>
            <div className={`mt-4 ${styles.line2} ${styles.typingAnimation2}`}>
                <p>
                    Fique a vontade e use sem moderação 😎✌️
                </p>
            </div>
            
       
        </div>   
    </>
    )
}