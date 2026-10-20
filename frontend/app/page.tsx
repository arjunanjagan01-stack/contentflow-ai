"use client";

import { useEffect, useState } from "react";

const API_URL = "https://contentflow-ai-lds0.onrender.com";

export default function Home() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(`Backend is ${data.status} (${data.service} service)`))
      .catch(() => setStatus("Backend is not reachable"));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">ContentFlow AI</h1>
      <p className="text-lg mb-6">Live SaaS Application</p>
      <div className="rounded bg-slate-700 px-6 py-4">{status}</div>
    </main>
  );
}