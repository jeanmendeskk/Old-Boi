export default function Produto() {
  return (
    <section>
        <div>
          <section id="special" className="flex flex-col items-start bg-black text-white h-lvh w-10/12 p-8 gap-y-4 z-10 fixed hidden">
            <button onClick={hideMenu}>x</button>
            <hr />
            <a href="/"><h3>Inicio</h3></a>
            <h3 className="text-textg">Produto</h3>
            <a href="/Materiais"><h3>Materiais</h3></a>
            <a href="/Referencias"><h3>Referências</h3></a>
            <a href="/Sobre"><h3>Sobre nós</h3></a>
          </section>    
        </div>

        <div className="w-full fixed bg-black flex justify-center items-center mb-24 lg:ps-1 gap-28 py-1z 2xl:h-28">
            <a href="/"><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20 2xl:w-28"/></a>
            <div className="max-lg:hidden flex gap-28 font-osw uppercase font-normal 2xl:text-2xl">
                <a href="/"><p className="text-white">Início</p></a>

                <p className="text-textg">Produto</p>

                <a href="/Materiais"><p className="text-white">Materiais</p></a>

                <a href="/Referencias"><p className="text-white">Referências</p></a>

                <a href="/Sobre"><p className="text-white">Sobre nós</p></a>
            </div>
        </div>

        <button onClick={showMenu}><img src="/Menu.svg" alt="ícone de menu" className="fixed ms-5 lg:hidden" /></button>
        
        <div className="pt-14 2xl:pt-20"></div>

        <div className="bg-gray text-white flex justify-center items-center px-28 py-10">
            <h1 className="text-5xl font-sans font-bold text-center 2xl:text-7xl">Sobre o Produto</h1>
        </div>

        <div className="bg-offwhite p-10 text-center flex flex-col text-lg lg:items-center">
            <h2 className="font-semibold text-3xl pb-6 2xl:text-5xl">Como usar?</h2>

            <p className="font-light text-xl text-justify pb-7 lg:px-48 2xl:text-3xl 2xl:px-64 2xl:my-4">Ao comprar uma peça de carne, você pode temperar a carne com sal ou temperos em pó, não é recomendado o uso de líquidos como o limão, e após isso, você coloca a carne dentro da estufa, e fecha a porta, garantindo em deixar bem fechado, e no fim, ligar a estufa e esperar. Você pode monitorar o processo pelo aplicativo disponível no Link abaixo. </p>

            <button className="bg-blue text-white py-5 rounded-xl lg:mb-0 lg:w-60 2xl:text-3xl 2xl:w-80 2xl:h-24 2xl:mb-1"><a href="">Baixe aqui!</a></button>
        </div>

        <div className="bg-gray text-white p-10 text-center text-lg">
            <h2 className="font-semibold text-3xl pb-6 2xl:text-5xl 2xl:mb-4">Funcionamento</h2>

            <p className="font-light text-xl text-justify lg:px-48 2xl:text-3xl 2xl:px-64 2xl:mb-6">Para que o processo de maturação ocorra, é necessário que condições específicas sejam cumpridas, a primeira é a temperatura, sendo necessário manter a carne entre 0 e 4 graus Celsius, a segunda é a circulação do ar, que deve se manter controlada, em um baixo fluxo, a terceira é a umidade do ar, que deve estar de baixa para média, a estufa deve ser isolada do exterior por dentro, para evitar a proliferação de bactérias, e por fim, deve haver um sistema de drenagem, pois a carne solta líquidos durante o processo. </p>
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