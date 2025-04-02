import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Mail, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | Estudio Lombardi",
  description: "Ponete en contacto con nuestro estudio de arquitectura",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Contactanos</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          ¿Tenés un proyecto en mente o querés saber más sobre nuestros servicios? Nos encantaría escucharte.
          Contactanos a través del formulario a continuación o mediante nuestra información de contacto.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-muted p-3">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nuestra Oficina</h3>
                <p className="text-muted-foreground">
                  Av. Arquitectura 123
                  <br />
                  Ciudad Autónoma de Buenos Aires
                  <br />
                  Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-muted p-3">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">info@estudiolombardi.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-muted p-3">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Teléfono</h3>
                <p className="text-muted-foreground">+54 11 4567-8900</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895476!2d-58.38375908417525!3d-34.60373446500075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1649175185359!5m2!1sen!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              title="Ubicación de la Oficina"
            ></iframe>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

