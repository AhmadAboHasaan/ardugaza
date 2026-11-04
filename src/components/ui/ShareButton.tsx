'use client';
import { useEffect, useRef, useState } from 'react';
import { Check, Share2 } from 'lucide-react';

type Props = {
  title: string;
  text: string;
  /** The page's public address, so a share never carries a preview's URL. */
  url: string;
  label?: string;
  variant?: 'outline' | 'text';
  className?: string;
};

/**
 * Share a page the way the device shares things: the system sheet on phones,
 * and a copied link everywhere else, with a word to say it worked.
 */
export function ShareButton({
  title,
  text,
  url,
  label = 'Share',
  variant = 'outline',
  className = '',
}: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const share = async () => {
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error) {
        if ((error as Error).name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const field = document.createElement('textarea');
      field.value = url;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2600);
  };
  return (
    <button
      type="button"
      className={`link-button link-button--${variant} share-button ${className}`}
      onClick={share}
      data-copied={copied ? '' : undefined}
    >
      {copied ? (
        <Check size={20} aria-hidden="true" />
      ) : (
        <Share2 size={20} aria-hidden="true" />
      )}
      <span>{copied ? 'Link copied' : label}</span>
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'The link to this page is copied.' : ''}
      </span>
    </button>
  );
}
