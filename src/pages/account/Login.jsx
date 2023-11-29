import React, { useState } from "react"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        // Lógica de sucesso, redirecionamento ou exibição de mensagem
        console.log("Login bem-sucedido!")
      } else {
        // Lógica para lidar com erros na resposta
        const data = await response.json()
        console.error("Erro no login:", data.error)
      }
    } catch (error) {
      console.error("Erro ao processar login:", error.message)
    }
  }

  return (
    <>
      <div className="bg-gray-200 p-6 max-w-md my-10 mx-auto rounded-md shadow-md">
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
          type="text"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 bg-blue-500 text-white rounded-md"
          onClick={handleLogin}
        >
          Entrar
        </button>
        <Link
          href="/account/Create"
          className="block text-center text-blue-500 mt-2"
        >
          Não possui uma conta? Registre-se aqui.
        </Link>
      </div>
    </>
  )
}
