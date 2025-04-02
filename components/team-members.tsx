import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

// Datos del equipo
const teamMembers = [
  {
    id: "1",
    name: "Matías Lombardi",
    role: "Arquitecto Principal & Fundador",
    bio: "Con más de 15 años de experiencia, Matías lidera nuestro equipo con pasión por el diseño innovador y la arquitectura sustentable.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    instagram: "https://instagram.com",
    email: "matias@estudiolombardi.com",
  },
  {
    id: "2",
    name: "Lauria Martina",
    role: "Arquitecta Senior",
    bio: "Lauria se especializa en arquitectura residencial y aporta una perspectiva única para crear espacios habitables funcionales y hermosos.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    instagram: "https://instagram.com",
    email: "lauria@estudiolombardi.com",
  },
  {
    id: "3",
    name: "Manzanelli Agostina",
    role: "Gerente de Proyectos",
    bio: "Agostina asegura que nuestros proyectos se entreguen a tiempo y con los más altos estándares, coordinando nuestro equipo y socios externos.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    instagram: "https://instagram.com",
    email: "agostina@estudiolombardi.com",
  },
]

export default function TeamMembers() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member) => (
        <div key={member.id} className="group flex flex-col items-center text-center">
          <div className="relative mb-4 h-64 w-64 overflow-hidden rounded-full">
            <Image
              src={member.imageUrl || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
          <p className="mb-3 text-sm font-medium text-muted-foreground">{member.role}</p>
          <p className="mb-4 text-muted-foreground">{member.bio}</p>
          <div className="flex gap-4">
            <Link href={member.instagram} className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

