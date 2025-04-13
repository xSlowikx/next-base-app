"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

const ProfessionalForm = () => {
  const [date, setDate] = useState<Date>()

  return (
    <form className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstName">Nombre</Label>
          <Input id="firstName" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Apellido</Label>
          <Input id="lastName" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div className="grid gap-2">
        <Label>Fecha de nacimiento</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address">Dirección</Label>
        <Input id="address" placeholder="Calle y número" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="province">Provincia</Label>
          <Input id="province" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="municipality">Municipio</Label>
          <Input id="municipality" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="city">Ciudad</Label>
        <Input id="city" required />
      </div>
      <Button type="submit" className="w-full">
        Registrarse
      </Button>
    </form>
  )
}

const InstituteForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid gap-2">
        <Label htmlFor="identifier">Identificador</Label>
        <Input id="identifier" placeholder="ID-123456" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="instituteName">Nombre del instituto</Label>
        <Input id="instituteName" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="instituteAddress">Dirección del instituto</Label>
        <Input id="instituteAddress" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="responsible">Responsable</Label>
        <Input id="responsible" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="document">Documento de validación</Label>
        <Input
          id="document"
          type="file"
          accept=".pdf"
          className="cursor-pointer"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Registrarse
      </Button>
    </form>
  )
}

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Registrate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear una cuenta</DialogTitle>
          <DialogDescription>
            Completa el formulario para registrarte en la plataforma.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="professionals" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="professionals">Profesionales</TabsTrigger>
            <TabsTrigger value="institutions">Instituciones</TabsTrigger>
          </TabsList>
          <TabsContent value="professionals">
            <ProfessionalForm />
          </TabsContent>
          <TabsContent value="institutions">
            <InstituteForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
} 