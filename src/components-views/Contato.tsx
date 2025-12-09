import './css/Menu.css'

function Contato(){
    return(
        <>
            {/** <!-- Seção Contato --> */}
            <section id="contato" className="section">
                <h2>Contato</h2>
                <p>Entre em contato para oportunidades profissionais ou colaborações.</p>
                <a className="contact-button" href="mailto:email@exemplo.com">Enviar E-mail</a>
            </section>
        </>
    )
}
export default Contato;