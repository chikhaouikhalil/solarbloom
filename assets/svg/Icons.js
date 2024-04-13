import { ClipPath, Defs, G, Path, Rect, Svg, Circle } from "react-native-svg";

export const ClientIcon = ({ color }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
        stroke={color}
        strokeLinecap="round"
      />
      <Circle cx="12" cy="8" r="4" stroke={color} strokeLinecap="round" />
    </Svg>
  );
};

export const ClientsIcon = ({ color }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 69 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_2803_133)">
        <Path
          d="M25.4866 0.00450643C23.3847 -0.0457509 21.294 0.324792 19.3374 1.09434C17.3808 1.86389 15.5979 3.0169 14.0935 4.48555C12.5891 5.9542 11.3937 7.70883 10.5775 9.64622C9.76128 11.5836 9.34082 13.6647 9.34082 15.7669C9.34082 17.8692 9.76128 19.9502 10.5775 21.8876C11.3937 23.825 12.5891 25.5796 14.0935 27.0483C15.5979 28.5169 17.3808 29.67 19.3374 30.4395C21.294 31.209 23.3847 31.5796 25.4866 31.5293C27.5885 31.5796 29.6793 31.209 31.6359 30.4395C33.5925 29.67 35.3754 28.5169 36.8798 27.0483C38.3841 25.5796 39.5796 23.825 40.3958 21.8876C41.212 19.9502 41.6324 17.8692 41.6324 15.7669C41.6324 13.6647 41.212 11.5836 40.3958 9.64622C39.5796 7.70883 38.3841 5.9542 36.8798 4.48555C35.3754 3.0169 33.5925 1.86389 31.6359 1.09434C29.6793 0.324792 27.5885 -0.0457509 25.4866 0.00450643V0.00450643Z"
          fill={color}
        />
        <Path
          d="M16.4733 40.5326C12.2899 40.5326 8.27793 42.1942 5.31985 45.1519C2.36178 48.1096 0.699951 52.1212 0.699951 56.304L0.699951 67.5558H50.2733V56.304C50.2733 52.1212 48.6115 48.1096 45.6534 45.1519C42.6953 42.1942 38.6833 40.5326 34.5 40.5326H16.4733Z"
          fill={color}
        />
        <Path
          d="M57.0334 45.0657H54.78V67.5963H68.3V56.331C68.3 53.3433 67.113 50.4779 65.0001 48.3653C62.8872 46.2526 60.0215 45.0657 57.0334 45.0657Z"
          fill={color}
        />
        <Path
          d="M52.5267 18.029C49.5386 18.029 46.6729 19.2159 44.5599 21.3285C42.447 23.4412 41.26 26.3066 41.26 29.2943C41.26 32.282 42.447 35.1474 44.5599 37.2601C46.6729 39.3727 49.5386 40.5596 52.5267 40.5596C55.5148 40.5596 58.3805 39.3727 60.4934 37.2601C62.6063 35.1474 63.7933 32.282 63.7933 29.2943C63.7933 26.3066 62.6063 23.4412 60.4934 21.3285C58.3805 19.2159 55.5148 18.029 52.5267 18.029V18.029Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2803_133">
          <Rect
            width="67.6"
            height="67.5918"
            fill="white"
            transform="translate(0.699951)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const ProductIcon = ({ color }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M12 8V4" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <Path d="M11 16H8" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <Path
        d="M5.5 20H18.5C19.3284 20 20 19.3284 20 18.5V8.23607C20 8.08082 19.9639 7.92771 19.8944 7.78885L18.5528 5.10557C18.214 4.428 17.5215 4 16.7639 4H7.23607C6.47852 4 5.786 4.428 5.44721 5.10557L4.10557 7.78885C4.03615 7.92771 4 8.08082 4 8.23607V18.5C4 19.3284 4.67157 20 5.5 20Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <Path
        d="M5 8H19"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const DiscountIcon = ({ color }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M20 4L4 20" stroke={color} strokeWidth="1" />
      <Circle cx="6.5" cy="7.5" r="3.5" stroke={color} strokeWidth="1" />
      <Circle cx="17.5" cy="16.5" r="3.5" stroke={color} strokeWidth="1" />
    </Svg>
  );
};

export const ServiceIcon = ({ color }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5"
        stroke={color}
        strokeWidth="1"
      />
      <Path
        d="M9 8L15 8"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export const MenuIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"
        fill="#f5f5f4"
      />
      <Circle cx="18" cy="6" r="3" fill="#f5f5f4" />
    </Svg>
  );
};

export const SortIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M5 7H19" stroke="#f5f5f4" strokeLinecap="round" />
      <Path d="M5 12H15" stroke="#f5f5f4" strokeLinecap="round" />
      <Path d="M5 17H11" stroke="#f5f5f4" strokeLinecap="round" />
    </Svg>
  );
};

