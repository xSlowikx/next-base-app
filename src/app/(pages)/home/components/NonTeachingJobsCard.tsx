export default function NonTeachingJobsCard() {
  return (
    <article className="w-full md:w-[45%] md:h-80 xl:w-[60%] flex items-center justify-center p-6 bg-[url('/patterns/lines.png')] bg-cover bg-center">
      <div className="w-full max-w-xs ">
        <div className="p-6">
          <h1 className="text-[#1b4d32] font-semibold text-3xl mb-2">
            ¿Sos personal
            <br />
            no docente?
          </h1>

          <p className="text-[#1b1b1b] text-base mb-6">
            Trabajá en el mundo educativo,
            <br />
            más allá del aula
          </p>

          <button
            type="button"
            className="bg-[#eb6a4a] text-white text-base font-normal rounded-full px-6 py-2 hover:bg-[#d85a3b] transition-colors cursor-pointer"
          >
            Ver empleos
          </button>
        </div>
      </div>
    </article>
  );
}
