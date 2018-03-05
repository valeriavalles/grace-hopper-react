import React from 'react'
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class Cont extends React.Component{
    render(){
        return(
                <div className="cont">
                 <h3>Carrera</h3>
                    <ol>
                        <li>Estudios</li>
                        <li>Ingreso en la armada</li>
                        <li>Cobol</li>
                         <li>Reingreso en la armada</li>
                    </ol>
      
                <h2>Frase</h2>
                <blockquote
                 cite="http://www.mundifrases.com/frases-de/grace-murray-hopper/">“Un barco en el
                     puerto es seguro, pero no es para eso para lo que se construyen las naves. Navegad en el
                    mar y haced cosas nuevas.”
                </blockquote>
                </div>   
        )
    }
}
export default Cont 