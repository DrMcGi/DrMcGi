"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function ConciergeWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-lg hover:opacity-90 transition">
            Concierge
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed bottom-6 right-6 z-50 w-[320px] bg-white rounded-xl p-5 shadow-xl">
            <Dialog.Title className="text-lg font-bold mb-3">Your Concierge</Dialog.Title>
            <p className="text-sm text-gray-700 mb-4">
              How can I assist you today?
            </p>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><button className="hover:underline">Book a demo</button></li>
              <li><button className="hover:underline">Request a callback</button></li>
              <li><button className="hover:underline">View pricing</button></li>
              <li><button className="hover:underline">Talk to support</button></li>
            </ul>
            <div className="mt-4 text-right">
              <Dialog.Close asChild>
                <button className="text-sm text-gray-500 hover:text-gray-700">Close</button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
