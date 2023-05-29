"use client";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Slider = ({ data }) => {
    console.log("data================data");
    console.log(data);
    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={50}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((e) => (
                <SwiperSlide key={e.id}>
                    <Image
                        className="slide-desc"
                        width={1141}
                        height={347}
                        src={e.data.img.url}
                        alt=""
                    />
                    <Image
                        className="slide-m"
                        width={1141}
                        height={347}
                        src={e.data.img_mobile.url}
                        alt=""
                    />
                    <div className="project">
                        <div className="project__subtitle">
                            <p>project name:</p>
                        </div>
                        <div className="project__name">
                            <h5>{e.data.project_name[0].text}</h5>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
