export default function Loading() {
  return (
    <div className="container-x flex items-center justify-center py-32">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-brand"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
