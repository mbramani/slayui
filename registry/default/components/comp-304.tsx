import { ArrowRightIcon, Eclipse } from "lucide-react"

export default function Component() {
  return (
    <div className="dark bg-muted text-foreground px-4 py-3">
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <div className="flex grow gap-3">
          <Eclipse
            className="mt-0.5 shrink-0 opacity-60"
            size={16}
            aria-hidden="true"
          />
          <div className="flex grow flex-col justify-between gap-2 md:flex-row md:items-center">
            <p className="text-sm">
              We just added something awesome to make your experience even
              better.
            </p>
            <a href="#" className="group text-sm font-medium whitespace-nowrap">
              Learn more
              <ArrowRightIcon
                className="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
