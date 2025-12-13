// app/[id]/location/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { sections } from "@/utils/sections";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return sections.map((section) => ({
    id: section.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const question = sections.find((q) => q.id.toString() === id);

  if (!question) {
    return {
      title: "Lokasyon Bulunamadı",
    };
  }

  return {
    title: `Location`,
    description: question.location.description,
  };
}

export default async function LocationPage({ params }: Props) {
  const { id } = await params;
  const section = sections.find((q) => q.id.toString() === id);

  if (!section) {
    notFound();
  }

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            {`${section.id}. Soru`}
          </h1>
          <h1 className="text-2xl md:text-6xl font-serif font-bold mb-4 text-orange-300 tracking-wider">
            Lokasyon
          </h1>
        </header>

        {/* Location Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          {/* Image Section */}
          <div>
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={section.location.imgUrls[0]}
                alt={section.location.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>

          {/* Image Section */}
          {section.location.imgUrls.length > 1 && (
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-4">
                <Image
                  src={section.location.imgUrls[1]}
                  alt={section.location.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </div>
          )}

          {/* Description Section */}
          <div className="my-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-white to-gray-300 mr-4"></div>
              <h2 className="text-2xl font-serif font-bold text-white flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                {section.location.name}
              </h2>
            </div>
            <p className="text-lg text-gray-200 font-light leading-relaxed">
              {section.location.description}
            </p>
          </div>

          <Link
            href={section.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <FaMapMarkerAlt className="mr-2" />
            Google Haritalar&apos;da Aç
          </Link>
        </div>

        <Link
          href={`/t/${section.id}/question`}
          className="bg-white/20 hover:bg-white/30 text-white font-serif font-bold py-3 px-8 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 flex justify-center items-center"
        >
          Soruya Geç <FaArrowRight className="ml-2" />
        </Link>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">Tarihi hissederek ilerleyin...</p>
        </footer>
      </div>
    </div>
  );
}
