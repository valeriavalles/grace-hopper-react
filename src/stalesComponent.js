import React from 'react'
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class Main extends React.Component{
    render(){
        return(
            <div className="biografia" >
                <h1>grace Hopper</h1>
                <hr></hr>
                <div >
                <p ><strong>Grace Murray Hopper</strong>(Nueva York, 9 de diciembre de 1906 - Condado de 
                Arlington, 1 de enero de 1992) fue una científica de la computación y militar 
               estadounidense con grado de contraalmirante. Es pionera en el mundo de 
               la <a href="https://es.wikipedia.org/wiki/Ciencias_de_la_computaci%C3%B3n" target="_blank">ciencias
               de la computación</a> y fue la primera programadora que
               utilizó el Mark I. Entre las décadas de los 50 y 60 desarrolló el primer compilador para un lenguaje
               de programación así como también propició métodos de validación.</p>
               <p>Popularizó la idea de una máquina independiente de los lenguajes de programación, lo que derivó en el desarrollo de COBOL, un lenguaje de alto nivel de programación que aún se utiliza. Hopper intentó enlistarse en la marina estadounidense durante la Segunda Guerra Mundial, pero debió unirse a las reservas de
                 la armada porque era adulta para sus 34 años. Era conocida por sus amistades como Amazing Grace.</p>
                </div> 
                 
            </div>  
        )
    }
}
export default Main 

