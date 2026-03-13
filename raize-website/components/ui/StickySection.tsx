'use client'

export function StickySection({
  children,
  scrollHeight,
  className = ""
}: {
  children: React.ReactNode;
  scrollHeight: string;
  className?: string;
}) {
  return (
    <div style={{ height: scrollHeight }} className="relative">
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}
