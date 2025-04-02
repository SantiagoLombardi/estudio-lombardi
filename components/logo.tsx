import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
            <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <rect y="20" width="100" height="10" fill="currentColor" />
        <rect y="45" width="100" height="10" fill="currentColor" />
        <rect y="70" width="100" height="10" fill="currentColor" />

      <span className="text-xl font-bold">Estudio Lombardi</span>
    </div>
  )
}

