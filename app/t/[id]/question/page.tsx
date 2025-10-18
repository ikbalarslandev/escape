import { sections } from "@/utils/sections";
import TextQs from "@/components/pages/qs/Text";
import ImageQs from "@/components/pages/qs/Image";
import AudioQs from "@/components/pages/qs/Audio";
import { ISection, IAudioQs } from "@/types";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return sections.map((question) => ({
    id: question.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const section = sections.find((q) => q.id.toString() === id);

  if (!section) {
    return {
      title: "Soru Bulunamadı",
    };
  }

  return {
    title: `Soru ${section.id}`,
    description: section.question.qs.substring(0, 160) || "",
  };
}

export default async function QuestionPage({ params }: Props) {
  const { id } = await params;
  const section = sections.find((q) => q.id.toString() === id);

  if (!section) {
    return <div>Soru bulunamadı</div>;
  }

  switch (section.question.type) {
    case "text":
      return <TextQs section={section} />;

    case "image":
      return <ImageQs section={section} />;

    case "audio":
      return <AudioQs section={section as ISection & { question: IAudioQs }} />;

    default:
      return <div>Unknown question type</div>;
  }
}
