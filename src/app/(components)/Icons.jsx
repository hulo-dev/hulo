export const Quotes = () => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.9261 24.4476V39.2956H4.80078V24.4476L14.659 9.59961H19.9261L10.2869 24.4226L19.9261 24.4476Z"
                fill="white"
            />
            <path
                d="M42.4847 24.4476V39.2956H27.3594V24.4476L37.2176 9.59961H42.4847L32.8456 24.4226L42.4847 24.4476Z"
                fill="white"
            />
        </svg>
    );
};

export const DiagonalArrow = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 1H15M15 1V16M15 1L0 16"
                stroke="white"
                strokeWidth="2"
            />
        </svg>
    );
};

export const DiagonalArrowWithBorderUp = () => {
    return (
        <svg
            className="a"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M33 33H17M17 33V17M17 33L33 17"
                stroke="white"
                strokeWidth="2"
            />
            <rect
                x="1"
                y="1"
                width="48"
                height="48"
                rx="12"
                stroke="white"
                strokeOpacity="0.2"
            />
        </svg>
    );
};

export const DiagonalArrowWithBorderDown = () => {
    return (
        <svg
            className="a"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 17H33M33 17V33M33 17L17 33"
                stroke="white"
                strokeWidth="2"
            />
            <rect
                x="1"
                y="1"
                width="48"
                height="48"
                rx="12"
                stroke="white"
                strokeOpacity="0.2"
            />
        </svg>
    );
};

export const TestIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 300"
            fill="white"
            className="path-svg"
            xmlns="http://www.w3.org/2000/svg"
        >
            <clipPath id="sliderSvg" clipPathUnits="objectBoundingBox">
                <path
                    // d="M0 0 L 1000 0 L 1000 240 Q 1000 250 990 250 L 660 250 Q 650 250 650 260 L 650 290 Q 650 300 640 300 L 0 300 Z"
                    // d="M0 0 L 1 0 L 1 0.24 Q 1 0.25 0.99 0.25 L 0.66 0.25 Q 0.65 0.25 0.65 0.26 L 0.65 0.29 Q 0.65 0.3 0.64 0.3 L 0 0.3 Z"
                    // d="M0 0 L 1 0 L 1 0.8 Q 1 0.85 0.95 0.85 L 0.66 0.84 Q 0.65 0.84 0.65 0.85 L 0.65 0.99 Q 0.65 1 0.64 1 L 0 1 Z"
                    // d="M0 0 L 1 0 L 1 0.8 Q 1 0.85 0.95 0.85 L 0.66 0.84 Q 0.65 0.84 0.65 0.85 L 0.65 0.99 Q 0.65 1 0.64 1 L 0 1 Z"
                    d="M0 0 L 1 0 L 1 0.8 Q 1 0.85 0.985 0.85 L 0.66 0.85 Q 0.645 0.85 0.645 0.9 L 0.645 0.95 Q 0.645 1 0.63 1 L 0 1 Z"
                    stroke="white"
                    strokeWidth="2"
                />
            </clipPath>
        </svg>
    );
};

