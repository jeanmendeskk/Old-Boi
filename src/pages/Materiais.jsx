export default function Materiais() {
    return (
      <section>
          <div>
            <section id="special" className="flex flex-col items-start bg-black text-white h-lvh w-10/12 p-8 gap-y-4 z-10 fixed hidden">
              <button onClick={hideMenu}>x</button>
              <hr />
              <a href="/"><h3>Inicio</h3></a>
              <a href="/Produto"><h3>Produto</h3></a>
              <h3 className="text-textg">Materiais</h3>
              <a href="/Referencias"><h3>Referências</h3></a>
              <a href="/Sobre"><h3>Sobre nós</h3></a>
            </section>    
          </div>
  
          <div className="w-full fixed bg-black flex justify-center items-center mb-24 lg:ps-1 gap-28 py-1z 2xl:h-28">
              <a href="/"><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20 2xl:w-28"/></a>
              <div className="max-lg:hidden flex gap-28 font-osw uppercase font-normal 2xl:text-2xl">
                  <a href="/"><p className="text-white">Início</p></a>
  
                  <a href="/Produto"><p className="text-white">Produto</p></a>
  
                  <p className="text-textg">Materiais</p>
  
                  <a href="/Referencias"><p className="text-white">Referências</p></a>
  
                  <a href="/Sobre"><p className="text-white">Sobre nós</p></a>
              </div>
          </div>
  
          <button onClick={showMenu}><img src="/Menu.svg" alt="ícone de menu" className="fixed ms-5 lg:hidden" /></button>
  
          <div className="pt-14 2xl:pt-20"></div>
  
          <section className="bg-gray text-white px-20 flex flex-col gap-4 pb-8 text-xl items-center lg:flex-row lg:flex-wrap lg:gap-x-16 lg:justify-center 2xl:pt-10">
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Arduino mega</h2>
  
                  <img src="/Arduino.svg" alt="Foto da peça arduíno mega" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$100-150,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Uma placa arduíno em tamanho maior, para suportar mais componentes.</p>
  
                  <p className="max-lg:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Sensor DTH22</h2>
  
                  <img src="/Sensor.svg" alt="Foto da peça sensor DTH22" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$20-30,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Um sensor avançado que é capaz de medir a temperatura e umidade relativa do ar.</p>
  
                  <p className="max-lg:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Umidificador</h2>
  
                  <img src="/Umidificador.svg" alt="Foto da peça umidificador usb" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$10-30,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Um dispositivo umidificador que utiliza como fonte o USB para umidificar o ar.</p>
  
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Relé</h2>
  
                  <img src="/Rele.svg" alt="Foto da peça módulo Relé" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$20-40,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Um módulo que permite que você conecte componentes arduino ao sistema elétrico.</p>
  
                  <p className="sm:hidden lg:flex xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Peltier</h2>
  
                  <img src="/Peltier.svg" alt="Foto da peça módulo peltier" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$30-80,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Um módulo feito para controlar  a temperatura de onde for colocado, geralmente esfriando.</p>
  
                  <p className="max-lg:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Lâmpada</h2>
  
                  <img src="/Lampada.svg" alt="Foto da peça Lampada" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$5-20,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Lâmpada incandescente, com função similar ao Peltier, porém, com objetivo de esquentar.</p>
  
                  <p className="max-lg:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Ventoinha</h2>
  
                  <img src="/Vento.svg" alt="Foto da peça Ventoínha" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$20-30,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Ventoinha para arduino, utilizado no projeto para controlar a circulação de ar da estufa dry ager.</p>
  
                  <p className="max-lg:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Compensado</h2>
  
                  <img src="/Madeira.webp" alt="Foto da peça compensado naval" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$200-300,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Um tipo de compensado, o naval, usado para fazer navios, sendo durável e resistente a umidade.</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Isopor</h2>
  
                  <img src="/Isopor.svg" alt="Foto da peça Isopor" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$25-40,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Foi utilizado um tipo de isopor mais resistente para servir como um isolante térmico.</p>
  
                  <p className="sm:hidden lg:flex xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
              </div>
  
              <div className="flex flex-col justify-center items-center max-w-52 2xl:max-w-64 2xl:gap-2">
                  <h2 className="font-medium text-3xl my-6 2xl:text-4xl">Alumínio</h2>
  
                  <img src="/Alumi.svg" alt="Foto da peça de folha de alumínio" className="w-52 2xl:w-64"/>
  
                  <h3 className="font-normal pt-3 pb-2 2xl:text-2xl">R$30-50,00.</h3>
  
                  <p className="font-light text-justify 2xl:text-2xl">Uma placa de alumínio, sendo utilizado junto com o isopor como isolante térmico.</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                  <p className="max-2xl:hidden">⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
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