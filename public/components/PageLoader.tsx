"use client";

export default function PageLoader({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="page-loader">
      <div className="spinner"></div>
      <p>Loading blog...</p>
    </div>
  );
}
