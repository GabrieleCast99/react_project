import { NavBar } from "../NavBar/NavBar"
import { useOutlet } from "react-router-dom"

export function Layout(){

    const outlet = useOutlet();

    return (
    <>
    <NavBar/>
    {outlet}
    </>
    )
}