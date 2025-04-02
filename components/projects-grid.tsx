"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Datos de proyectos
const projects = [
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
  {
    id: "4",
    title: "Rediseño Plaza Ciudad",
    category: "Urbano",
    description: "Revitalización de una plaza pública con materiales sustentables y espacios verdes.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "rediseno-plaza-ciudad",
  },
  {
    id: "5",
    title: "Edificio de Oficinas Moderno",
    category: "Comercial",
    description: "Un espacio de oficinas flexible diseñado para la colaboración y productividad.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "edificio-oficinas-moderno",
  },
  {
    id: "6",
    title: "Departamentos Tipo Estudio",
    category: "Residencial",
    description: "Uso eficiente del espacio en departamentos tipo estudio urbanos.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "departamentos-tipo-estudio",
  },
]

// Categorías únicas para el filtro
const categories = ["Todos", ...new Set(projects.map((project) => project.category))]

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="text-sm"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
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
  )
}

