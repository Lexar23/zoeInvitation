import { INVITATION_CONFIG } from "@/config/invitation";

export default function Footer() {
  return (
    <footer className="py-4 px-6 text-center text-stone-800 transparentCard m-4 mb-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        <p className="text-2xl md:text-3xl font-serif italic text-rose-900">
          "{INVITATION_CONFIG.footerMessage}"
        </p>
        <div className="w-12 h-[1px] bg-rose-300 my-4" />
        <p className="text-sm font-light text-rose-800 tracking-widest uppercase">
          Te esperamos
        </p>
      </div>
    </footer>
  );
}
