export default function Referencias() {
  return (
    <section>
        <div className="w-full fixed bg-black flex justify-center items-center mb-24">
            <a href=""><img src="/logo-site.jpg" alt="Imagem de um boi feito por listras" className="w-20"/></a>
        </div>

        <button><img src="/Menu.svg" alt="ícone de menu" className="fixed ms-5" /></button>

        <div className="pt-12"></div>

        <div className="bg-gray text-white p-14 text-justify flex flex-col gap-8">
            <h1 className="text-5xl text-center font-sans font-bold">Fonte de estudos do projeto</h1>

            <p className="font-light">- MATURAÇÃO DRY-AGED: UMA REVISÃO DAS CARACTERÍSTICAS E PARÂMETROS ENVOLVIDOS – Tecal 2022</p>
            
            <p className="font-light">- CARACTERÍSTICAS DA CARNE BUBALINA E BENEFÍCIOS DA MATURAÇÃO SOBRE A SUA QUALIDADE - Universidade Estadual Paulista (Unesp) </p>

            <p className="font-light">- AVALIAÇÃO DA MACIEZ DO CONTRAFILÉ DE BOVINOS SUBMETIDOS A DIFERENTES DIAS DE MATURAÇÃO - Congresso Interinstitucional de Iniciação Científica </p>
        </div>
    </section>
  )
}