export const LogoSvg = () => {
    return (
        <svg
            className="a"
            width="144"
            height="25"
            viewBox="0 0 144 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 23.7799V0.379883H5.13V9.09988C5.50417 8.04139 6.21336 7.13381 7.14998 6.51481C8.0866 5.89581 9.19955 5.59917 10.32 5.66988H10.54C11.3971 5.62315 12.2525 5.78851 13.0305 6.15132C13.8084 6.51414 14.4849 7.0632 15 7.74988C16.132 9.53764 16.6676 11.6384 16.53 13.7499V23.7499H11.41V13.4599C11.4297 13.0359 11.3628 12.6124 11.2132 12.2152C11.0636 11.818 10.8345 11.4555 10.54 11.1499C10.2582 10.8496 9.91477 10.6137 9.53335 10.4584C9.15192 10.3031 8.74145 10.2319 8.33 10.2499C7.89105 10.2389 7.45488 10.3226 7.05112 10.4951C6.64736 10.6677 6.28546 10.9251 5.99 11.2499C5.40042 11.9225 5.09245 12.7963 5.13 13.6899V23.7799H0Z"
                fill="white"
            />
            <path
                d="M27.0698 24.3202C26.1887 24.3669 25.3087 24.2108 24.4973 23.8641C23.686 23.5174 22.965 22.9892 22.3898 22.3202C21.2998 21.0102 20.7598 19.0302 20.7598 16.3202V6.22021H25.8898V16.6602C25.8668 17.0681 25.9258 17.4764 26.0632 17.8611C26.2006 18.2458 26.4136 18.5991 26.6898 18.9002C26.9675 19.1827 27.3016 19.4035 27.6703 19.5482C28.039 19.6929 28.4341 19.7584 28.8298 19.7402C29.2446 19.7588 29.6588 19.6911 30.0461 19.5413C30.4334 19.3916 30.7854 19.163 31.0798 18.8702C31.3743 18.5589 31.6024 18.1909 31.7503 17.7886C31.8981 17.3863 31.9626 16.9582 31.9398 16.5302V6.22021H37.0698V23.7802H32.9998V19.6702C32.2731 22.7702 30.3731 24.3202 27.2998 24.3202H27.0698Z"
                fill="white"
            />
            <path
                d="M42.2597 23.7799V4.15988H40.1797V0.379883H47.4197V23.7799H42.2597Z"
                fill="white"
            />
            <path
                d="M60.9395 24.3798C59.1065 24.4355 57.2915 24.0042 55.6795 23.1298C54.3136 22.3638 53.1855 21.2357 52.4195 19.8698C51.6691 18.5036 51.2802 16.9684 51.2895 15.4098V14.6698C51.2738 13.0907 51.6739 11.5353 52.4495 10.1598C53.235 8.77451 54.3872 7.63267 55.7795 6.85976C57.3756 6.03868 59.1446 5.61035 60.9395 5.61035C62.7344 5.61035 64.5034 6.03868 66.0995 6.85976C67.5005 7.62099 68.6556 8.76568 69.4295 10.1598C70.2228 11.5294 70.6338 13.087 70.6195 14.6698V15.4098C70.6265 16.9719 70.2267 18.509 69.4595 19.8698C68.6899 21.2364 67.5585 22.3644 66.1895 23.1298C64.5835 24.0102 62.77 24.442 60.9395 24.3798ZM60.9395 20.0598C61.5704 20.1004 62.2022 19.9943 62.7852 19.7496C63.3682 19.505 63.8865 19.1285 64.2995 18.6498C65.1104 17.6327 65.5323 16.3599 65.4895 15.0598C65.5384 13.7355 65.1049 12.4385 64.2695 11.4098C63.8486 10.9443 63.3347 10.5723 62.7612 10.3177C62.1876 10.0631 61.567 9.9316 60.9395 9.9316C60.312 9.9316 59.6914 10.0631 59.1178 10.3177C58.5443 10.5723 58.0304 10.9443 57.6095 11.4098C56.7921 12.4465 56.3702 13.7404 56.4195 15.0598C56.3781 16.3531 56.7843 17.6212 57.5695 18.6498C57.9845 19.1287 58.5046 19.5052 59.0892 19.7498C59.6739 19.9943 60.3071 20.1005 60.9395 20.0598Z"
                fill="white"
            />
            <path
                d="M91.3008 24.3798C89.4708 24.4371 87.6586 24.0056 86.0508 23.1298C84.684 22.3615 83.5532 21.2342 82.7808 19.8698C82.0335 18.5028 81.6479 16.9676 81.6608 15.4098V14.6698C81.642 13.0916 82.0386 11.5363 82.8108 10.1598C83.5963 8.77451 84.7485 7.63267 86.1408 6.85976C87.7369 6.03868 89.5059 5.61035 91.3008 5.61035C93.0957 5.61035 94.8647 6.03868 96.4608 6.85976C97.8638 7.61828 99.0196 8.76364 99.7908 10.1598C100.591 11.5275 101.009 13.0851 101.001 14.6698V15.4098C101.011 16.971 100.614 18.508 99.8508 19.8698C99.0783 21.2342 97.9476 22.3615 96.5808 23.1298C94.9656 24.0146 93.1413 24.4464 91.3008 24.3798ZM91.3008 20.0598C91.9333 20.1012 92.5668 19.9955 93.1515 19.7508C93.7362 19.5062 94.2563 19.1293 94.6708 18.6498C95.4781 17.6313 95.8964 16.3586 95.8508 15.0598C95.9025 13.7367 95.4726 12.4399 94.6408 11.4098C94.2189 10.9441 93.7043 10.5719 93.1299 10.3173C92.5555 10.0626 91.9341 9.93098 91.3058 9.93098C90.6775 9.93098 90.0561 10.0626 89.4817 10.3173C88.9073 10.5719 88.3926 10.9441 87.9708 11.4098C87.1569 12.4479 86.7387 13.7416 86.7908 15.0598C86.7444 16.3538 87.1511 17.6235 87.9408 18.6498C88.3538 19.1285 88.8721 19.505 89.4551 19.7496C90.0381 19.9943 90.6699 20.1004 91.3008 20.0598Z"
                fill="white"
            />
            <path
                d="M73.2891 22.78V19C73.2891 18.7348 73.3944 18.4804 73.582 18.2929C73.7695 18.1054 74.0238 18 74.2891 18H77.9291C78.1943 18 78.4486 18.1054 78.6362 18.2929C78.8237 18.4804 78.9291 18.7348 78.9291 19V22.74C78.9291 23.0052 78.8237 23.2596 78.6362 23.4471C78.4486 23.6346 78.1943 23.74 77.9291 23.74H74.2891C74.0306 23.7402 73.7822 23.6404 73.5957 23.4614C73.4093 23.2824 73.2994 23.0382 73.2891 22.78Z"
                fill="white"
            />
            <path
                d="M95.4707 8.61988V0.379883H101.001V23.7799H96.5607V20.0899C96.5607 17.7599 95.4707 11.9199 95.4707 8.61988Z"
                fill="white"
            />
            <path
                d="M113.56 24.3802C112.187 24.4135 110.823 24.1509 109.56 23.6102C108.479 23.1525 107.508 22.4708 106.71 21.6102C105.952 20.7445 105.371 19.7389 105 18.6502C104.615 17.5821 104.419 16.4554 104.42 15.3202V14.6702C104.417 13.5251 104.614 12.3882 105 11.3102C105.376 10.2312 105.964 9.23844 106.73 8.39017C107.505 7.53482 108.453 6.85322 109.51 6.39017C110.721 5.8533 112.036 5.59037 113.36 5.62017C115.033 5.55969 116.685 6.00584 118.1 6.90017C119.387 7.70066 120.425 8.84324 121.1 10.2002C121.779 11.5735 122.121 13.0884 122.1 14.6202V16.3502H109.27C109.374 17.4144 109.824 18.4153 110.55 19.2002C110.959 19.5562 111.435 19.8278 111.95 19.9995C112.465 20.1711 113.009 20.2393 113.55 20.2002C114.341 20.2301 115.127 20.0544 115.83 19.6902C116.39 19.3837 116.83 18.8976 117.08 18.3102H121.79C121.43 20.0716 120.437 21.6403 119 22.7202C117.423 23.8667 115.508 24.4512 113.56 24.3802ZM113.37 9.77017C112.365 9.74124 111.388 10.0992 110.64 10.7702C109.907 11.4933 109.444 12.4466 109.33 13.4702H117.21C117.12 12.4521 116.678 11.4972 115.96 10.7702C115.62 10.4352 115.214 10.1735 114.769 10.0015C114.323 9.82953 113.847 9.75079 113.37 9.77017Z"
                fill="white"
            />
            <path
                d="M143.48 18.7002L125.92 23.9502L125.92 18.7002L139.21 14.9602L139.21 14.2202L125.92 10.9802L125.92 6.0502L143.48 10.6002L143.48 18.7002Z"
                fill="white"
            />
        </svg>
    );
};

