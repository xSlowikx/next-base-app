import Image from "next/image";

export default function NonTeachingCategories() {
  return (
    <article className="w-full h-80 md:w-[55%] relative xl:w-[40%]">
      <div className="bg-[#69ab728e] absolute p-3 w-27 h-27 rounded-2xl border-2 border-[#1A4C2F] flex justify-center items-center left-15 top-8 md:w-35 md:h-35 md:left-10 md:top-8">
        <div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/icons/tool.png"
              width={50}
              height={50}
              alt="tool icon"
              className="h-10 w-10"
            />
          </div>

          <p className="text-center pt-2 text-sm md:text-medium">
            Mantenimiento
          </p>
        </div>
      </div>

      <div className="bg-[#69ab728e] absolute p-3 w-27 h-27 rounded-2xl border-2 border-[#1A4C2F] flex justify-center items-center right-15 top-8 md:w-35 md:h-35 md:left-50 md:top-8">
        <div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/icons/water.png"
              width={40}
              height={40}
              alt="water drop icon"
              className="object-contain w-8"
            />
          </div>

          <p className="text-center pt-2 text-sm md:text-medium">Limpieza</p>
        </div>
      </div>

      <div className="bg-[#69ab728e] absolute p-3 w-27 h-27 rounded-2xl border-2 border-[#1A4C2F] flex justify-center items-center left-15 bottom-10 md:w-35 md:h-35 md:left-25 md:top-38">
        <div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/icons/reception.png"
              width={50}
              height={50}
              alt="water drop icon"
              className="ml-2"
            />
          </div>

          <p className="text-center pt-2">Recepción</p>
        </div>
      </div>

      <div className="bg-[#69ab728e] absolute p-3 w-27 h-27 rounded-2xl border-2 border-[#1A4C2F] flex justify-center items-center right-15 bottom-10 md:w-35 md:h-35 md:left-68 md:top-38">
        <div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/icons/dinner.png"
              width={40}
              height={40}
              alt="water drop icon"
            />
          </div>

          <p className="text-center">Comedor</p>
        </div>
      </div>
    </article>
  );
}
