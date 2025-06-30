"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ReactNode } from 'react';


export default function EschatonStorefront() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Quantum Nostalgia™",
      description: "Memories of futures that never happened.",
      price: "33⧋",
    },
    {
      id: 2,
      name: "Causality Derivatives",
      description: "Short time itself. Speculate on what was never meant to be.",
      price: "108⧋",
    },
    {
      id: 3,
      name: "Codex Impossibilis",
      description: "A book that writes itself backwards through time.",
      price: "∞⧋",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 font-mono">
      <h1 className="text-4xl md:text-6xl text-center mb-8 tracking-wide">
        ESCHATON IMMANENTIZATION CORP
      </h1>
      <p className="text-center text-sm text-gray-400 mb-12 italic">
        "Trading in temporal paradoxes and impossible futures."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-gray-900 border-white/10 hover:border-white/30 transition"
          >
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg text-green-400">{product.price}</span>
                <Button
                  variant="outline"
                  onClick={() => setSelectedProduct(product)}
                >
                  Acquire
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-6 rounded-2xl border border-white/20 max-w-md w-full text-center">
            <h3 className="text-2xl font-semibold mb-2">
              Purchase {selectedProduct.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              You are about to initiate a transaction in pure possibility.
            </p>
            <Input placeholder="Enter dimensional address" className="mb-4" />
            <Button className="w-full mb-2">Confirm Transaction</Button>
            <Button
              variant="ghost"
              className="text-red-400"
              onClick={() => setSelectedProduct(null)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