export const InstagramIcon = () => {
    return (
        <svg
            className="a"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z"
                fill="white"
            />
        </svg>
    );
};

export const FacebookIcon = () => {
    return (
        <svg
            className="a"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398V14.6175H10.1588V11.2395H12.6398V8.35351C12.6398 6.08611 14.1057 4.00426 17.4825 4.00426C18.8497 4.00426 19.8608 4.13551 19.8608 4.13551L19.7813 7.29002C19.7813 7.29002 18.7501 7.28028 17.625 7.28028C16.4073 7.28028 16.212 7.84135 16.212 8.77279V11.2395H19.878L19.7183 14.6175H16.212V24H19.6177C22.0453 24 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05H4.38223L4.38226 0Z"
                fill="white"
            />
        </svg>
    );
};

export const LinkedinIcon = () => {
    return (
        <svg
            className="a"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.70495 0.00585938C2.11975 0.00585938 0.00390625 2.12165 0.00390625 4.70691V19.2951C0.00390625 21.8803 2.1197 23.9954 4.70495 23.9954H19.2931C21.8784 23.9954 23.9934 21.8803 23.9934 19.2951V4.70691C23.9934 2.1217 21.8784 0.00585938 19.2931 0.00585938H4.70495ZM5.88734 3.96461C7.12689 3.96461 7.8904 4.77836 7.91397 5.84801C7.91397 6.89405 7.12684 7.73067 5.86336 7.73067H5.84011C4.62415 7.73067 3.83822 6.8941 3.83822 5.84801C3.83822 4.77838 4.64793 3.96461 5.88731 3.96461H5.88734ZM16.5693 8.96405C18.9532 8.96405 20.7402 10.5222 20.7402 13.8705V20.1213H17.1173V14.2896C17.1173 12.8242 16.593 11.8244 15.2819 11.8244C14.281 11.8244 13.6844 12.4982 13.4225 13.1492C13.3268 13.3821 13.3033 13.7074 13.3033 14.0332V20.1213H9.68042C9.68042 20.1213 9.72796 10.2426 9.68042 9.2197H13.304V10.7635C13.7855 10.0207 14.6466 8.96403 16.5693 8.96403V8.96405ZM4.05191 9.22049H7.67479V20.1213H4.05191V9.22049Z"
                fill="white"
            />
        </svg>
    );
};

