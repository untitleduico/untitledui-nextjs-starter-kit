"use client";

import { useCallback, useState } from "react";

const DEFAULT_TIMEOUT = 2000;

/**
 * Custom hook to copy text to the clipboard.
 *
 * @returns {Object} - An object containing:
 *  - `copied` (string | boolean): The state indicating whether the text has been copied.
 *  - `copy` (function): The function to copy text to the clipboard.
 */
export const useClipboard = () => {
    const [copied, setCopied] = useState<string | boolean>(false);

    // Fallback function for older browsers
    const fallback = (text: string, id?: string) => {
        try {
            // Textarea to copy the text to the clipboard
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "absolute";
            textArea.style.left = "-99999px";

            document.body.appendChild(textArea);
            textArea.select();

            const success = document.execCommand("copy");
            textArea.remove();

            setCopied(id || true);
            setTimeout(() => setCopied(false), DEFAULT_TIMEOUT);

            return success ? { success: true } : { success: false, error: new Error("execCommand returned false") };
        } catch (err) {
            return {
                success: false,
                error: err instanceof Error ? err : new Error("Fallback copy failed"),
            };
        }
    };

    /**
     * Function to copy text to the clipboard using the modern clipboard API.
     * Falls back to the fallback function if the modern API fails.
     *
     * @param {string} text - The text to be copied.
     * @param {string} [id] - Optional identifier to set the copied state.
     * @returns {Promise<Object>} - A promise that resolves to an object containing:
     *  - `success` (boolean): Whether the copy operation was successful.
     *  - `error` (Error | undefined): The error object if the copy operation failed.
     */
    const copy = useCallback(async (text: string, id?: string) => {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(text);

                setCopied(id || true);
                setTimeout(() => setCopied(false), DEFAULT_TIMEOUT);

                return { success: true };
            } catch (err) {
                // If modern method fails, try fallback
                return fallback(text, id);
            }
        }
        return fallback(text);
    }, []);

    return { copied, copy };
};
