export default function ServicePageLoading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-fern/30 border-t-fern animate-spin" />
        <p className="text-[13px] font-medium text-fern/70 tracking-wide">
          Loading
        </p>
      </div>
    </div>
  );
}
