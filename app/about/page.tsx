import type { Metadata } from "next"
import Image from "next/image"
import TeamMembers from "@/components/team-members"

export const metadata: Metadata = {
  title: "Nosotros | Estudio Lombardi",
  description: "Conocé nuestro estudio de arquitectura, nuestro enfoque y nuestro equipo",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Espacio de trabajo del estudio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto flex h-full flex-col items-start justify-end p-6 pb-12 md:p-12 md:pb-20">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Nosotros</h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Estudio Lombardi fue fundado en 2010 con la visión de crear arquitectura que armonice forma, función y
                sustentabilidad. A lo largo de los años, nos convertimos en un equipo dinámico de arquitectos,
                diseñadores y planificadores dedicados a expandir los límites de la innovación arquitectónica.
              </p>
              <p>
                Nuestro camino comenzó con pequeños proyectos residenciales, pero nuestro compromiso con la excelencia y
                el diseño innovador rápidamente nos llevó a oportunidades en proyectos comerciales e institucionales más
                grandes. Hoy, trabajamos en diversos sectores, aportando nuestra perspectiva única y experiencia a cada
                proyecto.
              </p>
              <p>
                Creemos que la gran arquitectura nace de una profunda comprensión de las necesidades del cliente, el
                contexto del sitio y el impacto ambiental de nuestros diseños. Este enfoque holístico nos ha permitido
                crear espacios que no solo cumplen con los requisitos funcionales, sino que también inspiran y elevan la
                experiencia humana.
              </p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Espacio de trabajo del estudio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Nuestro Enfoque</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Diseño Centrado en las Personas</h3>
              <p className="text-muted-foreground">
                Ubicamos a las personas en el centro de nuestro proceso de diseño, creando espacios que mejoran la
                calidad de vida y fomentan el bienestar de quienes los utilizan.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Innovación Sustentable</h3>
              <p className="text-muted-foreground">
                Integramos prácticas sustentables y tecnologías innovadoras para minimizar el impacto ambiental mientras
                maximizamos el confort y la eficiencia.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Sensibilidad Contextual</h3>
              <p className="text-muted-foreground">
                Creemos que la arquitectura debe responder a su contexto, respetando el entorno cultural, histórico y
                físico en el que existe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Nuestro Equipo</h2>
        <TeamMembers />
      </section>
    </div>
  )
}

