// Requerido si se usa TypeScript
import React, { useState, type ChangeEvent } from "react";

// Definición del componente ImageUploader
// Recibe un prop para notificar al padre sobre la imagen subida.
interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  // El estado de la vista previa de la imagen ahora es LOCAL a este componente.
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Función para manejar la subida del archivo
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Crea la URL de vista previa y notifica al componente padre
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      // Llama a la función prop para que AdminHome sepa qué archivo se subió.
      onImageUpload(file);
    }
  };

  // Función para "Eliminar" la imagen (limpiar la vista previa)
  const handleRemoveImage = () => {
    if (imagePreview) {
      // Limpia la URL del objeto para liberar memoria (Buena práctica)
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);
    // Si el padre necesita saber que se eliminó, se agregaría otra prop de callback.
  };

  // --- Contenido de la Imagen Subida ---
  const uploadedImageContent = (
    <div className="relative w-full h-full p-0">
      {" "}
      {/* Quitar padding/margin extra si no es necesario */}
      <img
        src={imagePreview ?? ""}
        alt="Foto Subida"
        className="w-full h-full object-cover rounded-3xl"
      />
      {/* Si agregas las líneas de análisis aquí, se vería: */}
      {/* <div className="absolute inset-0">
                <LinesOverlay />
            </div> */}
    </div>
  );

  // --- Contenido de Carga de Archivo ---
  const uploadPromptContent = (
    <label
      htmlFor="fileElement"
      className="flex flex-col items-center p-12 cursor-pointer" // Añadir cursor-pointer
    >
      {/* ... Tu SVG y texto de subida (código omitido por espacio, usa el tuyo) ... */}
      <span className="bg-[#D4AF37]/20 w-28 h-28 rounded-full cursor-pointer flex justify-center items-center mb-8">
        <svg
          width="51"
          height="41"
          viewBox="0 0 51 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_93_715)">
            <path
              d="M11.4697 38.2324C5.13748 38.2324 0 33.0949 0 26.7627C0 21.7606 3.20197 17.5073 7.66241 15.9381C7.65445 15.7231 7.64648 15.508 7.64648 15.293C7.64648 8.25183 13.3495 2.54883 20.3906 2.54883C25.1139 2.54883 29.2319 5.11359 31.4382 8.93683C32.6489 8.12439 34.1145 7.64648 35.6836 7.64648C39.9051 7.64648 43.3301 11.0715 43.3301 15.293C43.3301 16.2647 43.1469 17.1887 42.8203 18.0489C47.4719 18.9888 50.9766 23.1067 50.9766 28.0371C50.9766 33.6684 46.4126 38.2324 40.7812 38.2324H11.4697ZM17.7621 20.9482C17.0134 21.6969 17.0134 22.9076 17.7621 23.6483C18.5109 24.3891 19.7216 24.3971 20.4623 23.6483L23.5687 20.542V31.2231C23.5687 32.2825 24.421 33.1348 25.4803 33.1348C26.5397 33.1348 27.3919 32.2825 27.3919 31.2231V20.542L30.4983 23.6483C31.247 24.3971 32.4577 24.3971 33.1985 23.6483C33.9392 22.8996 33.9472 21.6889 33.1985 20.9482L26.8264 14.5761C26.0777 13.8274 24.867 13.8274 24.1263 14.5761L17.7542 20.9482H17.7621Z"
              fill="#0040FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_93_715">
              <path d="M0 0H50.9766V40.7812H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="text-2xl font-semibold text-[#1A1A1A] flex flex-col items-center gap-3">
        Arrastra tu foto aquí{" "}
        <span className="text-[#6B7280] text-xl font-normal">
          o haz clic para seleccionar
        </span>
        <span className="text-[#6B7280] text-xl font-normal">
          JPG, PNG o WebP (máx. 10MB)
        </span>
      </span>
    </label>
  );

  return (
    <div
      className="relative flex flex-col items-center justify-center max-w-[435px] w-full bg-white rounded-3xl shadow-lg"
      style={{ minHeight: "400px" }} // Altura mínima para que el diseño no se rompa
    >
      <input
        type="file"
        id="fileElement"
        className="hidden"
        onChange={handleFileChange}
        accept=".jpg,.png,.webp"
      />

      {/* Renderizado condicional */}
      {imagePreview ? uploadedImageContent : uploadPromptContent}

      {/* Si la imagen está subida, mostrar el botón de eliminar aquí también */}
      {imagePreview && (
        <button
          onClick={handleRemoveImage}
          className="absolute top-4 right-4 text-white bg-red-500/80 hover:bg-red-600/90 rounded-full p-2 z-20 text-sm font-semibold"
        >
          X
        </button>
      )}
    </div>
  );
};

export default ImageUploader;
