export default function Referencias() {
  return (
    <section>
      <div>
          <section id="special" className="flex flex-col items-start bg-black text-white h-lvh w-10/12 p-8 gap-y-4 z-10 fixed hidden">
            <button onClick={hideMenu}>x</button>
            <hr />
            <a href="/"><h3>Inicio</h3></a>
            <a href="/Produto"><h3>Produto</h3></a>
            <a href="/Materiais"><h3>Materiais</h3></a>
            <a href="/Referencias"><h3>Referências</h3></a>
            <a href="/Sobre"><h3>Sobre nós</h3></a>
          </section>    
        </div>
        
        <div className="w-full fixed bg-black flex justify-center items-center mb-24">
            <a href=""><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20"/></a>
        </div>

        <button onClick={showMenu}><img src="/Menu.svg" alt="ícone de menu" className="fixed ms-5" /></button>

        <div className="pt-12"></div>

        <div className="bg-gray text-xl text-white p-14 text-justify flex flex-col gap-8">
            <h1 className="text-5xl text-center font-sans font-bold">Fonte de estudos do projeto</h1>

            <p className="font-light">- MATURAÇÃO DRY-AGED: UMA REVISÃO DAS CARACTERÍSTICAS E PARÂMETROS ENVOLVIDOS – Tecal 2022</p>
            
            <p className="font-light">- CARACTERÍSTICAS DA CARNE BUBALINA E BENEFÍCIOS DA MATURAÇÃO SOBRE A SUA QUALIDADE - Universidade Estadual Paulista (Unesp) </p>

            <p className="font-light">- AVALIAÇÃO DA MACIEZ DO CONTRAFILÉ DE BOVINOS SUBMETIDOS A DIFERENTES DIAS DE MATURAÇÃO - Congresso Interinstitucional de Iniciação Científica </p>
        </div>
    </section>
  )
}

function showMenu() {
  document.getElementById('special').classList.remove("hidden")
}

function hideMenu() {
  document.getElementById('special').classList.add("hidden")
}
