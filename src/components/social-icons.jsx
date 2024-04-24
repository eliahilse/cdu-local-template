import React from 'react';

const icons = {
    twitter: {
        svg: (
            <svg className="social-icon twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 271"
                 fill="currentColor">
                <path
                    d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
            </svg>
        ),
        alt: "Twitter"
    },
    youtube: {
        svg: (
            <svg className="social-icon youtube" viewBox="0 0 28.57  20" focusable="false">
                <svg viewBox="0 0 28.57 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <mask id="cutout-mask-yt">
                            <rect x="0" y="0" width="28.57" height="20" fill="white"/>
                            <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="black"/>
                        </mask>
                    </defs>
                    <g mask="url(#cutout-mask-yt)">
                        <path
                            d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 0 14.285 0 14.285 0C14.285 0 5.35042 0 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C0 5.35042 0 10 0 10C0 10 0 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                            fill="currentColor"/>
                    </g>
                </svg>

            </svg>
        ),
        alt: "YouTube"
    },
    facebook: {
        svg: (
            <svg className="social-icon" fill="currentColor"
                 viewBox="0 0 40 40">
                <defs>
                    <mask id="cutout-mask-fb">
                        <rect x="0" y="0" width="40" height="40" fill="white"/>
                        <path className="st1" fill="black"
                              d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20  h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z"/>
                    </mask>
                </defs>
                <g mask="url(#cutout-mask-fb)">
                    <path className="st0"
                          d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"/>
                </g>
            </svg>
        ),
        alt: "Facebook"
    }
};

const SocialIcons = ({socialLinks}) => {
    return (
        <div className="flex flex-row items-center justify-center gap-x-3 mt-4">
            {Object.entries(socialLinks).map(([key, url]) => {
                if (url && icons[key]) {
                    return (
                        <a className="" key={key} href={url} target="_blank"
                           rel="noopener noreferrer">
                            {icons[key].svg}
                            <span className="sr-only">{icons[key].alt}</span>
                        </a>
                    );
                }
                return null;
            })}
        </div>)
};


SocialIcons.displayName = "SocialIcons";
export default SocialIcons;
