function Login() {
  return (
    <div className="bg-gradient-to-r from-[#1A1A1A] via-[#111827] to-[#000000] min-h-dvh">
      <div className="max-w-7xl mx-auto flex items-center justify-evenly w-full min-h-dvh">
        <div className="flex flex-col items-center">
          <img
            src="logo.webp"
            alt="Logo de Infinity Style"
            className="w-2xs h-auto"
          />
          <h3 className="text-[#D1D5DB] text-xl font-normal mt-5 mb-10">
            Panel de Administrador
          </h3>
          <small className="flex gap-2 text-[#9CA3AF] text-base font-normal mb-5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_41_414)">
                <path
                  d="M4.65938 2.025L4.33437 3H2C0.896875 3 0 3.89687 0 5V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V5C16 3.89687 15.1031 3 14 3H11.6656L11.3406 2.025C11.1375 1.4125 10.5656 1 9.91875 1H6.08125C5.43438 1 4.8625 1.4125 4.65938 2.025ZM8 6C8.79565 6 9.55871 6.31607 10.1213 6.87868C10.6839 7.44129 11 8.20435 11 9C11 9.79565 10.6839 10.5587 10.1213 11.1213C9.55871 11.6839 8.79565 12 8 12C7.20435 12 6.44129 11.6839 5.87868 11.1213C5.31607 10.5587 5 9.79565 5 9C5 8.20435 5.31607 7.44129 5.87868 6.87868C6.44129 6.31607 7.20435 6 8 6Z"
                  fill="#0040FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_41_414">
                  <path d="M0 0H16V16H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Sube tu foto
          </small>
          <small className="flex gap-2 text-[#9CA3AF] text-base font-normal mb-5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_41_417)">
                <path
                  d="M5.75 0C6.71562 0 7.5 0.784375 7.5 1.75V14.25C7.5 15.2156 6.71562 16 5.75 16C4.84688 16 4.10313 15.3156 4.00938 14.4344C3.84688 14.4781 3.675 14.5 3.5 14.5C2.39687 14.5 1.5 13.6031 1.5 12.5C1.5 12.2688 1.54062 12.0437 1.6125 11.8375C0.66875 11.4812 0 10.5688 0 9.5C0 8.50313 0.584375 7.64062 1.43125 7.24062C1.15937 6.9 1 6.46875 1 6C1 5.04063 1.675 4.24062 2.575 4.04375C2.525 3.87187 2.5 3.6875 2.5 3.5C2.5 2.56562 3.14375 1.77813 4.00938 1.55938C4.10313 0.684375 4.84688 0 5.75 0ZM10.25 0C11.1531 0 11.8938 0.684375 11.9906 1.55938C12.8594 1.77813 13.5 2.5625 13.5 3.5C13.5 3.6875 13.475 3.87187 13.425 4.04375C14.325 4.2375 15 5.04063 15 6C15 6.46875 14.8406 6.9 14.5688 7.24062C15.4156 7.64062 16 8.50313 16 9.5C16 10.5688 15.3313 11.4812 14.3875 11.8375C14.4594 12.0437 14.5 12.2688 14.5 12.5C14.5 13.6031 13.6031 14.5 12.5 14.5C12.325 14.5 12.1531 14.4781 11.9906 14.4344C11.8969 15.3156 11.1531 16 10.25 16C9.28438 16 8.5 15.2156 8.5 14.25V1.75C8.5 0.784375 9.28438 0 10.25 0Z"
                  fill="#0040FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_41_417">
                  <path d="M0 0H16V16H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            IA recomienda cortes
          </small>
          <small className="flex gap-2 text-[#9CA3AF] text-base font-normal mb-5">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_41_420)">
                <path
                  d="M3 1V2H1.5C0.671875 2 0 2.67188 0 3.5V5H14V3.5C14 2.67188 13.3281 2 12.5 2H11V1C11 0.446875 10.5531 0 10 0C9.44687 0 9 0.446875 9 1V2H5V1C5 0.446875 4.55312 0 4 0C3.44688 0 3 0.446875 3 1ZM14 6H0V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V6Z"
                  fill="#0040FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_41_420">
                  <path d="M0 0H14V16H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Reserva tu cita
          </small>
        </div>

        <form className="w-[450px] bg-white rounded-2xl p-10">
          <h2 className="text-[#1A1A1A] text-3xl font-bold text-center mb-2">
            Bienvenido
          </h2>
          <p className="text-[#4B5563] text-base font-normal text-center mb-10">
            Inicia sesión en tu cuenta de administrador
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[#374151] text-sm font-medium flex gap-2 items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 16H0V0H16V16Z" stroke="#E5E7EB" />
                  <path
                    d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z"
                    fill="#9CA3AF"
                  />
                </svg>
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-3 py-4 rounded-lg border border-[#D1D5DB]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#374151] text-sm font-medium flex gap-2 items-center">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_41_441)">
                    <path
                      d="M4.5 4.5V6H9.5V4.5C9.5 3.11875 8.38125 2 7 2C5.61875 2 4.5 3.11875 4.5 4.5ZM2.5 6V4.5C2.5 2.01562 4.51562 0 7 0C9.48438 0 11.5 2.01562 11.5 4.5V6H12C13.1031 6 14 6.89687 14 8V14C14 15.1031 13.1031 16 12 16H2C0.896875 16 0 15.1031 0 14V8C0 6.89687 0.896875 6 2 6H2.5Z"
                      fill="#9CA3AF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_441">
                      <path d="M0 0H14V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="px-3 py-4 rounded-lg border border-[#D1D5DB]"
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <input type="checkbox" />
                <label className="text-[#4B5563] text-sm font-normal">
                  Recordarme
                </label>
              </div>

              <a href="#" className="text-[#0040FF] text-sm font-normal">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button className="w-full h-12 bg-[#0040FF] text-white text-base font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all duration-300">
              Iniciar Sesión
            </button>

            <span className="text-[#4B5563] text-base font-normal text-center">
              ¿No tienes una cuenta?
              <a href="#" className="text-[#0040FF] font-semibold ml-1">
                Regístrate
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
