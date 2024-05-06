import { useParams } from "react-router-dom"

export function Course() {
    const { email } = useParams();

    return (
        <div>sono il corso numero n. {email} </div>
    )
}