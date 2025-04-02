import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import ProjectGallery from "@/components/project-gallery"

// Datos de proyectos - en una app real, esto vendría de una base de datos o CMS
const projects = [
  {
    id: "1",
    title: "Auditorio Institucional",
    slug: "auditorio-institucional",
    category: "Institucional",
    description:
      "Un auditorio moderno diseñado para una acústica y visibilidad óptimas, brindando una experiencia excepcional tanto para oradores como para el público.",
    client: "Concejo Deliberante",
    location: "Buenos Aires, Argentina",
    year: "2023",
    team: ["Matías Lombardi", "Lauria Martina", "Manzanelli Agostina"],
    coverImage: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>El proyecto del Auditorio Institucional fue diseñado para crear un espacio moderno para el compromiso cívico y el discurso público. El diseño prioriza una excelente acústica, líneas de visión claras y accesibilidad para todos los asistentes.</p>
      
      <p>La disposición escalonada de los asientos garantiza que cada lugar tenga una vista sin obstrucciones del escenario, mientras que la acústica cuidadosamente diseñada proporciona un sonido claro en todo el espacio sin necesidad de amplificación excesiva.</p>
      
      <p>Se prestó especial atención al flujo de personas a través del espacio, con áreas dedicadas para autoridades, prensa y público en general. El diseño también incorpora tecnología audiovisual de última generación para respaldar una amplia gama de eventos y presentaciones.</p>
      
      <p>Se integraron materiales sustentables y sistemas energéticamente eficientes en todo el proyecto, reflejando nuestro compromiso con la responsabilidad ambiental y la eficiencia operativa a largo plazo.</p>
    `,
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  // Otros proyectos se definirían aquí
]

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Proyecto No Encontrado",
    }
  }

  return {
    title: `${project.title} | Estudio Lombardi`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <Button asChild variant="ghost" className="mb-8 gap-2">
        <Link href="/projects">
          <ArrowLeft className="h-4 w-4" /> Volver a proyectos
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-lg">
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>

          <Separator className="my-12" />

          <ProjectGallery images={project.gallery} projectTitle={project.title} />
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Detalles del Proyecto</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Año</p>
                  <p className="text-muted-foreground">{project.year}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Cliente</p>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <p className="mb-2 font-medium">Equipo del Proyecto</p>
              <ul className="space-y-1 text-muted-foreground">
                {project.team.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

