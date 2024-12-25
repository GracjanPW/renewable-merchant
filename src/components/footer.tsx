import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-stone-900 ">
      <div className="max-w-6xl mx-auto text-stone-400 py-10 grid grid-cols-5 gap-20">
        <div>
            <a href="/" className="flex items-start space-x-2 md:space-x-4">
            <img src="/logo.svg" alt="logo" className="size-10 md:size-12" />
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-sky-100 leading-none">
                Renewer
                </h1>
                <p className="text-xs md:text-xs font-semibold text-slate-200">
                Renewable Energy Solutions
                </p>
            </div>
            </a>
        </div>
        <div className="space-y-1">
          <h1 className="font-bold text-stone-200 text-lg">Links</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Store</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="font-bold text-stone-200 text-lg">Products</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/">Wind Turbines</Link>
            <Link href="/">Solar Panels</Link>
            <Link href="/">EV chargers</Link>
            <Link href="/">Cables & Wires</Link>
            <Link href="/">Batteries</Link>
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="font-bold text-stone-200 text-lg">General</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/">Instruction Manuals</Link>
            <Link href="/">Latest News</Link>
            <Link href="/">Partners</Link>
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="font-bold text-stone-200 text-lg">Legal & Privacy</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <hr className="border-stone-700" />

      <div className="bg-stone-900 text-stone-200 text-center p-2">
        Copyright © 2024,  Renewer LTD
      </div>
    </footer>
  );
};
