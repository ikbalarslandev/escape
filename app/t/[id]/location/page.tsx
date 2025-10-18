// app/[id]/location/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { questions } from "@/utils/questions";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return questions.map((question) => ({
    id: question.id.toString(),
  }));
}

export function generateMetadata({ params }: Props) {
  const question = questions.find((q) => q.id.toString() === params.id);

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

export default function LocationPage({ params }: Props) {
  const question = questions.find((q) => q.id.toString() === params.id);

  if (!question) {
    notFound();
  }

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            {`${question.id}. Soru`}
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
                src={question.location.imgUrls[0]}
                alt={question.location.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>

          {/* Image Section */}
          {question.location.imgUrls.length > 1 && (
            <div>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-4">
                <Image
                  src={question.location.imgUrls[1]}
                  alt={question.location.name}
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
                {question.location.name}
              </h2>
            </div>
            <p className="text-lg text-gray-200 font-light leading-relaxed">
              {question.location.description}
            </p>
          </div>

          <Link
            href={question.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <FaMapMarkerAlt className="mr-2" />
            Google Haritalar&apos;da Aç
          </Link>
        </div>

        <Link
          href={`/${question.id}/qs`}
          // href={`/t/${question.id + 1}/location`}
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