export const DesignIcon = () => {
    return (
        <svg
            className="a"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398L16.212 24H19.6177C22.0453 24 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05L4.38226 0ZM13.0917 7.79652C13.393 7.46488 13.8818 7.46488 14.1832 7.79652C14.4845 8.12817 14.4845 8.66594 14.1832 8.99759L9.27073 14.4023C8.06482 15.729 6.11011 15.729 4.9042 14.4023C3.6986 13.0754 3.6986 10.9248 4.9042 9.59803L8.63058 5.49843C9.23345 4.83497 10.211 4.83497 10.8139 5.49843L5.99619 10.7989C5.39283 11.4626 5.39283 12.5379 5.99619 13.2012C6.59891 13.8643 7.57618 13.8643 8.17938 13.2012L13.0917 7.79652ZM11.4541 5.99519C12.66 4.66827 14.6147 4.66827 15.8206 5.99519C16.1221 6.32684 16.1221 6.86426 15.8206 7.19626C15.5192 7.52772 15.0305 7.52772 14.7288 7.19626C14.1261 6.53279 13.1488 6.53279 12.5459 7.19626L7.6333 12.6006C7.33186 12.9322 6.84323 12.9322 6.54179 12.6006C6.24051 12.2691 6.24051 11.731 6.54179 11.3995L11.4541 5.99519ZM16.3664 11.3995C16.6678 11.0682 17.1568 11.0682 17.4582 11.3995C17.7595 11.731 17.7595 12.2691 17.4582 12.6006L12.5459 18.0049C11.34 19.3317 9.38481 19.3317 8.17938 18.0049C7.87746 17.6736 7.87746 17.1359 8.17938 16.8041C8.48082 16.4726 8.96946 16.4726 9.27073 16.8041C9.87361 17.4673 10.8512 17.4673 11.4541 16.8041L16.3664 11.3995ZM14.7293 9.5982C15.9349 8.27163 17.8899 8.27163 19.0958 9.5982C20.3014 10.9248 20.3014 13.0754 19.0958 14.4023L15.3694 18.5019C14.7661 19.165 13.789 19.165 13.1861 18.5019L18.0038 13.2012C18.6067 12.5379 18.6067 11.4626 18.0038 10.7993C17.4011 10.1358 16.4233 10.1358 15.8206 10.7993L10.9083 16.2038C10.607 16.5356 10.1182 16.5356 9.81665 16.2038C9.51521 15.8723 9.51521 15.3342 9.81665 15.0029L14.7293 9.5982Z"
                fill="white"
            />
        </svg>
    );
};

