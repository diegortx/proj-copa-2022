import Link from "next/link"
import styles from "./layout.module.css"

export default function MenuTopo(){
    return (
        <div className={`${styles.body} mb-5`}>
            <Link href="/">Home</Link>
            <Link href="/games">Jogos</Link>
            <Link href="/teams">Seleções</Link>
            <Link href="/standings">Classificação</Link>
        </div>
    )
}