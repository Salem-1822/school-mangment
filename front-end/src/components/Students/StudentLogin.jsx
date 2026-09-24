
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import axiosClient from "@/axiosClient"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form.jsx"

import { Input } from "@/components/ui/input.jsx"
import Button from "@/components/ui/button.jsx"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(2, "Email must contain at least 2 characters")
    .max(50, "Email must not exceed 50 characters"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(30, "Password must not exceed 30 characters"),
})

export default function StudentLogin() {
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async values => {
    try {
      console.log("VALUES SENT:", values)

      // Get CSRF cookie
      await axiosClient.get("/sanctum/csrf-cookie")

      // Login
      const response = await axiosClient.post("/login", values)

      console.log("LOGIN SUCCESS:", response.status)
      console.log("LOGIN RESPONSE:", response.data)

      // Redirect to Student Dashboard
      navigate("/student/dashboard")

    } catch (error) {
      console.log("LOGIN STATUS:", error.response?.status)
      console.log("LOGIN DATA:", error.response?.data)
      console.log("LOGIN ERRORS:", error.response?.data?.errors)
    }
  }

  function onError(errors) {
    console.log("FORM ERRORS:", errors)
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">

      <div>
        <h1 className="text-2xl font-bold">
          Student Login
        </h1>

        <p className="text-sm text-muted-foreground">
          Enter your email and password to login.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-6"
        >

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>

                <FormLabel>
                  Email
                </FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    placeholder="student@example.com"
                    {...field}
                  />
                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>

                <FormLabel>
                  Password
                </FormLabel>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}

            login
          </Button>

        </form>
      </Form>

    </div>
  )
}
// ```

// دابا الـ flow ديالك هو:

// ```text
// Login
//   ↓
// GET /sanctum/csrf-cookie
//   ↓
// POST /login
//   ↓
// 200 OK
//   ↓
// navigate("/student/dashboard")
//   ↓
// Student Dashboard
// ```

// وبما أن `POST /login` عندك رجع بالفعل `200`، المفروض دابا منين تضغط **Login** تمشي مباشرة لـ:

// ```text
// http://localhost:3000/student/dashboard
// ```

// وتشوف:

// ```text
// hello from dashboard
// ```

// إلا وقع هادشي، فالمرحلة ديال **Login → Dashboard** خدامة.