export const ChartIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M21 21H3" stroke="#f5f5f4" strokeLinecap="round" />
      <Path d="M4 16V14" stroke="#f5f5f4" strokeLinecap="round" />
      <Path d="M12 12V9" stroke="#f5f5f4" strokeLinecap="round" />
      <Path d="M8 16V10" stroke="#f5f5f4" strokeLinecap="round" />
      <Path d="M16 13V11" stroke="#f5f5f4" strokeLinecap="round" />
      <Path d="M20 15V5" stroke="#f5f5f4" strokeLinecap="round" />
    </Svg>
  );
};
export const StarIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.1437 6.62758C10.9303 4.66658 11.3236 3.68608 12 3.68608C12.6763 3.68608 13.0696 4.66658 13.8562 6.62758L13.8928 6.7189C14.3372 7.82676 14.5594 8.3807 15.0123 8.71739C15.4651 9.05407 16.0596 9.10731 17.2485 9.21379L17.4634 9.23304C19.4092 9.4073 20.3822 9.49443 20.5903 10.1134C20.7985 10.7324 20.076 11.3897 18.6309 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1415 16.8809 14.5776C16.8491 14.659 16.8227 14.7423 16.8018 14.8271C16.6897 15.2818 16.7968 15.7645 17.0111 16.73L17.0777 17.0305C17.4714 18.8048 17.6682 19.692 17.3246 20.0747C17.1961 20.2177 17.0292 20.3206 16.8438 20.3712C16.3476 20.5066 15.6431 19.9326 14.2342 18.7845C13.309 18.0306 12.8464 17.6537 12.3153 17.5689C12.1064 17.5355 11.8935 17.5355 11.6846 17.5689C11.1535 17.6537 10.6909 18.0306 9.76577 18.7845C8.35681 19.9326 7.65234 20.5066 7.15614 20.3712C6.97072 20.3206 6.80381 20.2177 6.67538 20.0747C6.33171 19.692 6.52854 18.8048 6.92222 17.0305L6.98889 16.73C7.2031 15.7645 7.31021 15.2818 7.19815 14.8271C7.17725 14.7423 7.15081 14.659 7.11901 14.5776C6.94854 14.1415 6.58279 13.8087 5.85128 13.1432L5.369 12.7044C3.92395 11.3897 3.20143 10.7324 3.40961 10.1134C3.61779 9.49443 4.5907 9.4073 6.53651 9.23304L6.75145 9.21379C7.94036 9.10731 8.53482 9.05407 8.98767 8.71739C9.44052 8.3807 9.66272 7.82676 10.1071 6.71889L10.1437 6.62758Z"
        stroke="#f5f5f4"
      />
    </Svg>
  );
};
export const InfoIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="12" cy="12" r="9" stroke="#f5f5f4" />
      <Path
        d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z"
        fill="#f5f5f4"
      />
      <Path d="M12 17V10" stroke="#f5f5f4" />
    </Svg>
  );
};

export const EditIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.92971 19.283L5.92972 19.283L5.95149 19.2775L5.95151 19.2775L8.58384 18.6194C8.59896 18.6156 8.61396 18.6119 8.62885 18.6082C8.85159 18.5528 9.04877 18.5037 9.2278 18.4023C9.40683 18.301 9.55035 18.1571 9.71248 17.9947C9.72332 17.9838 9.73425 17.9729 9.74527 17.9618L16.9393 10.7678L16.9393 10.7678L16.9626 10.7445C17.2761 10.4311 17.5461 10.1611 17.7333 9.91573C17.9339 9.65281 18.0858 9.36038 18.0858 9C18.0858 8.63961 17.9339 8.34719 17.7333 8.08427C17.5461 7.83894 17.276 7.5689 16.9626 7.2555L16.9393 7.23223L16.5858 7.58579L16.9393 7.23223L16.7678 7.06066L16.7445 7.03738C16.4311 6.72395 16.1611 6.45388 15.9157 6.2667C15.6528 6.0661 15.3604 5.91421 15 5.91421C14.6396 5.91421 14.3472 6.0661 14.0843 6.2667C13.8389 6.45388 13.5689 6.72395 13.2555 7.03739L13.2322 7.06066L6.03816 14.2547C6.02714 14.2658 6.01619 14.2767 6.00533 14.2875C5.84286 14.4496 5.69903 14.5932 5.59766 14.7722C5.4963 14.9512 5.44723 15.1484 5.39179 15.3711C5.38809 15.386 5.38435 15.401 5.38057 15.4162L4.71704 18.0703C4.71483 18.0791 4.7126 18.088 4.71036 18.097C4.67112 18.2537 4.62921 18.421 4.61546 18.5615C4.60032 18.7163 4.60385 18.9773 4.81326 19.1867C5.02267 19.3961 5.28373 19.3997 5.43846 19.3845C5.57899 19.3708 5.74633 19.3289 5.90301 19.2896C5.91195 19.2874 5.92085 19.2852 5.92971 19.283Z"
        stroke="#f5f5f4"
      />
      <Path
        d="M12.5 7.5L15.5 5.5L18.5 8.5L16.5 11.5L12.5 7.5Z"
        fill="#f5f5f4"
      />
    </Svg>
  );
};

