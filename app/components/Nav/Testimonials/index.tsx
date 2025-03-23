"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    author: "Michele Lima",
    authorType: "Local Guide",
    date: "2 anos atrás",
    rating: 5,
    comment:
      "Melhor equipe que existe! Rodei o RJ para consertar meu iPhone na época, e foi o único lugar que me deu uma solução. Depois disso, tudo coloco para consertar com eles e indico para todos meus amigos e familiares. Equipe séria e honesta! São muito atenciosos e excelentes profissionais!",
  },
  {
    id: 2,
    author: "Erich Rocha",
    date: "2 anos atrás",
    rating: 5,
    comment:
      "Super recomendo!!!! Tinha um Macbook de 15 mil reais, me cobraram um absurdo para conserta-lo, fui até a loja e fui muito bem atendido pelos profissionais do local, resolveram o meu problema e me cobraram um preço justo e ainda tive a facilidade de pagar no cartão, super recomendo.",
  },
  {
    id: 3,
    author: "Andre Xavier",
    date: "2 anos atrás",
    rating: 5,
    comment:
      "Muito bom !!! Ótimo atendimento e profissionais super qualificados , levei meu ps4 pra fazer orçamento e o preço foi tão bom comparado com outros lugares em que fiz orçamento que eu resolvi fazer o conserto , peguei o game no mesmo dia e agora ele esta funcionando perfeitamente . To jogando direto !!! Recomendo !!! Obrigado itech!!!",
  },
];

export const Testimonials = () => {
  const GOOGLE_REVIEW_URL =
    "https://www.google.com/search?client=safari&sca_esv=c4b2fb5cd062a005&hl=pt-br&sxsrf=AHTn8zqPlL98HoomPJ0J85p0EfxgML50_w:1737855617461&kgmid=/g/11q4df18sx&q=iTech+Solu%C3%A7%C3%B5es&shndl=30&source=sh/x/loc/act/m1/3&kgs=7748e13278510bc#lrd=0x9967c505472089:0x44f741f5178b04cc,3,,,,";

  return (
    <div>
      <section id="sobre" className="py-16 bg-zinc-100">
        <div className="px-4">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Depoimentos
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes dizem sobre nós
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/images/logo-itech.jpg"
                  alt="iTech Soluções"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-bold text-black">iTech Soluções</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => window.open(GOOGLE_REVIEW_URL, "_blank")}
                >
                  Escreva sua avaliação
                </Button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white p-6 rounded-xl shadow-md h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-xl font-bold">
                        {review.author[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-black">
                            {review.author}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{review.comment}</p>
                    <div className="flex items-center text-gray-500 text-sm"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
