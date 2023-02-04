import { useEffect } from "react";
export default function Contact()
{
    useEffect(function()
    {
        document.title='Contact'
    },[]);

    
    return (
 
        <section className="section">
        <h1 className="section-title">Contact</h1>
        <p className="section-description">Anda dapat menghubungi saya di :</p>
        <ul>
            <li>WA:089798798787</li>
            <li>Email:wendiasdsada@gmail.com</li>
        </ul>
        </section>)

}