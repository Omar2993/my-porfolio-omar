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
  <section className="max-w-[1600px] mx-auto px-4 py-20">

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Left */}
    <div className="rounded-3xl border border-gray-200 p-8 shadow-[inset_0_0_160px_rgba(0,0,0,0.07)]">

      <p className="tracking-[5px] text-gray-500 font-semibold">
        ABOUT ME
      </p>

      <h1 className="text-4xl lg:text-6xl font-bold mt-4 leading-tight">
        I build products
        <br />
        that feel simple,
        <br />
        fast & human.
      </h1>

      <p className="text-gray-500 mt-8 leading-8 text-lg">
        I'm Omar, a Full Stack Next.js Developer based in Bangladesh.
        I enjoy creating premium digital experiences with clean UI,
        smooth interactions, and scalable backend solutions.
      </p>

      <p className="text-gray-500 mt-6 leading-8 text-lg">
        My goal is to design products that not only look beautiful
        but also solve real problems and provide meaningful experiences
        for users.
      </p>

    </div>

    {/* Right */}
    <div className="rounded-3xl border border-gray-200 p-8 shadow-[inset_0_0_160px_rgba(0,0,0,0.07)] flex flex-col justify-between">

      <div>

        <p className="tracking-[5px] text-gray-500 font-semibold">
          EXPERIENCE
        </p>

        <div className="mt-8 space-y-8">

          <div>
            <h2 className="text-3xl font-bold">Frontend</h2>
            <p className="text-gray-500 mt-2">
              React.js • Next.js • Tailwind CSS
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Backend</h2>
            <p className="text-gray-500 mt-2">
              Node.js • Express.js • MongoDB
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Tools</h2>
            <p className="text-gray-500 mt-2">
              Git • GitHub • Vercel • Figma
            </p>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-12">

        <div className="rounded-2xl border p-6">
          <h1 className="text-5xl font-bold">15+</h1>
          <p className="text-gray-500 mt-2">
            Projects
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h1 className="text-5xl font-bold">1+</h1>
          <p className="text-gray-500 mt-2">
            Years Learning
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
  );
}