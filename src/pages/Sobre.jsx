export default function Sobre() {
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
            <a href="/"><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20"/></a>
        </div>

        <button onClick={showMenu}><img src="/Menu.svg" alt="ícone de menu" className="fixed ms-5" /></button>

        <div className="pt-12"></div>

        <section className="bg-gray text-white p-14 text-xl text-justify flex flex-col gap-6 items-center">
            <div className="mb-2">
                <h1 className="text-5xl text-center font-sans font-bold mb-8">Siga-nos nas redes sociais! o Produto</h1>

                <p className="font-light">Aqui você encontra o perfil de todos os participantes desse projeto. Clique no @ para seguir!</p>
            </div>

            <div className="flex flex-col items-center gap-4 mb-2">
                <h2 className="text-3xl">Jean</h2>

                <img src="/Jean.svg" alt="Foto do Jean" />

                <a href="https://www.instagram.com/jean_msi?igsh=dzh5OWp5eWdrN21i"><p>@jean_msi</p></a>
            </div>

            <div className="flex flex-col items-center gap-4 mb-2">
                <h2 className="text-3xl">Thalles</h2>

                <img src="/Thalles.svg" alt="Foto do Thalles" />

                <a href="https://www.instagram.com/thalles_gsh?igsh=eHN1amkybWlpMXlj"><p>@thalles_gsh</p></a>
            </div>

            <div className="flex flex-col items-center gap-4 mb-2">
                <h2 className="text-3xl">Kauan</h2>

                <img src="/Kauan.svg" alt="Foto do Kauan" />

                <a href="https://www.instagram.com/sz.kmz?igsh=MWpkODdsZXBwaWFxaA=="><p>@sz.kmz</p></a>
            </div>

            <div className="flex flex-col items-center gap-4 mb-2">
                <h2 className="text-3xl">Arthur</h2>

                <img src="/Arthur.svg" alt="Foto do Arthur" />

                <a href="https://www.instagram.com/arthurwillem1?igsh=MWFvNzRtcGMxbm95NQ=="><p>@arthurwillem1</p></a>
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