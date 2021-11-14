import { useEffect, useState } from 'react';
import Lista from './components/listaProdutos';
import NavBar from './components/navbar';
import Footer from './components/footer';
import api from './services/api'; 


function App() {
  const [produtos, setProdutos] = useState([])
  async function Procurar(categoria:string,secao:string,pagina:string){
    try{
      const response=await api.get(`${categoria}/${secao}/${pagina}`);
      const {docs}=response.data;  
      setProdutos(docs);
    }catch(e){
    Procurar('1','1','1');
    }
   

  }


  useEffect(
    () => {
    Procurar('1','1','1');
    },
    
  )
  return (
    <div className="App">
	  <NavBar/>
     <Lista itens={produtos} />
     <Footer/>     
    </div>
  );
}

export default App;