export const LogoutIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.23852 14.8117C5.63734 16.3002 6.51616 17.6154 7.73867 18.5535C8.96118 19.4915 10.4591 20 12 20C13.5409 20 15.0388 19.4915 16.2613 18.5535C17.4838 17.6154 18.3627 16.3002 18.7615 14.8117"
        stroke="#f5f5f4"
      />
      <Path
        d="M12 4L11.6877 3.60957L12 3.35969L12.3123 3.60957L12 4ZM12.5 13C12.5 13.2761 12.2761 13.5 12 13.5C11.7239 13.5 11.5 13.2761 11.5 13L12.5 13ZM6.68765 7.60957L11.6877 3.60957L12.3123 4.39043L7.31235 8.39043L6.68765 7.60957ZM12.3123 3.60957L17.3123 7.60957L16.6877 8.39043L11.6877 4.39043L12.3123 3.60957ZM12.5 4L12.5 13L11.5 13L11.5 4L12.5 4Z"
        fill="#f5f5f4"
      />
    </Svg>
  );
};

export const MyAccountIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17.9334 21.2571C17.7171 20.0575 16.9849 18.9644 15.8732 18.1813C14.7615 17.3983 13.346 16.9787 11.8906 17.0008C10.4352 17.0229 9.0391 17.4852 7.96236 18.3015C6.88562 19.1178 6.20171 20.2325 6.03804 21.4378"
        stroke="#f5f5f4"
      />
      <Circle cx="12" cy="10" r="3" stroke="#f5f5f4" stroke-linecap="round" />
      <Rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#f5f5f4" />
    </Svg>
  );
};

export const PieIcon = ({ strokeWidth }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="12"
        cy="12"
        r="9"
        stroke="#f5f5f4"
        strokeWidth={strokeWidth ? strokeWidth : "0.5"}
      />
      <Circle
        cx="12"
        cy="12"
        r="4"
        stroke="#f5f5f4"
        strokeWidth={strokeWidth ? strokeWidth : "0.5"}
      />
      <Path
        d="M12 3V7.5M18 18L15 15M18 6L15 9M3 12H7.5"
        strokeWidth={strokeWidth ? strokeWidth : "0.5"}
        stroke="#f5f5f4"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export const CheckIcon = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
        stroke="#f5f5f4"
        strokeLinecap="round"
      />
      <Path
        d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
        stroke="#f5f5f4"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export const NoConnectionIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      version="1.1"
    >
      <G>
        <Path
          fill="#a8a29e"
          d="M50,61c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S52.2,61,50,61z"
        />
        <Path
          fill="#a8a29e"
          d="M50,14.1c-19.8,0-35.9,16.1-35.9,35.9c0,19.8,16.1,35.9,35.9,35.9c19.8,0,35.9-16.1,35.9-35.9C85.9,30.2,69.8,14.1,50,14.1   z M81.9,50c0,7.4-2.5,14.2-6.8,19.6L60.6,56.3c-0.1-0.2-0.3-0.4-0.4-0.6c-0.6-0.6-1.3-1.1-1.9-1.6l-8.4-7.7c4.2,0,9,1.5,14.1,6.2   c0.4,0.4,0.9,0.5,1.4,0.5c0.5,0,1.1-0.2,1.5-0.6c0.7-0.8,0.7-2.1-0.1-2.8c-7.6-7-14.9-7.9-20.7-6.8l-4.6-4.2c7.8-2.6,18.4-2.6,30,8   c0.4,0.4,0.9,0.5,1.4,0.5c0.5,0,1.1-0.2,1.5-0.6c0.7-0.8,0.7-2.1-0.1-2.8c-13.9-12.7-26.9-11.6-35.8-8l-9.9-9.1   c5.7-5.3,13.3-8.6,21.7-8.6C67.6,18.1,81.9,32.4,81.9,50z M18.1,50c0-7.8,2.8-14.9,7.4-20.4l8.8,8c-5.2,2.9-8.4,6.1-8.5,6.2   c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1c0.3-0.3,3.5-3.6,8.6-6.2l4.2,3.9c-5.1,2.1-8.2,5.4-8.3,5.5   c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1c0.3-0.3,3.5-3.7,8.6-5.3l4.5,4.1c-5.6,0.4-9.5,4.4-9.6,4.5   c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1c0.7-0.7,6.2-6.1,13.2-1.3l16.6,15.3c-5.8,5.7-13.7,9.3-22.5,9.3   C32.4,81.9,18.1,67.6,18.1,50z"
        />
      </G>
    </Svg>
  );
};