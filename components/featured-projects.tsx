import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Datos de proyectos destacados
const featuredProjects = [
  {
    id: "1",
    title: "Auditorio Institucional",
    category: "Institucional",
    description: "Un auditorio moderno diseñado para una acústica y visibilidad óptimas.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "auditorio-institucional",
  },
  {
    id: "2",
    title: "Complejo Habitacional Urbano",
    category: "Residencial",
    description: "Viviendas urbanas sustentables con espacios comunitarios y áreas verdes.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "complejo-habitacional-urbano",
  },
  {
    id: "3",
    title: "Casa Solar",
    category: "Residencial",
    description: "Vivienda energéticamente eficiente diseñada para maximizar la luz natural.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "casa-solar",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proyectos Destacados</h2>
            <p className="mt-2 text-muted-foreground">
              Una selección de nuestros trabajos más innovadores e impactantes
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link href="/projects">
              Ver todos los proyectos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 bg-transparent shadow-none transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="px-0 pt-4">
                  <div className="mb-1 text-sm font-medium text-muted-foreground">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

