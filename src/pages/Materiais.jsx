export default function Materiais() {
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

        <div className="pt-14 mb-"></div>

        <section className="bg-gray text-white px-20 flex flex-col gap-4 pb-8 text-xl">
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Arduino mega</h2>

                <img src="/Arduino.svg" alt="Foto da peça arduíno mega" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$100-150,00.</h3>

                <p className="font-light text-justify px-5">Uma placa arduíno em tamanho maior, para suportar mais componentes</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Sensor DTH22</h2>

                <img src="/Sensor.svg" alt="Foto da peça sensor DTH22" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$20-30,00.</h3>

                <p className="font-light text-justify px-5">Um sensor avançado que é capaz de medir a temperatura e umidade relativa do ar.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Umidificador</h2>

                <img src="/Umidificador.svg" alt="Foto da peça umidificador usb" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$10-30,00.</h3>

                <p className="font-light text-justify px-5">Um dispositivo umidificador que utiliza como fonte o USB para umidificar o ar.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Relé</h2>

                <img src="/Rele.svg" alt="Foto da peça módulo Relé" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$20-40,00.</h3>

                <p className="font-light text-justify px-5">Um módulo que permite que você conecte componentes arduino ao sistema elétrico.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Peltier</h2>

                <img src="/Peltier.svg" alt="Foto da peça módulo peltier" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$30-80,00.</h3>

                <p className="font-light text-justify px-5">Um módulo feito para controlar  a temperatura de onde for colocado, geralmente esfriando.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Lâmpada</h2>

                <img src="/Lampada.svg" alt="Foto da peça Lampada" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$5-20,00.</h3>

                <p className="font-light text-justify px-5">Lâmpada incandescente, com função similar ao Peltier, porém, com objetivo de esquentar.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Ventoinha</h2>

                <img src="/Vento.svg" alt="Foto da peça Ventoínha" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$20-30,00.</h3>

                <p className="font-light text-justify px-5">Ventoinha para arduino, utilizado no projeto para controlar a circulação de ar da estufa dry ager.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Compensado</h2>

                <img src="/Madeira.webp" alt="Foto da peça compensado naval" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$200-300,00.</h3>

                <p className="font-light text-justify px-5">Um tipo de compensado, o naval, usado para fazer navios, sendo durável e resistente a umidade.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Isopor</h2>

                <img src="/Isopor.svg" alt="Foto da peça Isopor" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$25-40,00.</h3>

                <p className="font-light text-justify px-5">Foi utilizado um tipo de isopor mais resistente para servir como um isolante térmico.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="font-medium text-3xl my-6">Alumínio</h2>

                <img src="/Alumi.svg" alt="Foto da peça de folha de alumínio" className="w-52"/>

                <h3 className="font-normal pt-3 pb-2">R$30-50,00.</h3>

                <p className="font-light text-justify px-5">Uma placa de alumínio, sendo utilizado junto com o isopor como isolante térmico.</p>
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