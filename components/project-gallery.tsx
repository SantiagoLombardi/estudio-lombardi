"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectGalleryProps {
  images: string[]
  projectTitle: string
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Galería del Proyecto</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <Dialog
            key={index}
            open={isDialogOpen && currentImageIndex === index}
            onOpenChange={(open) => {
              setIsDialogOpen(open)
              if (open) setCurrentImageIndex(index)
            }}
          >
            <DialogTrigger asChild>
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded-md">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${projectTitle} - Imagen ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
              <div className="relative flex h-full w-full items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 z-50 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Cerrar</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Imagen anterior</span>
                </Button>
                <div className="relative h-[80vh] w-full">
                  <Image
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${projectTitle} - Imagen ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Siguiente imagen</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

