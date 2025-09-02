"use client"

import { useState } from 'react';
import { getReadableTextColor } from '../utils/color';

interface ColorCardProps {
  name: string;
  hex: string;
}

export default function ColorCard({ name, hex }: ColorCardProps) {
  const [showCopied, setShowCopied] = useState(false);
  const textColor = getReadableTextColor(hex);

  const handleClick = async () => {
    // Try to copy to clipboard with fallback for mobile browsers
    try {
      if (navigator?.clipboard && typeof navigator.clipboard.writeText === 'function' && window.isSecureContext) {
        await navigator.clipboard.writeText(hex);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 1500);
      } else {
        // Fallback for browsers that don't support clipboard API
        fallbackCopyTextToClipboard(hex);
      }
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Try fallback method
      fallbackCopyTextToClipboard(hex);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      textArea.style.opacity = "0";
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      
      // For mobile devices
      if (navigator.userAgent.match(/ipad|android|iphone/i)) {
        textArea.contentEditable = 'true';
        textArea.readOnly = false;
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 1500);
      } else {
        console.warn('Copy to clipboard not supported in this browser');
      }
    } catch (_) {
      console.warn('Copy to clipboard not supported in this browser');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="w-full h-full rounded-2xl shadow-sm transition-all duration-200 hover:translate-y-[-2px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 cursor-pointer"
        style={{ backgroundColor: hex }}
        aria-label={`Color ${name} hex ${hex}`}
      >
        <div className="absolute bottom-3 left-3 text-xs font-semibold tracking-tight leading-tight">
          <div style={{ color: textColor }}>{name}</div>
          <div style={{ color: textColor, opacity: 0.8 }}>{hex}</div>
        </div>
      </button>
      
      {/* Tooltip */}
      {showCopied && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-50 pointer-events-none"
          style={{ animation: 'fadeInOut 1.5s ease-in-out' }}
        >
          Copied!
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
