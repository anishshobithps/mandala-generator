import { Component, type ReactNode } from "react"
import { WarningOctagonIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error("Mandala rendering error:", error)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-background p-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-lg bg-destructive/10 p-3">
              <WarningOctagonIcon
                size={32}
                className="text-destructive"
                weight="fill"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground">
                Oops! Something went wrong
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                The mandala generator encountered an error. Please try again.
              </p>
              {this.state.error && (
                <pre className="mt-3 max-w-sm overflow-auto rounded bg-muted p-2 text-left text-xs text-muted-foreground">
                  {this.state.error.message}
                </pre>
              )}
            </div>
            <Button onClick={this.handleReset} size="sm">
              Try Again
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
