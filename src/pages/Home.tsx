function Home() {
  return (
    <section className="min-h-dvh px-5 py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20">
        <div className="w-3xl text-center">
          <h1 className="text-[#1A1A1A] text-5xl font-bold mb-5">
            Encuentra tu corte perfecto en{" "}
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-l from-[#979797] to-[#3A3A3A]">
              Infinity Style
            </span>
          </h1>
          <p className="text-[#4B5563] text-xl font-normal mb-14">
            Acude a nuestra sede para obtener recomendaciones personalizadas
            sobre tu próximo corte de cabello gracias a nuestra IA especializada
            en estilo masculino.
          </p>

          <div className="flex justify-evenly w-full">
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_205)">
                  <path
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                    fill="#22C55E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_205">
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Sin Coste Adicional
            </span>

            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_208)">
                  <path
                    d="M4.5 4.5V6H9.5V4.5C9.5 3.11875 8.38125 2 7 2C5.61875 2 4.5 3.11875 4.5 4.5ZM2.5 6V4.5C2.5 2.01562 4.51562 0 7 0C9.48438 0 11.5 2.01562 11.5 4.5V6H12C13.1031 6 14 6.89687 14 8V14C14 15.1031 13.1031 16 12 16H2C0.896875 16 0 15.1031 0 14V8C0 6.89687 0.896875 6 2 6H2.5Z"
                    fill="#22C55E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_208">
                    <path d="M0 0H14V16H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Privado y Seguro
            </span>

            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_211)">
                  <path
                    d="M10.9188 1.39376C11.1032 0.965633 10.9657 0.465633 10.5876 0.190633C10.2094 -0.0843669 9.69382 -0.0593669 9.3407 0.246883L1.3407 7.24688C1.0282 7.52188 0.9157 7.96251 1.06257 8.35001C1.20945 8.73751 1.58445 9.00001 2.00007 9.00001H5.48445L3.08132 14.6063C2.89695 15.0344 3.03445 15.5344 3.41257 15.8094C3.7907 16.0844 4.30632 16.0594 4.65945 15.7531L12.6594 8.75313C12.9719 8.47813 13.0844 8.03751 12.9376 7.65001C12.7907 7.26251 12.4188 7.00313 12.0001 7.00313H8.5157L10.9188 1.39376Z"
                    fill="#EAB308"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_211">
                    <path d="M0 0H14V16H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Resultados Instantáneos
            </span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg px-5 py-12 md:p-12 w-full flex flex-col items-center gap-10">
          <h2 className="text-black text-2xl font-bold">¿Cómo Funciona?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="flex items-start gap-4 w-full h-full">
              <span className="bg-gradient-to-b from-[#2B2B2B] via-[#929292] to-[#FFFFFF] rounded-full w-16 h-16 flex items-center justify-center text-white text-4xl font-normal shrink-0">
                1
              </span>

              <div className="flex flex-col">
                <h3 className="text-[#1A1A1A] text-xl font-medium">
                  Visita Nuestra Sede
                </h3>
                <p className="text-[#4B5563] text-base font-normal mb-10">
                  Uno de nuestros barberos expertos tomará una foto de tu
                  rostro.
                </p>
                <img
                  src="img1.webp"
                  alt="Imagen de barbero tomando foto a cliente"
                  className="w-3xs h-3xs rounded-2xl shrink-0"
                />
              </div>
            </article>

            <article className="flex items-start gap-4 w-full h-full">
              <span className="bg-gradient-to-b from-[#2B2B2B] via-[#929292] to-[#FFFFFF] rounded-full w-16 h-16 flex items-center justify-center text-white text-4xl font-normal shrink-0">
                2
              </span>

              <div className="flex flex-col">
                <h3 className="text-[#1A1A1A] text-xl font-medium">
                  Deja que la IA se encargue
                </h3>
                <p className="text-[#4B5563] text-base font-normal mb-10">
                  Nuestra IA especializada realizará un análisis de tus
                  facciones.
                </p>
                <img
                  src="img2.webp"
                  alt="Imagen de rostro de cliente escaneado con IA"
                  className="w-3xs h-3xs rounded-2xl shrink-0"
                />
              </div>
            </article>

            <article className="flex items-start gap-4 w-full h-full">
              <span className="bg-gradient-to-b from-[#2B2B2B] via-[#929292] to-[#FFFFFF] rounded-full w-16 h-16 flex items-center justify-center text-white text-4xl font-normal shrink-0">
                3
              </span>

              <div className="flex flex-col">
                <h3 className="text-[#1A1A1A] text-xl font-medium">
                  Elige tu nuevo corte
                </h3>
                <p className="text-[#4B5563] text-base font-normal mb-10">
                  Elige tu nuevo estilo entre 6 opciones diferentes
                  personalizadas para ti.
                </p>
                <img
                  src="img3.webp"
                  alt="Imagen de cliente con cortes recomendados"
                  className="w-3xs h-3xs rounded-2xl shrink-0"
                />
              </div>
            </article>
          </div>

          <button className="bg-[#0040FF] px-4 py-2 rounded-lg text-white text-base font-medium cursor-pointer hover:bg-[#0036e6] transition duration-300 ">
            Deseo una cita
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg px-5 py-12 md:p-12 w-full text-center">
          <h2 className="text-[#1A1A1A] text-3xl font-bold mb-5">
            ¿Por qué elegir Infinity Style
          </h2>
          <p className="text-[#4B5563] text-base mb-10">
            Ofrecemos los mejores servicios a nivel Lambayecano
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10_246)">
                    <path
                      d="M8.625 0C10.0734 0 11.25 1.17656 11.25 2.625V21.375C11.25 22.8234 10.0734 24 8.625 24C7.27031 24 6.15469 22.9734 6.01406 21.6516C5.77031 21.7172 5.5125 21.75 5.25 21.75C3.59531 21.75 2.25 20.4047 2.25 18.75C2.25 18.4031 2.31094 18.0656 2.41875 17.7562C1.00312 17.2219 0 15.8531 0 14.25C0 12.7547 0.876562 11.4609 2.14687 10.8609C1.73906 10.35 1.5 9.70312 1.5 9C1.5 7.56094 2.5125 6.36094 3.8625 6.06562C3.7875 5.80781 3.75 5.53125 3.75 5.25C3.75 3.84844 4.71563 2.66719 6.01406 2.33906C6.15469 1.02656 7.27031 0 8.625 0ZM15.375 0C16.7297 0 17.8406 1.02656 17.9859 2.33906C19.2891 2.66719 20.25 3.84375 20.25 5.25C20.25 5.53125 20.2125 5.80781 20.1375 6.06562C21.4875 6.35625 22.5 7.56094 22.5 9C22.5 9.70312 22.2609 10.35 21.8531 10.8609C23.1234 11.4609 24 12.7547 24 14.25C24 15.8531 22.9969 17.2219 21.5812 17.7562C21.6891 18.0656 21.75 18.4031 21.75 18.75C21.75 20.4047 20.4047 21.75 18.75 21.75C18.4875 21.75 18.2297 21.7172 17.9859 21.6516C17.8453 22.9734 16.7297 24 15.375 24C13.9266 24 12.75 22.8234 12.75 21.375V2.625C12.75 1.17656 13.9266 0 15.375 0Z"
                      fill="#0040FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_246">
                      <path d="M0 0H24V24H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h3 className="text-[#1A1A1A] text-xl font-bold">IA Avanzada</h3>
              <p className="text-[#4B5563] text-base font-normal">
                Algoritmos de última generación que analizan tu estructura
                facial con precisión profesional.
              </p>
            </article>

            <article className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10_249)">
                    <path
                      d="M6.75 0C7.74456 0 8.69839 0.395088 9.40165 1.09835C10.1049 1.80161 10.5 2.75544 10.5 3.75C10.5 4.74456 10.1049 5.69839 9.40165 6.40165C8.69839 7.10491 7.74456 7.5 6.75 7.5C5.75544 7.5 4.80161 7.10491 4.09835 6.40165C3.39509 5.69839 3 4.74456 3 3.75C3 2.75544 3.39509 1.80161 4.09835 1.09835C4.80161 0.395088 5.75544 0 6.75 0ZM24 0C24.9946 0 25.9484 0.395088 26.6516 1.09835C27.3549 1.80161 27.75 2.75544 27.75 3.75C27.75 4.74456 27.3549 5.69839 26.6516 6.40165C25.9484 7.10491 24.9946 7.5 24 7.5C23.0054 7.5 22.0516 7.10491 21.3484 6.40165C20.6451 5.69839 20.25 4.74456 20.25 3.75C20.25 2.75544 20.6451 1.80161 21.3484 1.09835C22.0516 0.395088 23.0054 0 24 0ZM0 14.0016C0 11.2406 2.24062 9 5.00156 9H7.00312C7.74844 9 8.45625 9.16406 9.09375 9.45469C9.03281 9.79219 9.00469 10.1438 9.00469 10.5C9.00469 12.2906 9.79219 13.8984 11.0344 15C11.025 15 11.0156 15 11.0016 15H0.998437C0.45 15 0 14.55 0 14.0016ZM18.9984 15C18.9891 15 18.9797 15 18.9656 15C20.2125 13.8984 20.9953 12.2906 20.9953 10.5C20.9953 10.1438 20.9625 9.79688 20.9062 9.45469C21.5438 9.15938 22.2516 9 22.9969 9H24.9984C27.7594 9 30 11.2406 30 14.0016C30 14.5547 29.55 15 29.0016 15H18.9984ZM10.5 10.5C10.5 9.30653 10.9741 8.16193 11.818 7.31802C12.6619 6.47411 13.8065 6 15 6C16.1935 6 17.3381 6.47411 18.182 7.31802C19.0259 8.16193 19.5 9.30653 19.5 10.5C19.5 11.6935 19.0259 12.8381 18.182 13.682C17.3381 14.5259 16.1935 15 15 15C13.8065 15 12.6619 14.5259 11.818 13.682C10.9741 12.8381 10.5 11.6935 10.5 10.5ZM6 22.7484C6 19.2984 8.79844 16.5 12.2484 16.5H17.7516C21.2016 16.5 24 19.2984 24 22.7484C24 23.4375 23.4422 24 22.7484 24H7.25156C6.5625 24 6 23.4422 6 22.7484Z"
                      fill="#0040FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_249">
                      <path d="M0 0H30V24H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h3 className="text-[#1A1A1A] text-xl font-bold">
                Barberos Expertos
              </h3>
              <p className="text-[#4B5563] text-base font-normal">
                Conectamos con los mejores barberos de tu zona para hacer
                realidad tu nuevo look.
              </p>
            </article>

            <article className="flex flex-col items-center gap-3">
              <span className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 24H0V0H24V24Z" stroke="#E5E7EB" />
                  <path
                    d="M12 0C12.2156 0 12.4313 0.046875 12.6281 0.135938L21.4547 3.88125C22.486 4.31719 23.2547 5.33438 23.25 6.5625C23.2266 11.2125 21.3141 19.7203 13.2375 23.5875C12.4547 23.9625 11.5453 23.9625 10.7625 23.5875C2.68596 19.7203 0.773459 11.2125 0.750021 6.5625C0.745334 5.33438 1.51408 4.31719 2.54533 3.88125L11.3766 0.135938C11.5688 0.046875 11.7844 0 12 0ZM12 3.13125V20.85C18.4688 17.7188 20.2078 10.7859 20.25 6.62813L12 3.13125Z"
                    fill="#0040FF"
                  />
                </svg>
              </span>
              <h3 className="text-[#1A1A1A] text-xl font-bold">100% Seguro</h3>
              <p className="text-[#4B5563] text-base font-normal">
                Tus fotos se procesan de forma segura y se eliminan
                automáticamente después del análisis.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
