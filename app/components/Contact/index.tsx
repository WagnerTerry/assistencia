"use client";

import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

// Validation functions
const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const validatePhone = (phone: string) => {
  const regex = /^(?:\(\d{2}\)\s?)?\s*\d\s*\d{4}-?\d{4}$/;
  const cleanNumber = phone.replace(/\D/g, "");
  return regex.test(phone) || cleanNumber.length === 11;
};

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (send) {
      toast.error(
        "Você já enviou uma mensagem. Recarregue a página para enviar outra."
      );
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    if (!validatePhone(formData.telefone)) {
      toast.error(
        "Por favor, insira um telefone válido no formato (99) 9 9999-9999"
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
        setSend(true);
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Function to format phone while typing
  const formatPhone = (value: string) => {
    const cleanNumber = value.replace(/\D/g, "");
    let formattedNumber = cleanNumber;

    if (cleanNumber.length >= 11) {
      formattedNumber = `(${cleanNumber.slice(0, 2)}) ${cleanNumber.slice(
        2,
        3
      )} ${cleanNumber.slice(3, 7)}-${cleanNumber.slice(7, 11)}`;
    }

    return formattedNumber;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value);
    setFormData({ ...formData, telefone: formattedValue });
  };

  return (
    <section id="contato" className="py-16 bg-zinc-200 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          Fale Conosco
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Pelo canal de atendimento ao cliente estamos disponíveis para
              atendê-lo(a) da melhor forma.
            </h3>
            <div className="space-y-2">
              <p>(71) 9 9195-0873</p>
              <p>contato@playconsert.com.br</p>
              <p>Seg a Sex: 08:00 às 18:00</p>
              <p>Sáb 09:00 às 13:00</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="Seu melhor email"
              />
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="block text-sm font-medium mb-1"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                value={formData.telefone}
                onChange={handlePhoneChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="(00) 0 0000-0000"
                maxLength={16}
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                value={formData.mensagem}
                onChange={(e) =>
                  setFormData({ ...formData, mensagem: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 h-32"
                placeholder="Digite sua mensagem"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || send}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-500"
            >
              {loading ? "Enviando..." : send ? "Mensagem Enviada" : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
