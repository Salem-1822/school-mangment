import * as React from "react"
import {
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

const FormFieldContext = React.createContext({})

function FormField({ name, ...props }) {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        name={name}
        {...props}
      />
    </FormFieldContext.Provider>
  )
}

const FormItemContext = React.createContext({})

function FormItem({ className, ...props }) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, ...props }) {
  const { id } = React.useContext(FormItemContext)

  return (
    <Label
      htmlFor={`${id}-form-item`}
      className={cn(className)}
      {...props}
    />
  )
}

function FormControl({ children, ...props }) {
  const { id } = React.useContext(FormItemContext)

  return React.cloneElement(children, {
    id: `${id}-form-item`,
    ...props,
  })
}

function FormMessage({ className, children, ...props }) {
  const { name } = React.useContext(FormFieldContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(name, formState)

  const body = fieldState.error
    ? String(fieldState.error.message)
    : children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      className={cn("text-sm text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
}