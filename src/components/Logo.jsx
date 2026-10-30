/**
 * Brand mark: an "N" drawn like a structural truss — three members,
 * pinned joints, and a signal-blue node where the last member ends.
 * Strokes follow the text colour; joint "pins" punch through to the
 * surface behind (pass `pin` to match a different background).
 */
export default function Logo({ className = "h-4 w-4", pin = "var(--surface)" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <path
        d="M29 73V27L71 73V35"
        stroke="currentColor"
        strokeWidth="11.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="27" r="2.4" fill={pin} />
      <circle cx="29" cy="73" r="2.4" fill={pin} />
      <circle cx="71" cy="73" r="2.4" fill={pin} />
      <circle cx="71" cy="24.5" r="7.2" fill="var(--signal)" />
    </svg>
  );
}
