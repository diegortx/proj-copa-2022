import MenuTopo from '../src/components/MenuTopo/MenuTopo'
import styles from './layout.module.css'


export default function Home(){

    return (
    <>
        <MenuTopo selected="home"/>     
        <div className={`text-center ${styles.hbody}`}>
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

            <div className={`mt-4 ${styles.line3} ${styles.typingAnimation3}`}>
                <p>
                    Já temos a campeã 2022!!!
                </p>
            </div>

            <div className={`mt-4 ${styles.line4} ${styles.typingAnimation4}`}>
                <p>
                    Argentina  🇦🇷 🏆
                </p>
            </div>

            <div className={`mt-4 ${styles.line5} ${styles.typingAnimation5}`}>
                <p>
                    Muito Obrigado!!! 😜
                </p>
            </div>
            
       
        </div>   
    </>
    )
}