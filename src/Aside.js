import React from 'react'
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';


class Aside extends React.Component{
    render(){
        return(
            <aside className="summary">
                <table className="summary-table">
                     <thead>
                    <tr>
                        <th colspan="2">Grace Murray Hopper</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td colspan="2">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg" alt="Grace Hopper"/>
                        <p>	9 de diciembre de 1906 Nueva York</p>
                    </td>
                    </tr>
                    <tr>
                    <th>Rango</th>
                  < td>"Rear admiral"</td>
                 </tr>
                <tr>
                  <th>Nacionalidad</th>
                  <td>Estadounidense</td>
                </tr>
                <tr>
                  <th>Allegiance</th>
                  <td><img className="banderita" src="http://cdn2.bigcommerce.com/server1700/01wp0ckw/products/2624/images/7707/LOGO_LOCO_004__83210.1497977896.500.500.png?c=2" alt="EE.UU"/> United States of America</td>
                </tr>
                 </tbody>
                </table>
            </aside> 
        )
    }
}
export default Aside 