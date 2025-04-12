import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="text-gray-600 body-font h-full flex flex-col items-center justify-center ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium w-[90%]">
            Transformamos la manera de conectar profesionales de la educación
          </h1>
          <p className="pb-8 leading-relaxed w-[80%]">
            Subí tu curriculum y dejá que la inteligencia artificial haga el
            resto. Docenza analizará tu perfil y te contactará con las
            instituciones que buscan profesionales como vos.
          </p>

          <div className="flex justify-center">
            <Button className="mr-5 bg-blue-600 hover:bg-blue-500 cursor-pointer p-6">
              Tengo cuenta
            </Button>

            <Button
              variant="outline"
              className="cursor-pointer p-6 border-2 border-blue-600 text-blue-600 font-semibold hover:text-white hover:bg-blue-500 hover:border-blue-500"
            >
              Registrarme
            </Button>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 ">
          <Image src="/teacher.png" alt="Logo" width={600} height={50} />
        </div>
      </div>
    </section>
  );
}
