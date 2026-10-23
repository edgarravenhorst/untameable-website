const stars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;

export function ProcessBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] overflow-hidden"
    >
      {stars.map((id) => (
        <span key={id} className="process-light" />
      ))}
    </div>
  );
}
