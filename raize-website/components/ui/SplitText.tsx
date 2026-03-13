'use client'

export function SplitText({
  text,
  by,
  className = ""
}: {
  text: string;
  by: 'char' | 'word';
  className?: string;
}) {
  const items = by === 'char' ? text.split('') : text.split(' ');

  return (
    <>
      {/* Screen reader accessible version — always visible to assistive tech */}
      <span className="sr-only">{text}</span>

      {/* Visual animated version — hidden from screen readers */}
      <span aria-hidden="true" className={className}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            <span style={{ display: 'inline-block' }}>
              {item === ' ' ? '\u00A0' : item}
            </span>
          </span>
        ))}
      </span>
    </>
  );
}
