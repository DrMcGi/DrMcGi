"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function ServiceModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:opacity-90 transition">
          View Services
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 shadow-xl">
          <Dialog.Title className="text-xl font-bold mb-4">Our Services</Dialog.Title>
          <ul className="space-y-2 text-gray-800">
            <li>Luxury SaaS Architecture</li>
            <li>Full-stack Development</li>
            <li>UI/UX Concierge</li>
            <li>Performance Optimization</li>
            <li>Royalty-Linked Community Platforms</li>
          </ul>
          <div className="mt-6 text-right">
            <Dialog.Close asChild>
              <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
                Close
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
