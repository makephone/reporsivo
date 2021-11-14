import { Key } from "react";
import './index.scss';

interface Listagem {
    itens: any;
}



function ListaProdutos(props:Listagem){




    const productItems = props.itens.map((p: { _id: Key | null | undefined; title:Key | null | undefined;description:Key | null | undefined; url:Key | null | undefined;brand:Key | null | undefined; price:Key | null | undefined; }) => (
        <div className="card" key={p._id}>
            <div className="card-image waves-effect waves-block waves-light ">
                <img alt='im' src={String(p.url)} ></img>
                
            </div>
            <p>{String(p.title).substring(0,20)}</p>
            <p className="text-darken-2 red-text " >{String(p.description)}</p>
            <p className="text-darken-2 detalhamedo" >{p.price}</p>
            <div className="waves-effect waves-light btn grey lighten-5 acabamentoButton">Comprar</div>
        </div>

    ));


   
    return (<div className="listaStylo">{productItems}</div>)
}

export default ListaProdutos;
