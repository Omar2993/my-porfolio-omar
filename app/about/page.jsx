import { Archivo_Black, Inter, Cormorant_Garamond } from "next/font/google";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f8f7]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,167,255,0.18),transparent_55%)]"></div>

      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[radial-gradient(#000_0.5px,transparent_0.5px)] bg-size-[8px_8px]"></div>

      {/* Container */}
      <section className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-center px-6 pt-44 text-center lg:px-10">

        {/* Main Heading */}
        <h1
          className={`${archivo.className}
          leading-none
          tracking-[-0.08em]
          text-[72px]
          sm:text-[110px]
          md:text-[150px]
          lg:text-[210px]
          xl:text-[250px]
          text-[#141414]`}
        >
          ABOUT ME
        </h1>
                {/* Subtitle */}
        <p
          className={`${inter.className}
          mt-10
          text-[12px]
          sm:text-[14px]
          md:text-[16px]
          uppercase
          tracking-[0.55em]
          text-[#6d6d6d]`}
        >
          GET TO KNOW MORE ABOUT
        </p>

        {/* Script Text */}
        <h2
          className={`${cormorant.className}
          mt-2
          italic
          font-medium
          leading-none
          text-[#111111]
          text-[52px]
          sm:text-[70px]
          md:text-[90px]
          lg:text-[110px]`}
        >
          who i am.
        </h2>

      </section>
    </main>
  );
}