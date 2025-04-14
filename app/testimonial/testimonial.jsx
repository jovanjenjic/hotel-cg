"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const testimonialData = [
    { image: "/img/avatar/testimonial-1.jpg", name: 'Milan and Dejana Jojovic', position: 'Owners', des: 'A successful married couple from Hamburg, Germany, has been building a life together for years, based on love, trust, and professional achievement. He is a renowned cardiac surgeon, known for his expertise and dedication to his patients, while she is the owner of a prestigious beauty salon, highly regarded by her clients for her sense of aesthetics and top-quality service. Their story is a true example of how hard work, ambition, and a harmonious family life can blend together perfectly.' },
    { image: "/img/avatar/testimonial-2.jpg", name: 'Marina', position: 'Hostess', des: 'Treba nesto saznati o Marini, izmedju ostalog i prezime' },
]

const Testimonial = () => {
  return (
    <>
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4500,
                  }}
                  loop={true}
                  modules={[Autoplay, Pagination]}
                >
                  {testimonialData?.map((data, id) => (
                    <SwiperSlide key={id}>
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src={data.image}
                            alt="image"
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>{data.name}</h4>
                          <span>{data.position}</span>
                          <p>{data.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
