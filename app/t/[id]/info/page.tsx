"use client";

import React from "react";
import { useRouter, notFound } from "next/navigation";
import { sections } from "@/utils/sections";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { convertIndexToBage } from "@/utils/convertions";

export default function InfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const resolvedParams = React.use(params); // ✅ unwrap the promise

  const section = sections.find((q) => q.id.toString() === resolvedParams.id);

  if (!section) {
    notFound();
  }

  const { info } = section;
  const objectIndex = section.id;

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Tebrikler!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            İlk objenizi kazandınız
          </p>
        </header>

        {/* Success Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              {section.info?.object !== undefined &&
                convertIndexToBage({ i: section.info.object })}

              <p className="text-gray-300 mt-4">{info?.desc}</p>
            </div>

            <div className="space-y-6 text-gray-200 font-light leading-relaxed">
              {info && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: info.content,
                  }}
                />
              )}
            </div>
          </CardContent>
        </Card>

        {/* Object Collection Card
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
              🏆 Topladığınız Objeler
            </h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-900 border border-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center shadow-lg text-3xl font-bold text-white">
                {objectIndex}
              </div>
            </div>
            <p className="text-center text-gray-300 mt-4">Obje {objectIndex}</p>
          </CardContent>
        </Card> */}

        <div className="text-center">
          <Button
            onClick={() => router.push(`/t/${section.id + 1}/location`)}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
          >
            Sonraki Soru →
          </Button>
        </div>

        <footer className="text-center mt-12 text-gray-400 font-light">
          <p className="italic">Tarihin izinde ilerlemeye devam edin...</p>
        </footer>
      </div>
    </div>
  );
}
