import React from 'react';
import styles from './styles.module.css';

const SliderItem = React.useCallback( ({ backgroundUrl, children }: React.PropsWithChildren<SliderItemProps>) => {
  return (
    <div className={styles.container}>
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
              <image id="image0_48_181" width="500" height="500" xlinkHref={backgroundUrl}/>
            </defs>
          </svg>
        </div>
        {children &&
            <div className={styles.children}>
              {children}
            </div>
        }
      </div>
    </div>
  );
},[]);

export default SliderItem;