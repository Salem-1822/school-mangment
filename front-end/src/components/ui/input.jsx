import * as React from "react"

const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={className}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }