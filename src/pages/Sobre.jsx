export default function Sobre() {
  return (
    <section className="lg:h-screen lg:bg-gray">
        <div>
          <section id="special" className="flex flex-col items-start bg-black text-white h-lvh w-10/12 p-8 gap-y-4 z-10 fixed hidden">
            <button onClick={hideMenu}>x</button>
            <hr />
            <a href="/"><h3>Inicio</h3></a>
            <a href="/Produto"><h3>Produto</h3></a>
            <a href="/Materiais"><h3>Materiais</h3></a>
            <a href="/Referencias"><h3>Referências</h3></a>
            <h3 className="text-textg">Sobre nós</h3>
          </section>    
        </div>

        <div className="w-full fixed bg-black flex justify-center items-center mb-24 lg:ps-1 gap-28 py-1 2xl:h-28">
            <a href="/"><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20 2xl:w-28"/></a>
            <div className="max-lg:hidden flex gap-28 font-osw uppercase font-normal 2xl:text-2xl">
                <a href="/"><p className="text-white">Início</p></a>

                <a href="/Produto"><p className="text-white">Produto</p></a>

                <a href="/Materiais"><p className="text-white">Materiais</p></a>

                <a href="/Referencias"><p className="text-white">Referências</p></a>

                <p className="text-textg">Sobre nós</p>
            </div>
        </div>

        <button onClick={showMenu}><img src="/Menu.svg" alt="ícone de menu" className="fixed ms-5 lg:hidden" /></button>

        <div className="pt-12"></div>

        <section className="bg-gray text-white p-14 text-xl text-justify flex flex-col gap-6 items-center 2xl:pt-44 2xl:justify-center">
            <div className="2xl:mb-2 2xl:text-center 2xl:flex 2xl:flex-col 2xl:gap-2">
                <h1 className="text-5xl text-center font-sans font-bold mb-8 2xl:text-7xl">Siga-nos nas redes sociais!</h1>

                <p className="font-light 2xl:text-3xl">Aqui você encontra o perfil de todos os participantes desse projeto. Clique no @ para seguir!</p>
            </div>

            <div className="lg:flex lg:flex-wrap lg:gap-16 lg:pb-2">
              <div className="flex flex-col items-center gap-4 mb-2">
                  <h2 className="text-3xl 2xl:text-4xl">Jean</h2>

                  <img src="/Jean.svg" alt="Foto do Jean" className="2xl:w-72" />

                  <a href="https://www.instagram.com/jean_msi?igsh=dzh5OWp5eWdrN21i"><p className="text-2xl">@jean_msi</p></a>
              </div>

              <div className="flex flex-col items-center gap-4 mb-2">
                  <h2 className="text-3xl 2xl:text-4xl">Thalles</h2>

                  <img src="/Thalles.svg" alt="Foto do Thalles" className="2xl:w-72" />

                  <a href="https://www.instagram.com/thalles_gsh?igsh=eHN1amkybWlpMXlj"><p className="text-2xl">@thalles_gsh</p></a>
              </div>

              <div className="flex flex-col items-center gap-4 mb-2">
                  <h2 className="text-3xl 2xl:text-4xl">Kauan</h2>

                  <img src="/Kauan.svg" alt="Foto do Kauan" className="2xl:w-72"/>

                  <a href="https://www.instagram.com/sz.kmz?igsh=MWpkODdsZXBwaWFxaA=="><p className="text-2xl">@sz.kmz</p></a>
              </div>

              <div className="flex flex-col items-center gap-4 mb-2">
                  <h2 className="text-3xl 2xl:text-4xl">Arthur</h2>

                  <img src="/Arthur.svg" alt="Foto do Arthur" className="2xl:w-72"/>

                  <a href="https://www.instagram.com/arthurwillem1?igsh=MWFvNzRtcGMxbm95NQ=="><p className="text-2xl">@arthurwillem1</p></a>
              </div>
            </div>
        </section>      
    </section>
  )
}

function showMenu() {
    document.getElementById('special').classList.remove("hidden")
  }
  
  function hideMenu() {
    document.getElementById('special').classList.add("hidden")
  }