export default function Referencias() {
  return (
    <section className="lg:h-screen lg:bg-gray">
      <div>
          <section id="special" className="flex flex-col items-start bg-black text-white h-lvh w-10/12 p-8 gap-y-4 z-10 fixed hidden">
            <button onClick={hideMenu}>x</button>
            <hr />
            <a href="/"><h3>Inicio</h3></a>
            <a href="/Produto"><h3>Produto</h3></a>
            <a href="/Materiais"><h3>Materiais</h3></a>
            <h3 className="text-textg">Referências</h3>
            <a href="/Sobre"><h3>Sobre nós</h3></a>
          </section>    
        </div>
        
        <div className="w-full fixed bg-black flex justify-center items-center mb-24 lg:ps-1 gap-28 py-1 2xl:h-28">
            <a href="/"><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20 2xl:w-28"/></a>
            <div className="max-lg:hidden flex gap-28 font-osw uppercase font-normal 2xl:text-2xl">
                <a href="/"><p className="text-white">Início</p></a>

                <a href="/Produto"><p className="text-white">Produto</p></a>

                <a href="/Materiais"><p className="text-white">Materiais</p></a>

                <p className="text-textg">Referências</p>

                <a href="/Sobre"><p className="text-white">Sobre nós</p></a>
            </div>
        </div>

        <button onClick={showMenu}><img src="/Menu.svg" alt="ícone de menu" className="fixed ms-5 lg:hidden" /></button>

        <div className="pt-12 lg:pt-0"></div>

        <div className="bg-gray text-xl text-white p-14 text-justify flex flex-col gap-8 lg:h-auto lg:pt-36 lg:pb-28 lg:px-64 lg:gap-12 2xl:pt-64 2xl:pb-52 2xl:text-3xl 2xl:gap-16">
            <h1 className="text-5xl text-center font-sans font-bold 2xl:text-6xl">Fonte de estudos do projeto</h1>

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
