"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function ContactWizard() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="px-5 py-2.5 rounded-lg border border-white/20 text-white/90 hover:border-white/40 transition">
          Contact
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-40" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-2xl">
            <Dialog.Title className="text-2xl font-bold mb-4">Contact Us</Dialog.Title>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
            <div className="mt-4 text-right">
              <Dialog.Close asChild>
                <button className="text-sm text-gray-500 hover:text-gray-700">Cancel</button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
