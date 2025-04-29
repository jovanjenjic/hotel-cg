"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Testimonial = () => {
  const [ready, setReady] = useState(false);
  const { t, i18n} = useTranslation();

  const testimonialData = [
      { image: "/img/avatar/testimonial-1.jpg", name: t('testimonial.owner.name'), position: t('testimonial.owner.position'), des: t('testimonial.owner.des') },
      { image: "/img/avatar/testimonial-2.jpg", name: t('testimonial.hostess.name'), position: t('testimonial.hostess.position'), des: t('testimonial.hostess.des') },
  ];

  useEffect(() => {
    if (i18n.isInitialized) setReady(true);
    else i18n.on('initialized', () => setReady(true));
  }, [i18n]);

  if (!ready) return null;

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
