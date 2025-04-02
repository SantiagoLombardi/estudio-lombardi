import type { Metadata } from "next"
import ProjectsGrid from "@/components/projects-grid"

export const metadata: Metadata = {
  title: "Proyectos | Estudio Lombardi",
  description: "Explorá nuestros proyectos y diseños arquitectónicos",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Nuestros Proyectos</h1>
        <p className="max-w-2xl text-muted-foreground">
          Explorá nuestro portfolio de proyectos arquitectónicos que abarcan diseño residencial, comercial,
          institucional y urbano. Cada proyecto refleja nuestro compromiso con el diseño innovador y las prácticas
          sustentables.
        </p>
      </div>

      <ProjectsGrid />
    </div>
  )
}

