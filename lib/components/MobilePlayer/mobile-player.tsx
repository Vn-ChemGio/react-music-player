import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/effect-creative';

import { SliderItem } from '../SliderItem';
const not_active_slide_scale_value = 0.85;
const not_active_slide_opacity_value = 0.1;

const MobilePlayer = (props: React.PropsWithChildren<MobilePlayerProps>) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Component 3">
            <circle id="Ellipse 2" cx="21.5" cy="21.5" r="21.5" fill="#9570FF" fillOpacity="0.19"/>
            <g id="arrow-back">
              <path id="Vector"
                    d="M27.2041 20.1837H17.4018L21.6843 15.9012C22.0265 15.559 22.0265 14.9973 21.6843 14.6551C21.342 14.3128 20.7892 14.3128 20.4469 14.6551L14.6639 20.4382C14.3216 20.7804 14.3216 21.3333 14.6639 21.6755L20.4469 27.4586C20.7892 27.8008 21.342 27.8008 21.6843 27.4586C22.0265 27.1163 22.0265 26.5635 21.6843 26.2212L17.4018 21.9388H27.2041C27.6867 21.9388 28.0816 21.5439 28.0816 21.0612C28.0816 20.5786 27.6867 20.1837 27.2041 20.1837Z"
                    fill="#333333"/>
            </g>
          </g>
        </svg>
        <div className={styles.headerTitle}>
          Now Playing
        </div>
      </div>

      <div className={styles.mySwiper}>
        <Swiper
          slidesPerView={1.2}
          parallax={true}
          centeredSlides={true}
          loop={true}
          effect="creative"
          creativeEffect={{
            limitProgress: 2, // slides after 2nd before/after active will have same state
            prev: {
              opacity: not_active_slide_opacity_value,
              scale: not_active_slide_scale_value,
              // will set `translateX(-95%)` on previous slides
              translate: ["-90%", 0, 0]
            },
            next: {
              opacity: not_active_slide_opacity_value,
              scale: not_active_slide_scale_value,
              // will set `translateX(95%)` on next slides
              translate: ["90%", 0, 0]
            }
          }}
          modules={[EffectCreative]}
        >
          <SwiperSlide>
           {/* <div className={styles.container}>
              <div className={styles.layout}>
                <div className={styles.cutoff}>
                  <svg width="232" height="260" viewBox="0 0 232 260" fill="none" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g clipPath="url(#clip0_48_181)">
                      <mask id="mask0_48_181" maskUnits="userSpaceOnUse" x="0" y="0" width="232" height="260">
                        <path
                          d="M0 0H232V260H181.305C176.493 260 171.74 258.948 167.378 256.917L137.101 242.823C123.723 236.595 108.277 236.595 94.8985 242.823L68.0338 255.329C61.4246 258.406 54.2225 260 46.9323 260H0V0Z"
                          fill="white"/>
                      </mask>
                      <g mask="url(#mask0_48_181)">
                        <rect width="232" height="260" fill="url(#pattern0)"/>
                      </g>
                    </g>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_48_181" transform="matrix(0.00224138 0 0 0.002 -0.0603448 0)"/>
                      </pattern>
                      <clipPath id="clip0_48_181">
                        <rect width="232" height="260" rx="30" fill="white"/>
                      </clipPath>
                      <image id="image0_48_181" width="500" height="500" xlinkHref={"https://s3-alpha-sig.figma.com/img/c637/3dfe/aebb602d5516d0d6fc022cc605e1e21c?Expires=1699228800&Signature=CN3EvfdEkURTTg8otQrfbFCM0lscCID54oItCuv9T4ysVVoPjdehZdKGfkYPbKfNp5xqWpvYp3CWETHQjgd778We~X3M5cEpizr75tYKc~K0O1yIXz2HI1E0yZ--Iq3iRDToRn-UScvrqBHhPudi-zZRUduRnoAPsK5kTzWyEJH8ERrwwVQsUdNY3oNfbtCiBgPCc4Nyk9LhJDmpeqdFpsJbp0L0m-xm38svB9DX95TUQ0d~UYJSjYLV-9yHJTTJhkla8xhB4hI4H5CMKtqNg5B9fVGXy8RHzzUgTxKV1Q-mczASdew~rmuJl7sF5gDF6i~QDvA5MHn5EVXM2dbL0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
                    </defs>
                  </svg>
                </div>
                {children &&
                    <div className={styles.children}>
                      {children}
                    </div>
                }
              </div>
            </div>*/}
            <SliderItem
              backgroundUrl="https://s3-alpha-sig.figma.com/img/c637/3dfe/aebb602d5516d0d6fc022cc605e1e21c?Expires=1699228800&Signature=CN3EvfdEkURTTg8otQrfbFCM0lscCID54oItCuv9T4ysVVoPjdehZdKGfkYPbKfNp5xqWpvYp3CWETHQjgd778We~X3M5cEpizr75tYKc~K0O1yIXz2HI1E0yZ--Iq3iRDToRn-UScvrqBHhPudi-zZRUduRnoAPsK5kTzWyEJH8ERrwwVQsUdNY3oNfbtCiBgPCc4Nyk9LhJDmpeqdFpsJbp0L0m-xm38svB9DX95TUQ0d~UYJSjYLV-9yHJTTJhkla8xhB4hI4H5CMKtqNg5B9fVGXy8RHzzUgTxKV1Q-mczASdew~rmuJl7sF5gDF6i~QDvA5MHn5EVXM2dbL0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>

          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              backgroundUrl="https://s3-alpha-sig.figma.com/img/0455/bd86/55708bb8a43de6832f09da19ae0f1a64?Expires=1699228800&Signature=pnIOUTLF8fE1c0c~udDOYhgp1H8LWnb95-klunmGz4-9YaSakGqvpBKS6CKZvrzW~8ed0E56k2xBNXAX3ZqDSRlj77FgNPT9DHLdtsv20C2BKFniL0SgH-Lh4Lkouih8jd~XVTx4Xv2FOuVVhp71ghW97oNaxx-Sha8VIOPDJFzPV4lv5aGwi21VZg-M8y0de1jKMjLiPyETGoOlwfHNPQvGCDzBX6eJEH37YzpWalMXsia-kZqMj3nv23gAQz8tf5398dv6TSqtcYhs8TfeHUZVfxyPOcfrBG0aaYKVplRU2icPrz~VNhrPdtvbULTt99D-yOMJuEtW4GqZ25Rcgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>

          </SwiperSlide>
          <SwiperSlide>
            <SliderItem
              backgroundUrl="https://s3-alpha-sig.figma.com/img/922d/73f8/18c9ad602e4c57ac7a129b86e4a1b28c?Expires=1699228800&Signature=c67vBq24Xv6C772kBQUBpex7eMg5eO5ae3vvyk9XA86n4jMJlniODSzKgpviisqJucSCHoKPEhoAm~oVoq~Rf-4qBy-91RNKhXF9X~-3hQXefoHghQcA5Ix4~noOyQUNlif6vbJvHOPSgrZIlr~i~FOO96L4pvZVpYhdPKaHXUbqeNlYq3sLpOCjquoZp-Bj1ms4mSqxxPqG6qQfnrOvkaQoWoWCBnOoAMfBFoHO25decvKAzZsg99YORAnV3hdNNysyuXn8UTL4fRk4YpxoqIAu7d7z5h13AAvzK90uSw39EIZYB8YFyWu4aPzQpd7--ao3F~1m5XY9e9szWOgmjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default MobilePlayer;