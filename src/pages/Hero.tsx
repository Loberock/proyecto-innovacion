function Hero() {
  return (
    <section className="min-h-dvh flex flex-col">
      <div className="max-w-7xl mx-auto py-20 px-5">
        <div className="w-3xl">
          <h1 className="text-5xl text-[#1A1A1A] font-bold mb-5">
            Encuentra tu corte perfecto en{" "}
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-l from-[#979797] to-[#3A3A3A]">
              Infinity Style
            </span>
          </h1>
          <p className="text-[#4B5563] text-[20px]">
            Acude a nuestra sede para obtener recomendaciones personalizadas
            sobre tu próximo corte de cabello gracias a nuestra IA especializada
            en estilo masculino.
          </p>
        </div>

        <div>
          <span>Sin Coste Adicional</span>
          <span>Privado y Seguro</span>
          <span>Resultados Instantáneos</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
