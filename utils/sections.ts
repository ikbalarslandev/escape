import { ISection } from "@/types";

export const sections: ISection[] = [
  {
    id: 1,
    location: {
      name: "ALMAN ÇEŞMESİ",
      description:
        "Alman Çeşmesi, eski hipodrom buradan başlıyordu. Dikkatli bakarsan buradan ortadaki spina adlı anıtsal çizgiyi görebilirsin.",
      imgUrls: ["/q_imgs/1.jpg", "/q_imgs/spina.jpeg"],
      mapsUrl: "https://maps.app.goo.gl/LKExaiWipFzrefmeA",
    },
    question: {
      qs: "Hipodromdaki spina(hipodromun ortasındaki anıtsal çizgi) benim meskenimdir. Geceleri üç farklı yönden aydınlanırım. Öyle ki, üç hayvanın başında otururum. Ben neyim?",
      answer: "kazan",
      hints: [
        "Bu 3 hayvan da yılandır.",
        "Yılanlar artık yok",
        "Boyum 5.5 metredir",
      ],
    },
    info: {
      object: 0,
      desc: " Bu, mühürleri oluşturma yolunda ilk parçan",
      content:
        "Şu anda Hipodrom&apos;un tam merkezindesin. Hayal et, etrafında devasa tribünler ve ortada spina; tüm bu alan yaklaşık 9 futbol  sahası büyüklüğünde!  Bu kadar geniş bir alanın, halkı bir araya getirip eğlendirmek ve imparatorluğun görkemini göstermek için yapıldığını hayal edebiliyor musun?",
      collected: {
        objects: [],
        seals: [],
      },
    },
  },
  //   },
  //   {
  //     id: 2,
  //     location: {
  //       name: "TEODOSIUS DİKİLİ TAŞI",
  //       description: "Bir sonraki soru için Teodosius Dikili Taşına git.",
  //       imgUrls: ["/q_imgs/2.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/WQVb6XmVAej7f4fTA",
  //     },
  //   },
  //   {
  //     id: 3,
  //     location: {
  //       name: "YILANLI SÜTUN",
  //       description: "Bir sonraki soru için Yılanlı Sütuna git.",
  //       imgUrls: ["/q_imgs/3.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/bcVZfK6fvjyTVtub8",
  //     },
  //   },
  //   {
  //     id: 4,
  //     location: {
  //       name: " ÖRME DİKİLİTAŞ",
  //       description: " Bir sonraki soru için Örme Dikilitaşa git.",
  //       imgUrls: ["/q_imgs/4.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/ub8iMwSMZZiEDomX7",
  //     },
  //   },
  //   {
  //     id: 5,
  //     location: {
  //       name: "HİPODROM KALINTILARI",
  //       description:
  //         "Bir sonraki soru için Hipodrom&apos;un günümüze kalan kalıntılarına gitmeliyiz. Hipodrom&apos;un bir ucu Alman Çeşmesi&apos;nden başlıyor ve sonu buraya kadar uzanıyor.Hipodrom&apos;un günümüze kalan kalıntılarına gidin.",
  //       imgUrls: ["/q_imgs/5.jpg", "/opt/5/5_spina.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/3Zx8BBjcGjL57H8L6",
  //     },
  //   },
  //   {
  //     id: 6,
  //     location: {
  //       name: "AYASOFYA",
  //       description:
  //         "Bir sonraki soru için Ayasofya&apos;ya gitmeliyiz. bu muhteşem yapı, Bizans İmparatorluğu&apos;nun en görkemli eserlerinden biridir. Nika İsyanı sırasında yıkılan önceki bazilikanın yerine inşa edilen Ayasofya, sadece 5 yıl gibi kısa bir sürede tamamlanmış ve yaklaşık 1000 yıl boyunca dünyanın en büyük katedrali olarak kalmıştır.",
  //       imgUrls: ["/q_imgs/6.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/Xe4H5HjWF9MoEXzw8",
  //     },
  //   },
  //   {
  //     id: 7,
  //     location: {
  //       name: "SULTANAHMET PARKI",
  //       description:
  //         " Bir sonraki soru için Sultanahmet Parkı&apos;na gitmeliyiz.",
  //       imgUrls: ["/q_imgs/7.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/Csu2heRUGVN4aHzr9",
  //     },
  //   },
  //   {
  //     id: 8,
  //     location: {
  //       name: "SULTANAHMET PARKI",
  //       description:
  //         " Bulunduğunuz Sultanahmet Parkı&apos;ndan Sultanahmet Camii&apos;ne bakın.",
  //       imgUrls: ["/q_imgs/7.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/Csu2heRUGVN4aHzr9",
  //     },
  //   },
  //   {
  //     id: 9,
  //     location: {
  //       name: "SULTANAHMET CAMİİ AVLUSU",
  //       description:
  //         " Bir sonraki soru için Sultanahmet Camii&apos;nin avlusuna gitmeliyiz.",
  //       imgUrls: ["/q_imgs/9.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/RqR7DFsSGzd2miAo6",
  //     },
  //   },
  //   {
  //     id: 10,
  //     location: {
  //       name: "SULTANAHMET CAMİİ Icerisi",
  //       description:
  //         " Bir sonraki soru için Sultanahmet Camii&apos;nin icerisine gitmeliyiz.",
  //       imgUrls: ["/q_imgs/10.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/RqR7DFsSGzd2miAo6",
  //     },
  //   },
  //   {
  //     id: 11,
  //     location: {
  //       name: "CAMİİ AVLUSU ÇIKIŞI",
  //       description:
  //         " Bir sonraki soru için Sultanahmet Camii avlusundan, ok yönündeki çıkıştan çıkıp fotografta gösterilen Arapça yazının altına  gitmeliyiz. Doğru lokasyon orası.",
  //       imgUrls: ["/q_imgs/11/avlu.jpeg", "/q_imgs/11/door.jpeg"],
  //       mapsUrl: "https://maps.app.goo.gl/RqR7DFsSGzd2miAo6",
  //     },
  //   },
  //   {
  //     id: 12,
  //     location: {
  //       name: "ALMAN ÇEŞMESİ",
  //       description: "Son soru için Alman Çeşmesi&apos;ne gitmeliyiz.",
  //       imgUrls: ["/q_imgs/1.jpg"],
  //       mapsUrl: "https://maps.app.goo.gl/7Aei3uL8B6UHakws5",
  //     },
  //   },
];
