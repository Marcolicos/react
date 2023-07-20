import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {
  const [input, setImput]= useState('');
  const[cep,setcep]=useState({});
   async function handsuarch(){
    if(input ===''){
      alert("preencha algum ceep");
      return;
    }
    try{
      const response = await api.get(`${input}/json`)
      console.log(response);
      setcep(response.data);
      setImput("")



    }catch{
      alert("erro ao buscar esse ceep")
      setImput("")

    }
  }
  return (
    <div className="conteiner">
      <h1 className="title"> buscador de Ceep</h1>
      <div className="conteinerImput">
        <input type="text" placeholder="Digite o seu Ceep" value={input} onChange={(e)=>setImput(e.target.value)}></input>
        <button className="buttonSearch" onClick={handsuarch}>
          <FiSearch size={25} color='#FFF'></FiSearch>
        </button>

      </div>
      {Object.keys(cep).length>0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}


    </div>
  );
}

export default App;