export const WorkArrowRight = () => {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24 1L48 25M48 25L24 49M48 25H0"
                stroke="white"
                strokeWidth="2"
            />
        </svg>
    );
};

export const PrevArrow = () => {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M33 33H17M17 33V17M17 33L33 17"
                stroke="white"
                strokeWidth="2"
            />
            <rect
                x="1"
                y="1"
                width="48"
                height="48"
                rx="12"
                stroke="white"
                strokeOpacity="0.2"
            />
        </svg>
    );
};

export const NextArrow = () => {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 17H33M33 17V33M33 17L17 33"
                stroke="white"
                strokeWidth="2"
            />
            <rect
                x="1"
                y="1"
                width="48"
                height="48"
                rx="12"
                stroke="white"
                strokeOpacity="0.2"
            />
        </svg>
    );
};

export const FlagIcon = () => {
    return (
        <svg
            className="flag"
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_4429_2409)">
                <path
                    d="M20.3077 1.25356V8.50102C18.6159 7.84833 16.9241 7.68568 15.2302 7.76803C13.5385 7.84833 11.8467 8.1757 10.1549 8.50102C8.46101 8.82633 6.76923 9.1537 5.07745 9.234C3.38567 9.31635 1.69178 9.1537 0 8.50102V1.25356C1.69178 1.90624 3.38567 2.0689 5.07745 1.9886C6.76923 1.90624 8.46101 1.58093 10.1549 1.25356C11.8467 0.928245 13.5385 0.602933 15.2302 0.520576C16.9241 0.438218 18.6159 0.602933 20.3077 1.25356Z"
                    fill="#005EB8"
                />
                <path
                    d="M20.3077 8.50124V15.7487C18.6159 15.096 16.9241 14.9334 15.2302 15.0137C13.5385 15.096 11.8467 15.4213 10.1549 15.7487C8.46101 16.074 6.76923 16.3993 5.07745 16.4817C3.38567 16.562 1.69178 16.3993 0 15.7487V8.50124C1.69178 9.15393 3.38567 9.31658 5.07745 9.23422C6.76923 9.15392 8.46101 8.82655 10.1549 8.50124C11.8467 8.17593 13.5385 7.84856 15.2302 7.76826C16.9241 7.6859 18.6159 7.84856 20.3077 8.50124Z"
                    fill="#FFD101"
                />
            </g>
            <defs>
                <clipPath id="clip0_4429_2409">
                    <rect
                        width="20.3077"
                        height="16"
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
