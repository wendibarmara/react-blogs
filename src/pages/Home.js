import { useEffect } from "react";
export default function Home()
{
    useEffect(function()
    {
        document.title='Home'
    },[]);
    return (
        <section className="section">
        <h1 className="section-title">Selamat datang di Website React JS</h1>
        <p className="section-description">Halo semua,ini website aku yang terbaru</p>
        
        </section>
        )

}