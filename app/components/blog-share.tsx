"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  HiCheck,
  HiOutlineClipboardDocument,
  HiOutlineShare,
  HiXMark,
} from "react-icons/hi2";

const TRANSITION_MS = 250;

export default function BlogShare({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : `/blog/${slug}`;

  function openModal() {
    setLinkCopied(false);
    setOpen(true);
    requestAnimationFrame(() => setModalVisible(true));
  }

  function closeModal() {
    setModalVisible(false);
    window.setTimeout(() => {
      setOpen(false);
      setLinkCopied(false);
    }, TRANSITION_MS);
  }

  function showToast() {
    setCopied(true);
    requestAnimationFrame(() => setToastVisible(true));
  }

  function hideToast(onComplete?: () => void) {
    setToastVisible(false);
    window.setTimeout(() => {
      setCopied(false);
      onComplete?.();
    }, TRANSITION_MS);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!copied || !toastVisible) return;

    const timer = window.setTimeout(() => hideToast(), 5000);
    return () => window.clearTimeout(timer);
  }, [copied, toastVisible]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      showToast();
    } catch {
      setCopied(false);
      setToastVisible(false);
      setLinkCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
      >
        <HiOutlineShare className="h-4 w-4" aria-hidden />
        Share
      </button>

      {copied &&
        createPortal(
          <button
            type="button"
            onClick={() => hideToast()}
            className={`fixed bottom-6 right-6 z-100 cursor-pointer rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-right text-sm text-neutral-700 shadow-2xl hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 ${
              toastVisible ? "animate-toast-in" : "animate-toast-out"
            }`}
          >
            Link copied to clipboard
          </button>,
          document.body,
        )}

      {open &&
        createPortal(
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <button
              type="button"
              aria-label="Close share dialog"
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${
                modalVisible ? "animate-fade-in" : "animate-fade-out"
              }`}
              onClick={closeModal}
            />

            <div
              className={`relative z-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-950 ${
                modalVisible ? "animate-scale-in" : "animate-scale-out"
              }`}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Share this post
                  </h2>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {title}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close"
                  onClick={closeModal}
                  className="cursor-pointer rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                >
                  <HiXMark className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Copy link
                </span>

                <div className="flex items-center gap-2">
                  <input
                    readOnly
                    value={shareUrl}
                    className="min-w-0 flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-700 outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                    onFocus={(event) => event.target.select()}
                  />

                  <button
                    type="button"
                    onClick={copyLink}
                    aria-label={linkCopied ? "Link copied" : "Copy link"}
                    className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
                  >
                    {linkCopied ? (
                      <HiCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <HiOutlineClipboardDocument className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
