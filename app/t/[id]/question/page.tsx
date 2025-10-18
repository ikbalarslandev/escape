import { sections } from "@/utils/sections";
import TextQs from "@/components/pages/qs/Text";

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return sections.map((question) => ({
    id: question.id.toString(),
  }));
}

export function generateMetadata({ params }: Props) {
  const section = sections.find((q) => q.id.toString() === params.id);

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

export default function QuestionPage({ params }: Props) {
  const section = sections.find((q) => q.id.toString() === params.id);
  if (!section) {
    throw new Error("Section not found");
  }
  const { question } = section;

  if (!question) {
    return <div>Soru bulunamadı</div>;
  }

  return <TextQs question={question} />;
}
