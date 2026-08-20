"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_NUMBER, trackInitiateCheckout } from "@/lib/tracking";

const PRODUTOS = {
  avulsa: { label: "Porção avulsa (10ml) — R$ 120", preco: "R$ 120" },
  kit: { label: "Kit Descoberta (5 fragrâncias) — R$ 520", preco: "R$ 520" },
} as const;

type ProdutoKey = keyof typeof PRODUTOS;

export default function PedidoPage() {
  const [produto, setProduto] = useState<ProdutoKey>("avulsa");
  const [fragrancias, setFragrancias] = useState("");
  const [nome, setNome] = useState("");
  const [bairro, setBairro] = useState("");

  const podeEnviar = nome.trim() !== "" && fragrancias.trim() !== "" && bairro.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!podeEnviar || !WHATSAPP_NUMBER) return;

    trackInitiateCheckout();

    const linhas = [
      `Olá! Quero fechar um pedido:`,
      ``,
      `Produto: ${PRODUTOS[produto].label}`,
      `Fragrância(s) desejada(s): ${fragrancias}`,
      `Nome: ${nome}`,
      `Bairro/entrega: ${bairro}`,
    ];
    const mensagem = encodeURIComponent(linhas.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-marfim text-carvao">
      <Section>
        <Container>
          <div className="max-w-xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-display font-bold headline text-bordo">Finalizar pedido</h1>
              <p className="text-carvao/70">
                Por enquanto fechamos pedidos direto pelo WhatsApp — pagamento automático chega em breve.
                Preencha abaixo e confirme com a gente por lá.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <fieldset className="space-y-3">
                <legend className="font-bold">Produto</legend>
                {(Object.keys(PRODUTOS) as ProdutoKey[]).map((key) => (
                  <label
                    key={key}
                    className={`flex items-center gap-3 border rounded p-4 cursor-pointer transition-colors ${
                      produto === key ? "border-ambar bg-ambar/10" : "border-carvao/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name="produto"
                      value={key}
                      checked={produto === key}
                      onChange={() => setProduto(key)}
                      className="accent-ambar"
                    />
                    {PRODUTOS[key].label}
                  </label>
                ))}
              </fieldset>

              <div className="space-y-2">
                <label htmlFor="fragrancias" className="block font-bold">
                  Fragrância(s) desejada(s)
                </label>
                <input
                  id="fragrancias"
                  type="text"
                  required
                  value={fragrancias}
                  onChange={(e) => setFragrancias(e.target.value)}
                  placeholder="Ex: Sauvage, Bleu de Chanel..."
                  className="w-full border border-carvao/20 rounded px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="nome" className="block font-bold">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full border border-carvao/20 rounded px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="bairro" className="block font-bold">
                  Bairro / referência de entrega (Cambé ou Londrina)
                </label>
                <input
                  id="bairro"
                  type="text"
                  required
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  className="w-full border border-carvao/20 rounded px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full text-lg" disabled={!podeEnviar}>
                Enviar pedido pelo WhatsApp
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </div>
  );
}
