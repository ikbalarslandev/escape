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
      type: "text",
      qs: "Hipodromdaki spina(hipodromun ortasındaki anıtsal çizgi) benim meskenimdir. Geceleri üç farklı yönden aydınlanırım. Öyle ki, üç hayvanın başında otururum. Ben neyim?",
      answer: "kazan",
      hints: [
        "Bu 3 hayvan da yılandır.",
        "Yılanlar artık yok",
        "Boyum 5.5 metredir",
      ],
    },
    info: {
      object: 1,
      desc: " Bu, mühürleri oluşturma yolunda ilk parçan",
      content:
        "Şu anda Hipodrom&apos;un tam merkezindesin. Hayal et, etrafında devasa tribünler ve ortada spina; tüm bu alan yaklaşık 9 futbol  sahası büyüklüğünde!  Bu kadar geniş bir alanın, halkı bir araya getirip eğlendirmek ve imparatorluğun görkemini göstermek için yapıldığını hayal edebiliyor musun?",
      collected: {
        objects: [1],
        seals: [],
      },
    },
  },
  {
    id: 2,
    location: {
      name: "TEODOSIUS DİKİLİ TAŞI",
      description: "Bir sonraki soru için Teodosius Dikili Taşına git.",
      imgUrls: ["/q_imgs/2.jpg"],
      mapsUrl: "https://maps.app.goo.gl/WQVb6XmVAej7f4fTA",
    },
    question: {
      type: "image",
      qs: "Hipodromdaki spina(hipodromun ortasındaki anıtsal çizgi) benim meskenimdir. Geceleri üç farklı yönden aydınlanırım. Öyle ki, üç hayvanın başında otururum. Ben neyim?",
      answer: "/opt/2/6.jpg",
      options: [
        "/opt/2/1.jpg",
        "/opt/2/2.jpg",
        "/opt/2/3.jpg",
        "/opt/2/4.jpg",
        "/opt/2/5.jpg",
        "/opt/2/6.jpg",
        "/opt/2/7.jpg",
        "/opt/2/8.jpg",
      ],
      hints: [
        "Dikili taşın tabanında bulunan dört yüzdeki tüm heykelleri incele. Aynı eksikliği taşıyanlar, aynı kaderin yol arkadaşlarıdır.",
        "İmparatorla aynı eksiği taşıyanları say, böylece kaç tane dostu olduğunu anlarsın.",
        "Eksikliği olan imparatorun olduğu taraftaki hiyeroglifleri aşağıdan yukarıya doğru, dostlarının sayısı kadar say. Böylece imparatorun ruhunun tutsak olduğu hiyeroglifi bulabilirsin.",
      ],
    },
    info: {
      object: 2,
      desc: " Bu, mühürleri oluşturma yolunda ilk parçan",
      content:
        "Şu anda Hipodrom&apos;un tam merkezindesin. Hayal et, etrafında devasa tribünler ve ortada spina; tüm bu alan yaklaşık 9 futbol  sahası büyüklüğünde!  Bu kadar geniş bir alanın, halkı bir araya getirip eğlendirmek ve imparatorluğun görkemini göstermek için yapıldığını hayal edebiliyor musun?",
      collected: {
        objects: [1, 2],
        seals: [],
      },
    },
  },
  {
    id: 3,
    location: {
      name: "YILANLI SÜTUN",
      description: "Bir sonraki soru için Yılanlı Sütuna git.",
      imgUrls: ["/q_imgs/3.jpg"],
      mapsUrl: "https://maps.app.goo.gl/bcVZfK6fvjyTVtub8",
    },
    question: {
      type: "image",
      qs: "Ben, üçlü bir zehrin tunç beden bulmuş haliyim. Sızdığım yer, arayışının Kuzey'i olsun. Buradan, bedenimin şu anki boyunun işaret ettiği yönde ilerle. Panzehir ağacı seni bekliyor olacak. Panzehir ağacı hangisi?",
      answer: "/opt/3/4.jpg",
      options: [
        "/opt/3/1.jpg",
        "/opt/3/2.jpg",
        "/opt/3/3.jpg",
        "/opt/3/4.jpg",
        "/opt/3/5.jpg",
        "/opt/3/6.jpg",
        "/opt/3/7.jpg",
        "/opt/3/8.jpg",
      ],
      hints: [
        "Zehrin izini takip etmek için anıtın altına, taşla birleştiği yere bak.",
        "Zehirin aktığı yönü saat 12 yönü olarak düşün. Buna göre yılanlı sütunun bugünkü boyu hangi yönü gösterir?",
        "5.5 metre... Bu bir yükseklik değil, bir yön tarifi. Bu yönde ilerle, seni doğru ağaca götürecek. ",
      ],
    },
    info: {
      object: 3,
      desc: "  Kadim sirri çözme yolunda üçüncü parçan",
      content: ` Tebrikler! Panzehir ağacını bularak kadim zehrin etkisini yok
                ettin. Bu tunç gövde, 31 Yunan şehir devletinin Perslere karşı
                birleşerek kazandığı zaferin simgesidir.
                
                  Bu anıt, Pers ordusunun bronz silahları eritilerek döküldü.
                Amacı, Yunan birliğinin gücünü sonsuza kadar hatırlatmaktı.
                Yüzyıllar sonra İmparator Konstantin tarafından, Yunan kültürüne
                olan saygısını göstermek ve halkın sevgisini kazanmak amacıyla
                İstanbul&apos;a getirildi ve Hipodrom&apos;a dikildi.`,
      collected: {
        objects: [1, 2, 3],
        seals: [],
      },
    },
  },
  {
    id: 4,
    location: {
      name: " ÖRME DİKİLİTAŞ",
      description: " Bir sonraki soru için Örme Dikilitaşa git.",
      imgUrls: ["/q_imgs/4.jpg"],
      mapsUrl: "https://maps.app.goo.gl/ub8iMwSMZZiEDomX7",
    },
    question: {
      type: "text",
      qs: "Ben, Örme Dikilitaş. En sevdiğim askerim yaralandı. Ancak, iki tekerleğe sahip olanlar üç çiçeğin yanından baktığında, tüm askerlerimi görebilir. Peki, kaç tane sağlıklı askerim kaldı?",
      answer: "9",
      hints: [
        "Yaralı askerimi bulmak için taş muhafızlarımın hepsini dikkatle incele. Diğerlerinden farklı olan, zarar görmüş olanı arayın.",
        "İki tekerlek, motorlu bir araç değil, insan gücüyle hareket eden bir ulaşım aracını işaret ediyor. Bu aracın park edildiği yer, doğru bakış açısını sunacak.",
        "Üç çiçek, İstanbul bahçelerinin en meşhur çiçeğidir. Bu laleler, tam olarak durman gereken noktayı işaret ediyor.",
      ],
    },
    info: {
      object: 4,
      desc: "  Kadim sirri çözme yolunda üçüncü parçan",
      content: ` Tebrikler! Bu kadim anıtın sırrını çözdünüz. Bir zamanlar
                üzerini kaplayan bronz plakaları Haçlı Seferi&apos;nde sökülüp
                para basılan Örme Dikilitaş, o delikleriyle size tarihi
                fısıldıyor.
                
                  Osmanlı döneminde askerlerin bu deliklere basarak tırmandığı ve
                padişahtan bahşiş aldığı bu anıtı, Assassin&apos;s Creed&apos;de
                İstanbul&apos;u keşfederken gerçek bir asker gibi tırmanmayı
                unutmayın.`,
      collected: {
        objects: [1, 2, 3, 4],
        seals: [],
      },
    },
  },
  {
    id: 5,
    location: {
      name: "HİPODROM KALINTILARI",
      description:
        "Bir sonraki soru için Hipodrom&apos;un günümüze kalan kalıntılarına gitmeliyiz. Hipodrom&apos;un bir ucu Alman Çeşmesi&apos;nden başlıyor ve sonu buraya kadar uzanıyor.Hipodrom&apos;un günümüze kalan kalıntılarına gidin.",
      imgUrls: ["/q_imgs/5.jpg", "/opt/5/5_spina.jpg"],
      mapsUrl: "https://maps.app.goo.gl/3Zx8BBjcGjL57H8L6",
    },
    question: {
      type: "text",
      qs: "Kesilen su sana kitabeyi göstersin. Eskiden benim üzerimde bulunan 2 şey neydi?",
      answer: "hamam ve haddehane",
      hints: [
        "Bu antik hipodromun taş duvarını dikkatle takip et. Arayışın sırasında, normalde su akması gereken ama şu an sessiz ve kuru olan bir yapıyla karşılaşacaksın. Bu, senin ilk durağın.",
        "Suyun kesildiği bu noktada dur. Hemen yanında, geçmişe ışık tutan resmi bir açıklama metni göreceksin. Bu metin, sana kayıp parçaların izini sürmen için gereken bilgiyi verecek.",
        "Yanındaki bilgi tabelasını dikkatle oku. Metin, bu çeşmenin veya yapının artık var olmayan, eskiden burada bulunan iki büyük binadan bahsediyor. İşte aradığın cevap orada yazıyor.",
      ],
    },
    info: {
      object: 5,
      desc: "Yeni bir objeyi kazandınız",
      content: `  Tebrikler! Üzerinde durduğunuz bu topraklar, Bizans&apos;ın en
                büyük ayaklanmasına tanıklık etti. Hipodrom sadece bir yarış
                alanı değil, siyasetin de kalbiydi. &quot;Maviler&quot;
                asilleri, &quot;Yeşiller&quot; ise halkı temsil ediyordu. MS
                532&apos;de bu rakipler, &quot;Nika!&quot; (Zafer!) naralarıyla
                imparatora karşı birleşti. Çıkan kanlı Nika İsyanı&apos;nda
                Ayasofya da dahil olmak üzere kentin büyük bölümü yok oldu.`,
      collected: {
        objects: [],
        seals: [],
      },
    },
  },
  {
    id: 6,
    location: {
      name: "AYASOFYA",
      description:
        "Bir sonraki soru için Ayasofya&apos;ya gitmeliyiz. bu muhteşem yapı, Bizans İmparatorluğu&apos;nun en görkemli eserlerinden biridir. Nika İsyanı sırasında yıkılan önceki bazilikanın yerine inşa edilen Ayasofya, sadece 5 yıl gibi kısa bir sürede tamamlanmış ve yaklaşık 1000 yıl boyunca dünyanın en büyük katedrali olarak kalmıştır.",
      imgUrls: ["/q_imgs/6.jpg"],
      mapsUrl: "https://maps.app.goo.gl/Xe4H5HjWF9MoEXzw8",
    },
    question: {
      type: "text",
      qs: "Üç mızrağın kafasını kestiler, ölmeden önce kaç minare gördüler?",
      answer: "2",
      hints: [
        "Demir korkuluklara dikkatle bakın. Mizrak başı şeklinde olanlarından üçünün başı eksik.",
        "Bu eksik başlı mızraklar, Ayasofya'ya bakmanız gereken doğru noktayı işaret ediyor.",
        "Doğru noktadan Ayasofya'ya baktığınızda kaç adet minare görüyorsunuz?",
      ],
    },
    info: {
      object: 6,
      desc: "  Kadim sirri çözme yolunda üçüncü parçan",
      content: `  Tebrikler! Çözdüğünüz bilmecenin ardındaki tarihi hikaye, bu
                muazzam yapıyı daha da anlamlı kılıyor. Nika İsyanı&apos;nda
                yakılıp yıkılan Ayasofya&apos;nın külleri üzerine, İmparator I.
                Justinianus, dünyanın en görkemli mabedini inşa ettirmeye ant
                içti.
                
                  O zamana dek Kudüs&apos;teki Süleyman Mabedi&apos;nin kutsal
                addedilen büyüklüğü aşılamazken, İmparator binlerce işçiyle
                sadece 5 yıl gibi rekor bir sürede bu başyapıtı tamamlattı.
                Ayasofya&apos;nın görkemli açılışında, içeri girip kubbeyi
                süsleyen ışığı gördüğünde, tarihe geçen sözleri haykırdı:
                &quot;Ey Süleyman, seni geçtim!&quot;.
                
                `,
      collected: {
        objects: [1, 2, 3, 4],
        seals: [],
      },
    },
  },
  {
    id: 7,
    location: {
      name: "SULTANAHMET PARKI",
      description:
        " Bir sonraki soru için Sultanahmet Parkı&apos;na gitmeliyiz.",
      imgUrls: ["/q_imgs/7.jpg"],
      mapsUrl: "https://maps.app.goo.gl/Csu2heRUGVN4aHzr9",
    },
    question: {
      type: "text",
      qs: 'Eğer Ayasofya saat 9 yönündeyse, "etekli adamlar" hangi yöne bakıyor?',
      answer: "10",
      hints: [
        "Etekli adamlar aslında birer resimdir.",
        "Bu adamlar ıslanmayı hiç umursamazlar",
        "Adamların olduğu yerde öyle bir konum alın ki, Ayasofya tam saat 9 yönünüzde kalsın. O noktadan, etekli adamların baktığı yönü bulun.",
      ],
    },
  },
  {
    id: 8,
    location: {
      name: "SULTANAHMET PARKI",
      description:
        " Bulunduğunuz Sultanahmet Parkı&apos;ndan Sultanahmet Camii&apos;ne bakın.",
      imgUrls: ["/q_imgs/7.jpg"],
      mapsUrl: "https://maps.app.goo.gl/Csu2heRUGVN4aHzr9",
    },
    question: {
      type: "text",
      qs: "Bu caminin yükselişi bir uyumlar bütünüdür. Ana binanın sahip olduğu toplam minare sayısının, ana giriş kapısının yanında yükselen minare sayısına oranı nedir?",
      answer: "2",
      hints: [
        "Uyumu bulmak için önce bütünü, sonra parçayı say. Ana kapının yanındakiler, bütünün sadece bir kısmı.",
        "Ana binanın dört köşesinde toplam dört adet minare var. Avludakileri de bularak oranlayıp cevabı bulabilirsin.",
        "Avluda 2 adet minare var.",
      ],
    },
    info: {
      object: 8,
      desc: "Yeni bir objeyi kazandınız",
      content: `  Minareler Osmanlı&apos;da sadece dini sembol değil, aynı zamanda
                gücün nişanesiydi. İstanbul&apos;un fethiyle camiye çevrilen
                Ayasofya&apos;ya sultan statüsüne uygun 4 minare eklendi. Fakat
                I. Ahmed, Ayasofya&apos;nın Bizans ihtişamını gölgelemek için
                karşısına 6 minareli Sultanahmet Camii&apos;ni inşa ettirdiğinde
                büyük tartışma patlak verdi; zira o güne kadar 6 minare yalnızca
                İslam&apos;ın en kutsal mabedi Kabe&apos;ye aitti.
                
                 Padişahın allaha eşitlik iddiası olarak yorumlanan bu durum,
                sonunda Kabe&apos;ye yedinci minarenin eklenmesiyle çözüldü ve
                hiç kimsenin kutsal olandan üstün olamayacağı mesajı verildi.`,
      collected: {
        objects: [1, 2, 3, 4],
        seals: [],
      },
    },
  },
  {
    id: 9,
    location: {
      name: "SULTANAHMET CAMİİ AVLUSU",
      description:
        " Bir sonraki soru için Sultanahmet Camii&apos;nin avlusuna gitmeliyiz.",
      imgUrls: ["/q_imgs/9.jpg"],
      mapsUrl: "https://maps.app.goo.gl/RqR7DFsSGzd2miAo6",
    },
    question: {
      type: "text",
      qs: "Askerlerimin köşesi yoktur ve beni iç tehditlere karşı korurlar. Ne var ki bazıları bana ihanet etti. Ancak zamanın ışığında, sadık askerlerimi ayırt edebilirsin. Kaç sadık askerim kaldı?",
      answer: "8",
      hints: [
        "Köşeleri olmayan geometrik bir şekil bulmalısın; bu, askeri temsil eder.",
        "Sana zamanı gösterecek bir araç bul.",
        "Zamanın gösterdiği renk, sadık olanların rengidir.",
      ],
    },
  },
  {
    id: 10,
    location: {
      name: "SULTANAHMET CAMİİ Icerisi",
      description:
        "Bir sonraki soru için Sultanahmet Camii&apos;nin icerisine gitmeliyiz.",
      imgUrls: ["/q_imgs/10.jpg"],
      mapsUrl: "https://maps.app.goo.gl/RqR7DFsSGzd2miAo6",
    },
    question: {
      type: "text",
      qs: "Düşersem kırılırım, içim sarı ve beyazdır. Burada benden kaç tane var?",
      answer: "28",
      hints: [
        "Henüz çok küçüğüm ve yuvamdan pek ayrılmam.",
        "Annem, dunyanin en buyuk kusudur.",
        "Işıklar içinde parlamayı çok severim.",
      ],
    },
    info: {
      desc: "Devekuşu Yumurtalarının Mimari Sırrı",
      content: `   Osmanlı geleneğinde devekuşu yumurtasının böcekleri, örümcekleri
                ve haşereleri uzak tuttuğuna inanılırdı. Bu nedenle cami,
                medrese ve türbe gibi dini yapılarda tavana asılan devekuşu
                yumurtaları, doğal bir haşere savar olarak kullanılırdı.
                `,
      collected: {
        objects: [],
        seals: [],
      },
    },
  },
  {
    id: 11,
    location: {
      name: "CAMİİ AVLUSU ÇIKIŞI",
      description:
        " Bir sonraki soru için Sultanahmet Camii avlusundan, ok yönündeki çıkıştan çıkıp fotografta gösterilen Arapça yazının altına  gitmeliyiz. Doğru lokasyon orası.",
      imgUrls: ["/q_imgs/11/avlu.jpeg", "/q_imgs/11/door.jpeg"],
      mapsUrl: "https://maps.app.goo.gl/RqR7DFsSGzd2miAo6",
    },
    question: {
      type: "text",
      qs: "Üç ulus, Tanrı'nın en büyük olduğunu göstermek için bir araya geldi. Bu birlik için aramızdan bir ulus askerlerini feda etti. Bu ulus kaç askerini feda etti?",
      answer: "6",
      hints: [
        "Bu üç ulus oldukça uzundur ve gökyüzüne doğru uzanır.",
        "Bu uluslar metalden yapılmıştır ve oldukça dayanıklıdırlar.",
        "Uzun boylu insanlar bu ulusların altından geçerken kafasını çarpabilir.",
      ],
    },
    info: {
      object: 11,
      desc: "mühür için önemli bir parça elde ettiniz",
      content: `    Cami avlusuna atıyla yalnızca padişah girebilirdi. Fakat bu
                zincir, tam da bu yüzden kapı girişine yerleştirilmişti. Öyle
                ki, padişah dahi olsa, Allah&apos;ın evine saygı göstermek için
                eğilmek zorundaydı.

                Bu zarif ama anlamlı engel, dünyevi gücün ilahi alandaki
                sınırlarını simgeliyordu. En güçlü padişah bile ibadethaneye
                girerken tevazu göstermeliydi. Bu zincir, günümüzde hala cami
                mimarisindeki incelikli detaylardan biri olarak varlığını
                sürdürüyor.
                `,
      collected: {
        objects: [],
        seals: [],
      },
    },
  },
  {
    id: 12,
    location: {
      name: "ALMAN ÇEŞMESİ",
      description: "Son soru için Alman Çeşmesi&apos;ne gitmeliyiz.",
      imgUrls: ["/q_imgs/1.jpg"],
      mapsUrl: "https://maps.app.goo.gl/7Aei3uL8B6UHakws5",
    },
    question: {
      type: "audio",
      qs: "Kral sana yol göstersin. İlk ses dosyası 'R' harfinin şifresini öğretti. Şimdi ikinci ses dosyasını dinleyerek şifrelenmiş kelimeyi bul.",
      answer: "bir",
      audios: {
        example: {
          route: "/opt/12/Letter (R).mp3",
          answer: "r",
        },
        mystery_route: "/opt/12/Word (BIR).mp3",
      },
      hints: [
        "Alman Çeşmesi'nin üzerinde duran metal döküm yazıda şifre gizli.",
        "İlk ses dosyasını dikkatle dinle. Sana 'R' harfinin konumunu ve harfi bulduğunda çıkan doğrulama sesini gösteriyor.",
        "Her harfi bulduktan sonra belirli bir ses çıkarıyor buna odaklanarak kelime içerisinde kaç adet harf olduğunu bulabilirsin",
      ],
    },
  },
];
