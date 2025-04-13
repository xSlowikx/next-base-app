"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegisterDialog } from "./register-dialog"

const PasswordSection = () => (
  <div className="grid gap-3">
    <div className="flex items-center">
      <Label htmlFor="password">Contraseña</Label>
      <a
        href="#"
        className="ml-auto text-sm underline-offset-4 hover:underline"
      >
        ¿Olvidaste tu contraseña?
      </a>
    </div>
    <Input id="password" type="password" required />
  </div>
)

const LoginButton = () => (
  <Button type="submit" className="w-full">
    Iniciar sesión
  </Button>
)

interface FormWrapperProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  description: string
}

const FormWrapper = ({ children, description, className, ...props }: FormWrapperProps) => (
  <form className={cn("flex flex-col gap-6", className)} {...props}>
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-muted-foreground text-sm text-balance">
        {description}
      </p>
    </div>
    <div className="grid gap-6">
      {children}
    </div>
    <div className="text-center text-sm">
      ¿No tenés una cuenta?{" "}
      <RegisterDialog />
    </div>
  </form>
)

export function LoginForm({
  className,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>
      <Tabs defaultValue="professionals" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="professionals">Profesionales</TabsTrigger>
          <TabsTrigger value="institutions">Instituciones</TabsTrigger>
        </TabsList>
        <TabsContent value="professionals">
          <FormWrapper description="Ingresá tu email para iniciar sesión" {...props}>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <PasswordSection />
            <LoginButton />
          </FormWrapper>
        </TabsContent>
        <TabsContent value="institutions">
          <FormWrapper description="Ingresá tu identificador para iniciar sesión" {...props}>
            <div className="grid gap-3">
              <Label htmlFor="identifier">Identificador</Label>
              <Input id="identifier" type="text" placeholder="ID-123456" required />
            </div>
            <PasswordSection />
            <LoginButton />
          </FormWrapper>
        </TabsContent>
      </Tabs>
    </div>
  )
}
