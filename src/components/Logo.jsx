export default function Logo({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <path d="M20 20H48V36H36V80H20V20Z" fill="currentColor" />
      <path d="M52 20H80V36H68V64H80V80H52V64H68V52H52V20Z" fill="currentColor" />
      <path d="M36 44L68 44" stroke="var(--signal)" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
