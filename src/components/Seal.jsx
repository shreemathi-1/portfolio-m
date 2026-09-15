// The one signature element of this design: a small "verified" seal
// that marks anything the visitor can independently check — a
// certificate, a live deployed link, a tracked GitHub/LeetCode stat.
export default function Seal({ children }) {
  return (
    <span className="seal">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 3v6c0 5-3.2 8-7 9-3.8-1-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 12.2l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  )
}
