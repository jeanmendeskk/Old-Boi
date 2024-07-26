export default function Produto() {
  return (
    <section>
        <div className="w-full fixed bg-black flex justify-center items-center mb-24">
            <a href=""><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20"/></a>
        </div>
        
        <div className="pt-20"></div>

        <div className="bg-gray text-white flex justify-center items-center px-28 py-10">
            <h1 className="text-5xl font-sans font-bold text-center">Sobre o Produto</h1>
        </div>

        <div className="bg-offwhite p-10 text-center flex flex-col text-lg">
            <h2 className="font-semibold text-3xl pb-6">Como usar?</h2>

            <p className="font-light text-xl text-justify pb-7">Ao comprar uma peça de carne, você pode temperar a carne com sal ou temperos em pó, não é recomendado o uso de líquidos como o limão, e após isso, você coloca a carne dentro da estufa, e fecha a porta, garantindo em deixar bem fechado, e no fim, ligar a estufa e esperar. Você pode monitorar o processo pelo aplicativo disponível no Link abaixo. </p>

            <button className="bg-blue text-white py-5 rounded-xl"><a href="">Baixe aqui!</a></button>
        </div>

        <div className="bg-gray text-white p-10 text-center text-lg">
            <h2 className="font-semibold text-3xl pb-6">Funcionamento</h2>

            <p className="font-light text-xl text-justify">Para que o processo de maturação ocorra, é necessário que condições específicas sejam cumpridas, a primeira é a temperatura, sendo necessário manter a carne entre 0 e 4 graus Celsius, a segunda é a circulação do ar, que deve se manter controlada, em um baixo fluxo, a terceira é a umidade do ar, que deve estar de baixa para média, a estufa deve ser isolada do exterior por dentro, para evitar a proliferação de bactérias, e por fim, deve haver um sistema de drenagem, pois a carne solta líquidos durante o processo. </p>
        </div>
    </section>
  )
}
