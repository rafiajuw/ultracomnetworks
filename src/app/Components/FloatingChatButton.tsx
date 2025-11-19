// src/app/Components/FloatingChatButton.tsx
'use client';

export default function FloatingChatButton() {
  return (
    <button
      onClick={() => alert("Live chat coming soon!")}
      className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Open chat"
    >
      <svg
        className="w-7 h-7 text-white group-hover:animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  );
}