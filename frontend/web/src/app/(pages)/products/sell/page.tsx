"use client"

import { sellProduct } from "@/services/product.service";
import { useState } from "react";

export default function ProductSell() {

  const [productName, setProductName] = useState('');
  const [ram, setRam] = useState('');
  const [processor, setProcessor] = useState('');
  const [gpu, setGpu] = useState('');
  const [details, setDetails] = useState('');
  const [observations, setObservations] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productInfo = {
    name: productName,
    features: [
      { name: 'Memória RAM', value: ram },
      { name: 'Processador', value: processor },
      { name: 'GPU', value: gpu },
      { name: 'Mais detalhes', value: details },
      { name: 'Observações', value: observations }
    ]
  };


    const productSell = async () => {
      await sellProduct(productInfo);
      setIsSubmitted(true);
    }

    return (
        <div className="p-4 flex flex-col bg-bg-100">
    <p className="px-4 pt-2 text-xl">Nome do produto</p>
      <input
        className="p-4 h-12 rounded-xl m-3 text-white bg-bg-200"
        type="text"
        placeholder="Inserir nome"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      
      <p className="px-4 pt-2 text-xl">Memória RAM</p>
      <input
        className="p-4 h-12 rounded-xl m-3 text-white bg-bg-200"
        type="text"
        placeholder="Inserir"
        value={ram}
        onChange={(e) => setRam(e.target.value)}
      />

      <p className="px-4 pt-2 text-xl">Processador</p>
      <input
        className="p-4 h-12 rounded-xl m-3 text-white bg-bg-200"
        type="text"
        placeholder="Inserir"
        value={processor}
        onChange={(e) => setProcessor(e.target.value)}
      />

      <p className="px-4 pt-2 text-xl">GPU</p>
      <input
        className="p-4 h-12 rounded-xl m-3 text-white bg-bg-200"
        type="text"
        placeholder="Inserir"
        value={gpu}
        onChange={(e) => setGpu(e.target.value)}
      />

      <p className="px-4 pt-2 text-xl">Mais detalhes</p>
      <input
        className="p-4 h-12 rounded-xl m-3 text-white bg-bg-200"
        type="text"
        placeholder="Inserir"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <p className="px-4 pt-2 text-xl">Observações</p>
      <input
        className="p-4 h-12 rounded-xl m-3 text-white bg-bg-200"
        type="text"
        placeholder="Inserir"
        value={observations}
        onChange={(e) => setObservations(e.target.value)}
      />
      
      <a
        onClick={productSell}
        className="bg-primary-200 text-xl text-center py-2 m-2 rounded-xl hover:bg-slate-50 hover:text-blue-600"
        href="#"
      >
        Vender
      </a>
      {isSubmitted && (
        <div className="p-4 mt-4 text-green-600 bg-green-200 rounded-lg">
          <p>Produto inserido com sucesso!</p>
        </div>
      )}
          </div>
        );
}