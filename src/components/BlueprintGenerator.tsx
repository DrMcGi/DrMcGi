// src/components/BlueprintGenerator.tsx
"use client";

export default function BlueprintGenerator({
  selected,
  total,
}: {
  selected: Set<string>;
  total: number;
}) {
  const handleDownload = () => {
    const content = `
      <html>
      <head>
        <meta charset="utf-8" />
        <title>Blueprint</title>
        <style>
          body { font-family: system-ui, sans-serif; padding: 32px; color: #222; }
          h1 { font-size: 22px; margin-bottom: 12px; }
          .tag { display:inline-block; padding:6px 10px; border-radius:8px; background:#f5d06f22; border:1px solid #f5d06f; margin:4px; }
          .row { margin: 6px 0; }
        </style>
      </head>
      <body>
        <h1>DrMcGi’s SaaS Co. — Blueprint</h1>
        <div class="row"><strong>Selected features:</strong></div>
        <div>${Array.from(selected).map((f) => `<span class="tag">${f}</span>`).join("")}</div>
        <div class="row" style="margin-top:12px;"><strong>Estimated investment:</strong> R${total.toLocaleString()}</div>
        <div class="row" style="margin-top:18px;">This blueprint is a summary. A concierge will follow up with phased delivery and timelines.</div>
      </body>
      </html>
    `;
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "DrMcGi_Blueprint.html";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8 fade-up">
      <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow flex items-center justify-between">
        <div>
          <div className="font-display text-lg">Generate your blueprint</div>
          <div className="text-white/70 text-sm">Download a luxury-styled summary of your selections.</div>
        </div>
        <button className="btn-primary" onClick={handleDownload}>Download blueprint</button>
      </div>
    </section>
  );
}
