import Link from "next/link"
import styles from "./layout.module.css"

export default function MenuTopo({selected}){
    return (
        <div className={`${styles.body} mb-5`}>
            <div className={`${selected == 'home'? styles.menuSelecionado : styles.menu}`}>
                <Link href="/">{selected == 'home'?  '😎': ''} Home</Link>
            </div>
            <div className={`${selected == 'jogos'? styles.menuSelecionado : styles.menu}`}>
                <Link href="/games">{selected == 'jogos'?  '⚽': ''} Jogos</Link>
            </div>
            <div className={`${selected == 'selecoes'? styles.menuSelecionado : styles.menu}`}>
                <Link href="/teams">{selected == 'selecoes'?  '🇧🇷': ''} Seleções</Link>
            </div>
            <div className={`${selected == 'classificacao'? styles.menuSelecionado : styles.menu}`}>
                <Link href="/standings">{selected == 'classificacao'?  '🏆': ''} Classificação</Link>
            </div>
        </div>
    )
}