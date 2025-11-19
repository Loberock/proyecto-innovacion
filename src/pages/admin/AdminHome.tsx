import React, { useState } from "react";
// Importar el componente separado
import ImageUploader from "./ImageUploader"; // Ajusta la ruta

function AdminHome() {
  // Estado para guardar el archivo subido
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Función que ImageUploader llamará al subir una imagen
  const handleImageUpload = (file: File) => {
    setUploadedFile(file);
    console.log("Archivo subido recibido en AdminHome:", file.name);
  };

  // Función para manejar el formulario (ej. al hacer clic en "Analizar con IA")
  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadedFile) {
      console.log("Analizando datos:", "con archivo:", uploadedFile.name);
      // Aquí iría la lógica de llamada a la API de IA
    } else {
      alert("Por favor, sube una foto antes de analizar.");
    }
  };

  return (
    <section className="min-h-dvh px-5 py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20">
        <h1 className="text-[#1A1A1A] text-5xl font-bold w-5xl text-center">
          Recomendación de cortes de cabello con{" "}
          <span className="text-[#0040FF]">Inteligencia Artificial</span>
        </h1>

        <div className="w-full bg-white rounded-lg shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-20">
          <article className="flex flex-col">
            <h2 className="text-[#1A1A1A] text-3xl font-bold mb-3">
              Sube tu foto
            </h2>

            <p className="text-[#4B5563] text-base font-normal mb-8">
              Registra al cliente y sube su imagen, para mejores resultados
              asegurate de tomar una imagen clara en un fondo blanco.
            </p>

            <form className="flex flex-col gap-5 mb-8" onSubmit={handleAnalyze}>
              <div className="flex flex-col gap-2">
                <label className="text-black text-base font-semibold">
                  Nombres
                </label>
                <input
                  type="text"
                  name="nombres"
                  placeholder="Cristhian Alessandro"
                  required
                  className="border border-[#DCDCDC] rounded-3xl px-5 py-2.5"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black text-base font-semibold">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="apellidos"
                  placeholder="Chapoñan Lopez"
                  required
                  className="border border-[#DCDCDC] rounded-3xl px-5 py-2.5"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black text-base font-semibold">
                  Número de Celular
                </label>
                <input
                  type="tel"
                  name="celular"
                  placeholder="999 999 999"
                  required
                  className="border border-[#DCDCDC] rounded-3xl px-5 py-2.5"
                />
              </div>

              <div className="flex items-center justify-center gap-5 mt-5">
                <button
                  type="submit"
                  className="bg-[#0040FF] text-white text-base font-medium px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_93_700)">
                      <path
                        d="M7.33437 1.33438L6.15625 1.775C6.0625 1.80937 6 1.9 6 2C6 2.1 6.0625 2.19062 6.15625 2.225L7.33437 2.66563L7.775 3.84375C7.80938 3.9375 7.9 4 8 4C8.1 4 8.19063 3.9375 8.225 3.84375L8.66562 2.66563L9.84375 2.225C9.9375 2.19062 10 2.1 10 2C10 1.9 9.9375 1.80937 9.84375 1.775L8.66562 1.33438L8.225 0.15625C8.19063 0.0625 8.1 0 8 0C7.9 0 7.80938 0.0625 7.775 0.15625L7.33437 1.33438ZM1.44062 12.3562C0.85625 12.9406 0.85625 13.8906 1.44062 14.4781L2.52187 15.5594C3.10625 16.1437 4.05625 16.1437 4.64375 15.5594L16.5594 3.64062C17.1438 3.05625 17.1438 2.10625 16.5594 1.51875L15.4781 0.440625C14.8937 -0.14375 13.9437 -0.14375 13.3562 0.440625L1.44062 12.3562ZM15.1438 2.58125L11.8625 5.8625L11.1344 5.13438L14.4156 1.85312L15.1438 2.58125ZM0.234375 3.6625C0.09375 3.71562 0 3.85 0 4C0 4.15 0.09375 4.28438 0.234375 4.3375L2 5L2.6625 6.76562C2.71562 6.90625 2.85 7 3 7C3.15 7 3.28438 6.90625 3.3375 6.76562L4 5L5.76562 4.3375C5.90625 4.28438 6 4.15 6 4C6 3.85 5.90625 3.71562 5.76562 3.6625L4 3L3.3375 1.23438C3.28438 1.09375 3.15 1 3 1C2.85 1 2.71562 1.09375 2.6625 1.23438L2 3L0.234375 3.6625ZM11.2344 11.6625C11.0938 11.7156 11 11.85 11 12C11 12.15 11.0938 12.2844 11.2344 12.3375L13 13L13.6625 14.7656C13.7156 14.9062 13.85 15 14 15C14.15 15 14.2844 14.9062 14.3375 14.7656L15 13L16.7656 12.3375C16.9062 12.2844 17 12.15 17 12C17 11.85 16.9062 11.7156 16.7656 11.6625L15 11L14.3375 9.23438C14.2844 9.09375 14.15 9 14 9C13.85 9 13.7156 9.09375 13.6625 9.23438L13 11L11.2344 11.6625Z"
                        fill="white"
                        className="border border-[#DCDCDC] rounded-3xl px-5 py-2.5"
                      />
                    </g>

                    <defs>
                      <clipPath id="clip0_93_700">
                        <path
                          d="M0 0H18V16H0V0Z"
                          fill="white"
                          className="border border-[#DCDCDC] rounded-3xl px-5 py-2.5"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Analizar con IA
                </button>

                <button
                  type="button"
                  onClick={() => setUploadedFile(null)}
                  className="border border-[#D1D5DB] text-black text-base font-medium px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_93_706)">
                      <path
                        d="M4.225 0.553125L4 1H1C0.446875 1 0 1.44687 0 2C0 2.55312 0.446875 3 1 3H13C13.5531 3 14 2.55312 14 2C14 1.44687 13.5531 1 13 1H10L9.775 0.553125C9.60625 0.2125 9.25938 0 8.88125 0H5.11875C4.74062 0 4.39375 0.2125 4.225 0.553125ZM13 4H1L1.6625 14.5938C1.7125 15.3844 2.36875 16 3.15937 16H10.8406C11.6312 16 12.2875 15.3844 12.3375 14.5938L13 4Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_93_706">
                        <path d="M0 0H14V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Eliminar
                </button>
              </div>
            </form>
          </article>

          {/* Contenedor del ImageUploader, ahora usando el componente importado */}
          <div className="bg-[#F3F4F6] rounded-xl p-5 flex justify-center items-center">
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminHome;
