'use client'
import { useForm } from 'react-hook-form'
import CustomButton from '@/components/custom-btn'

type FormValues = {
  name: string
  email: string
  message: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      alert(result.message)

      if (result.success) reset() // clear form after success
    } catch (err) {
      console.error(err)
      alert("Something went wrong, please try again.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-[50%] bg-white rounded-2xl shadow-lg p-6 space-y-8 py-10"
    >
      {/* Name */}
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Your Name"
          {...register('name', {
            required: 'Name is required',
            pattern: {
              value: /^[A-Za-z\s]+$/, // only letters + spaces
              message: 'Name must only contain letters',
            },
          })}
		  	onKeyDown={(e) => {
							if (
								!/[a-zA-Z]/.test(e.key) &&
								e.key !== 'Backspace' &&
								e.key !== 'Tab'
							) {
								e.preventDefault() // block numbers, symbols, spaces
							}
						}}
          className={`w-full border rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 ${
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:ring-blue-500'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Your Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          })}
          className={`w-full border rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:ring-blue-500'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <textarea
          placeholder="Your Message"
          {...register('message', {
            required: 'Message is required',
          })}
          className={`w-full border rounded-lg px-4 py-4 text-lg h-38 resize-none focus:outline-none focus:ring-2 ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:ring-blue-500'
          }`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <CustomButton title="Submit" />
    </form>
  )
}

export default Form
