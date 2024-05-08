import myStyle from"./Contact.module.css";

import { Contactform } from "../../components/ContactForm/ContactForm";
export function Contacts(){

    return(
    <div className={myStyle.backgroundColore}>

    <Contactform/>

    </div>
    )

}