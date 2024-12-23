export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-6">
      <div className="flex items-center space-x-3 text-gray-400">
        <div className="h-6 w-6 opacity-50">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <p className="text-sm">crafted with care and dedication.</p>
      </div>
    </footer>
  )
}
