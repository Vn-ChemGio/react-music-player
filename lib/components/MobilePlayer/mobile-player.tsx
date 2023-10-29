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
  return (<div className={styles.container}>
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
    <div style={{ width: '100%' }}>
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
              opacity: not_active_slide_opacity_value, scale: not_active_slide_scale_value, // will set `translateX(-95%)` on previous slides
              translate: [ '-90%', 0, 0 ]
            }, next: {
              opacity: not_active_slide_opacity_value, scale: not_active_slide_scale_value, // will set `translateX(95%)` on next slides
              translate: [ '90%', 0, 0 ]
            }
          }}
          modules={[ EffectCreative ]}
        >
          <SwiperSlide>
            <SliderItem backgroundColor="#803434"
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
        
        <div style={{
          width: '100%',
          height: 44,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <svg viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg" width="144" height="144">
            <g filter="url(#filter0_d_48_277)">
              <circle cx="72" cy="71" r="24.5" fill="white" stroke="#F2F2F2"/>
              <path
                d="M75.7686 61.0922C77.2966 61.2065 78.733 61.8653 79.8163 62.949C80.4109 63.5431 80.8825 64.2486 81.2043 65.0251C81.5261 65.8016 81.6917 66.6339 81.6917 67.4745C81.6917 68.315 81.5261 69.1473 81.2043 69.9238C80.8825 70.7004 80.4109 71.4058 79.8163 72L72.2143 79.602C72.1194 79.6977 72.0066 79.7736 71.8822 79.8254C71.7579 79.8772 71.6245 79.9039 71.4898 79.9039C71.3551 79.9039 71.2217 79.8772 71.0974 79.8254C70.973 79.7736 70.8602 79.6977 70.7653 79.602L63.1633 72C62.0151 70.8599 61.3416 69.3271 61.2784 67.7102C61.2151 66.0934 61.7668 64.5126 62.8224 63.2863C63.878 62.06 65.359 61.2791 66.9673 61.1011C68.5755 60.923 70.1915 61.3609 71.4898 62.3265C72.7222 61.416 74.2405 60.978 75.7686 61.0922Z"
                fill="#EB5757"/>
            </g>
            <defs>
              <filter id="filter0_d_48_277" x="0" y="0" width="144" height="144" filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="23.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_48_277"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_48_277" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className={styles.song}>
        <div className={styles.songName}>
          Freak In Me
        </div>
        
        <div className={styles.songArtis}>
          Mild Orange
        </div>
      </div>
    </div>
    <div style={{ width: '100%' }}>
      <div className={styles.progressBar}>
        <div className={styles.progressBarLine2}/>
      </div>
      
      <div className={styles.controller}>
        <div className={styles.playTime}>
          0:36
        </div>
        
        <div className={styles.skipButton}>
          <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.125 6.75C8.74375 6.75 9.25 7.25625 9.25 7.875V19.125C9.25 19.7437 8.74375 20.25 8.125 20.25C7.50625 20.25 7 19.7437 7 19.125V7.875C7 7.25625 7.50625 6.75 8.125 6.75ZM12.2425 14.4225L18.7338 19.0012C19.4763 19.53 20.5113 18.99 20.5113 18.0787V8.92125C20.5113 8.01 19.4875 7.48125 18.7338 7.99875L12.2425 12.5775C11.6013 13.0275 11.6013 13.9725 12.2425 14.4225Z"
              fill="#4F4F4F"/>
          </svg>
        </div>
        
        <div className={styles.playButton}>
          <svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_48_156" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="61">
              <circle cx="31" cy="30.5" r="30.5" fill="#9570FF" fillOpacity="0.25"/>
            </mask>
            <g mask="url(#mask0_48_156)">
              <circle cx="31" cy="30.5" r="30.5" fill="#70C8FF"/>
              <ellipse cx="25" cy="24.5" rx="13.0634" ry="17.2378" fill="#9570FF"/>
              <ellipse cx="42.336" cy="9.4353" rx="14.5505" ry="18.7751" fill="#70F8FF"/>
              <ellipse cx="2.30014" cy="0.0568132" rx="14.1535" ry="15.6572" fill="#70FFB9"/>
              <ellipse cx="4.84749" cy="37.1609" rx="15.0486" ry="14.5046" fill="#707AFF"/>
              <ellipse cx="45.3462" cy="43.0018" rx="19.0365" ry="17.6906" fill="#E270FF"/>
              <g filter="url(#filter0_b_48_156)">
                <circle cx="31" cy="30.5" r="30.5" fill="#9570FF" fillOpacity="0.01"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_b_48_156" x="-19.1" y="-19.6" width="100.2" height="100.2"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="9.8"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48_156"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48_156" result="shape"/>
              </filter>
            </defs>
          </svg>
          
          <div className={styles.playButtonIcon}>
            {props.isPlaying &&
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.1515 4.63371L24.3117 11.0341V11.1265C24.9114 11.4736 25.4093 11.9722 25.7554 12.5724C26.1015 13.1727 26.2837 13.8533 26.2837 14.5462C26.2837 15.2391 26.1015 15.9198 25.7554 16.52C25.4093 17.1202 24.9114 17.6188 24.3117 17.9659L13.1515 24.3663C12.5508 24.7133 11.8696 24.8965 11.1759 24.8977C10.128 24.8977 9.12304 24.4814 8.38206 23.7405C7.64108 22.9995 7.2248 21.9945 7.2248 20.9466V8.09962C7.21698 7.40232 7.39386 6.71537 7.73746 6.10855C8.08105 5.50172 8.57913 4.99665 9.1811 4.64462C9.78307 4.29259 10.4675 4.10615 11.1648 4.10423C11.8622 4.10232 12.5476 4.285 13.1515 4.63371Z"
                  fill="#333333"/>
              </svg>}
          </div>
        </div>
        
        <div className={styles.skipButton}>
          <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.2775 19.0012L15.7688 14.4225C16.3988 13.9725 16.3988 13.0275 15.7688 12.5887L9.2775 7.99875C8.52375 7.48125 7.5 8.01 7.5 8.92125V18.0787C7.5 18.99 8.52375 19.5187 9.2775 19.0012ZM18.75 7.875V19.125C18.75 19.7437 19.2563 20.25 19.875 20.25C20.4937 20.25 21 19.7437 21 19.125V7.875C21 7.25625 20.4937 6.75 19.875 6.75C19.2563 6.75 18.75 7.25625 18.75 7.875Z"
              fill="#4F4F4F"/>
          </svg>
        </div>
        
        <div className={styles.totalTime}>
          3:40
        </div>
      </div>
      
      <div className={styles.lyrics}>
      </div>
    </div>
  </div>);
};

export default MobilePlayer;