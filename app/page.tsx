import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import FeaturedProjects from "@/components/featured-projects"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Proyecto arquitectónico"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto flex h-full flex-col items-start justify-end p-6 pb-20 md:p-12 md:pb-32">
            <div className="max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Creando espacios que inspiran
              </h1>
              <p className="mb-8 text-lg text-gray-200 md:text-xl">
                Diseñamos soluciones arquitectónicas innovadoras que transforman entornos y mejoran la vida cotidiana.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  Ver nuestros proyectos <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Nuestro enfoque arquitectónico</h2>
              <p className="mb-6 text-muted-foreground">
                Creemos en crear espacios que no solo sean estéticamente atractivos sino también funcionales y
                sustentables. Nuestros diseños surgen de una profunda comprensión de las necesidades de nuestros
                clientes y un compromiso con la excelencia.
              </p>
              <Button asChild variant="outline" className="w-fit">
                <Link href="/about">Conocé más sobre nosotros</Link>
              </Button>
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
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Contact CTA */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Trabajemos juntos</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            ¿Tenés un proyecto en mente? Nos encantaría escucharte. Contactanos para conversar sobre cómo podemos dar
            vida a tu visión.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contactanos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

