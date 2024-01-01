"use client"
export default function NotFound() {
  window.onload = function () {
    window.location.href = "/";
  };
  return (
    <div className="w-full h-screen flex justify-center aling-center">
      <div className="flex-center-custom">
        <p class="font-bold text-5xl title">404 Error</p>
      </div>
    </div>
  );
}
