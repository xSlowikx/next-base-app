"use client"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(false)

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {!showLoginForm ? (
              <div className="flex flex-col gap-6 text-center">
                <h1 className="text-2xl font-medium">
                  Transformamos la manera de conectar profesionales de la educación
                </h1>
                <p className="text-sm text-muted-foreground">
                  Cargá tu curriculum y dejanos el resto, vamos a analizar tu perfil y te vamos a poner en contacto con las instituciones que buscan
                  profesionales como vos.
                </p>
                <div className="flex flex-col gap-4">
                  <Button className="cursor-pointer hover:cursor-pointer" onClick={() => setShowLoginForm(true)}>Alla vamos!</Button>
                </div>
              </div>
            ) : (
              <LoginForm />
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <Image
          src="/teacher.png"
          alt="Teacher Image"
          className="object-cover dark:brightness-[0.2] dark:grayscale"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
