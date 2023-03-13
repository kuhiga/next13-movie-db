"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      Thi is not loading up: {error.message}
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}
