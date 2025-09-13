import { Outlet } from "react-router-dom"
import { Header } from '../../components/Header/index'

export function Layout(){
    return(
        <>
            <Header />
            <Outlet/>
            <br /> <br />
            <footer>
                <span>
                    Todos os direitos reservados @2025
                </span>
            </footer>
        </>
    )
}