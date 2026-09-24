import { Button as ButtonPrimitive } from "@base-ui/react/button"

export default function Button({ children, ...props }) {
  return (
    <ButtonPrimitive {...props}>
      {children}
    </ButtonPrimitive>
  )
}