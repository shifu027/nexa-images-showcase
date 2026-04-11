"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";
import { Select } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validations";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setError(null);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero section">
        <div className="container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Entre em contato
          </h1>
          <p className="text-xl text-gray-600">
            Nossa equipe está pronta para ajudar. Responderemos em até 24 horas.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Como podemos ajudar?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Seja para tirar dúvidas sobre planos, precisa de suporte técnico ou
                  quer conhecer melhor o Nutri, estamos aqui.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    title: "E-mail",
                    value: "contato@nutri.com.br",
                    detail: "Resposta em até 24h",
                  },
                  {
                    icon: Phone,
                    title: "Telefone",
                    value: "(11) 99999-9999",
                    detail: "Seg–Sex, 9h–18h",
                  },
                  {
                    icon: MessageSquare,
                    title: "Chat online",
                    value: "Disponível no painel",
                    detail: "Seg–Sex, 9h–18h",
                  },
                  {
                    icon: MapPin,
                    title: "Endereço",
                    value: "Av. Paulista, 1000",
                    detail: "São Paulo, SP",
                  },
                  {
                    icon: Clock,
                    title: "Horário de atendimento",
                    value: "Segunda a Sexta",
                    detail: "9h às 18h (Horário de Brasília)",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 flex-shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.title}</p>
                        <p className="font-medium text-gray-900">{item.value}</p>
                        <p className="text-sm text-gray-500">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                {sent ? (
                  <div className="text-center py-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 mx-auto mb-4">
                      <MessageSquare className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                    <p className="text-gray-600">
                      Obrigado pelo contato. Nossa equipe responderá em até 24 horas.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
                    {error && <Alert variant="destructive" className="mb-4">{error}</Alert>}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" required>Nome</Label>
                          <Input id="name" placeholder="Seu nome" {...register("name")} />
                          {errors.name && <p className="form-error">{errors.name.message}</p>}
                        </div>
                        <div>
                          <Label htmlFor="email" required>E-mail</Label>
                          <Input id="email" type="email" placeholder="seu@email.com" {...register("email")} />
                          {errors.email && <p className="form-error">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" required>Assunto</Label>
                        <Select id="subject" {...register("subject")}>
                          <option value="">Selecione o assunto</option>
                          <option value="Dúvida sobre planos">Dúvida sobre planos</option>
                          <option value="Suporte técnico">Suporte técnico</option>
                          <option value="Parceria">Parceria</option>
                          <option value="Outro">Outro</option>
                        </Select>
                        {errors.subject && <p className="form-error">{errors.subject.message}</p>}
                      </div>

                      <div>
                        <Label htmlFor="message" required>Mensagem</Label>
                        <Textarea
                          id="message"
                          placeholder="Descreva sua dúvida ou necessidade..."
                          rows={5}
                          {...register("message")}
                        />
                        {errors.message && <p className="form-error">{errors.message.message}</p>}
                      </div>

                      <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                        Enviar mensagem
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
