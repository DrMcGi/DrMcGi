"use client";

import { useState } from "react";

type ConciergeChatProps = {
  /** Optional position of the chat widget */
  position?: "left" | "right";
};

export default function ConciergeChat({ position = "left" }: ConciergeChatProps) {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>([
    "Welcome to DrMcGi’s Concierge.",
    "How can we elevate your build today?",
  ]);
  const [msg, setMsg] = useState("");

  const send = () => {
    if (!msg.trim()) return;
    setLines((l) => [
      ...l,
      `You: ${msg}`,
      "Concierge: Noted. We’ll prepare a phased blueprint.",
    ]);
    setMsg("");
  };

  const containerPos = position === "left" ? "left-6" : "right-6";

  return (
    <div className={`fixed bottom-6 ${containerPos} z-40`}>
      {open && (
        <div className="w-[300px] p-4 rounded-xl glass-glow bg-ink/70">
          <div className="text-sm font-medium mb-2">Concierge</div>
          <div className="h-40 overflow-auto text-xs text-white/80 space-y-2">
            {lines.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="flex-1 px-2 py-1 rounded-md bg-ink border border-white/20 text-white text-xs"
              placeholder="Type a message..."
            />
            <button
              type="button"
              className="px-3 py-1 rounded-md bg-white text-ink text-xs"
              onClick={send}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        className="px-4 py-2 rounded-full bg-white text-ink text-sm shadow-lg"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close Concierge" : "Open Concierge"}
      </button>
    </div>
  );
}
