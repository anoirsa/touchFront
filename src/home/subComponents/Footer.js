import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div className="footerDiv">

            <div className="logoDiv">
                <i className="fas fa-desktop"
                  style={{fontSize:"10rem"}} ></i> 
                  <div className="divine">
                  <h3>Touch AND GO</h3>
                      <p>タッチアンドゴー</p>
                      <p>kosketa ja mene</p>
                      <p >röra och gå</p>
                </div>
                      
            </div>
            <div className="infoDiv"> <table>
                                   
                      <tr><th> <i className="fas fa-comments"></i></th> <th><a href="#">| Send a feedback |</a></th></tr>
                      <tr><th> <i className="fas fa-handshake"></i></th> <th><a href="#">| Our partners |</a></th></tr>
                      <tr><th> <i className="fas fa-info"></i></th> <th><a href="#">| More information |</a></th></tr>
                                    
                                     </table>
                      <p><i className="fas fa-copyright"></i> Anouar productions 2021</p>
                                       </div>
            


        </div>
    )
}

export default Footer;
