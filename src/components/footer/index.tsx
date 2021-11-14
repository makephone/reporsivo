import './index.scss';

function Footer(){
   
   
    return ( <footer className="page-footer grey lighten-3">
    <div className="container grey lighten-3">
          
          
          <div className="row">
         <h5 className="black-text center">ASSINE NOSSA NEWSLETTER</h5>
          <p className="black-text text-lighten-4 center">Fique por dentro das novidades e receba 10% de Desconto na primeira compra.</p>
          <div>
           

          <form className="row alinhamento">
          <input placeholder="Seu nome" className="black-text" type="text" ></input>
          <input placeholder="Seu Email" className="black-text" type="email"></input>
          <input className="btn waves-effect waves-light white black-text t" type="submit"/>
           </form>
          </div>

          
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2021 Copyright 
      <div className="grey-text text-lighten-4 right" >Tiago Carvalho</div>
      </div>
    </div>
  </footer>)
}

export default Footer;
