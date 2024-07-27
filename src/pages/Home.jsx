export default function Home() {
  return (
    <section className="">
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

        <div className="bg-[url('/carne-fundo.jpg')] bg-cover bg-center h-56 flex justify-center items-center">
          <h1 className="font-porter text-6xl text-center">Dry Ager</h1>
        </div>

        <div className="bg-gray p-9 text-white font-light text-xl text-justify">
          <div className="mb-8">
            <p>Procurando métodos para melhorar a qualidade da sua carne, mas não quer muito esforço? A Old Boi tem o que você precisa, fornecemos um produto prático para você, que realiza o processo de maturação dry age, muito utilizado em países estrangeiros. A maturação a seco pode trazer um gosto amanteigado e de nozes para a carne, o que faz com que ela seja muito procurada por pessoas que gostam de uma boa carne, e claro, os seus preços são elevados, o projeto dry age quer viabilizar isso para você, trazendo um produto com alto custo-benefício, e que possa ser colocado em qualquer lugar. </p>
          </div>

          <div className="flex flex-col">
            <button className="bg-green py-6 rounded-xl mb-6"><a href="https://wa.me/5511989859243">Faça já seu pedido</a></button>
            
            <button className="bg-blue py-6 rounded-xl"><a href="/Produto">Saiba mais</a></button>
          </div>
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