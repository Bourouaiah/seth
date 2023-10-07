import { AiOutlineFieldTime } from "react-icons/ai";
export default function Features() {
  return (
    <section className="py-6">
      <h1 className="my-10 text-2xl text-sky_blue text-center font-extrabold capitalize">
        Features
      </h1>

      <div className="flex flex-wrap p-8">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-4 inline-block">
              <AiOutlineFieldTime className="text-7xl text-[#6a64f1] font-bold w-16" />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Replay in no time
              </h3>
              <p className="text-base font-medium text-body-color">
                Swift email responses ensure efficient communication and satisfy
                customer inquiries, fostering positive interactions and
                relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4049 2.9752H37.19C38.0116 2.9752 38.6776 2.30918 38.6776 1.4876C38.6776 0.666021 38.0116 0 37.19 0H10.9091C9.53977 0 8.42974 1.11003 8.42974 2.47933V17.5764L1.04954 22.7859C0.391399 23.2505 0 24.0059 0 24.8115V57.5207C0 58.89 1.11004 60 2.47933 60H57.5205C58.8898 60 59.9999 58.89 59.9999 57.5207V26.4868C59.9999 24.3552 57.488 23.2172 55.8856 24.6229L52.066 27.8242V22.8021C52.066 21.9805 51.4 21.3145 50.5784 21.3145C49.7568 21.3145 49.0908 21.9805 49.0908 22.8021V30.2401C49.0908 30.2656 49.0915 30.291 49.0927 30.3162L30.2843 46.0802L11.4049 29.0236V18.365C11.4051 18.3523 11.4051 18.3396 11.4049 18.3269V2.9752ZM8.42974 21.2181L5.24984 23.4628L8.42974 26.3357V21.2181ZM23.284 43.7729C23.2591 43.7943 23.2333 43.815 23.2066 43.835L5.62021 57.0248H54.8755L37.4608 43.9637L31.9071 48.6143C30.9458 49.4575 29.5009 49.4314 28.5708 48.5539L23.284 43.7729ZM39.8036 42.0019L57.0247 54.9177V27.5813L39.8036 42.0019ZM2.9752 55.2896L21.0384 41.7422L2.9752 25.4071V55.2896Z"
                  fill="#6A64F1"
                ></path>
                <circle
                  cx="46.6115"
                  cy="11.4049"
                  r="9.42147"
                  fill="#6A64F1"
                ></circle>
                <path
                  d="M46.7807 15.868C47.6859 15.868 48.6475 15.6441 49.0878 15.4202L48.7884 14.5452C48.4538 14.6692 47.6436 14.8965 46.8405 14.8965C44.5088 14.8965 43.2478 13.6633 43.2478 11.431C43.2478 9.35033 44.4524 7.90005 46.7525 7.90005C48.6299 7.90005 50.0283 8.9404 50.0247 10.8971C50.0283 12.3198 49.8028 12.9605 49.2393 12.9605C48.9399 12.9605 48.7637 12.7263 48.7602 12.3852V9.10575H47.7775V9.49157H47.7282C47.6155 9.18842 46.9392 8.90939 46.1748 9.01274C45.1921 9.1402 44.2481 9.92907 44.2481 11.4035C44.2481 12.9226 45.0935 13.8149 46.2417 13.8665C47.0413 13.9044 47.6612 13.5565 47.8268 13.1466H47.8691C47.9536 13.6633 48.4185 13.9458 49.1301 13.9079C50.6447 13.8527 51.0779 12.5299 51.0744 10.9556C51.0779 8.69237 49.521 6.94238 46.7771 6.94238C43.8536 6.94238 42.1523 8.7027 42.1488 11.4448C42.1523 14.2524 43.8254 15.868 46.7807 15.868ZM46.5341 12.8779C45.6148 12.8779 45.3048 12.1475 45.3013 11.3621C45.3048 10.5767 45.7521 10.0014 46.5411 10.0014C47.4182 10.0014 47.7423 10.4217 47.7458 11.3587C47.7564 12.3646 47.4253 12.8779 46.5341 12.8779Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Easy to reach out
              </h3>
              <p className="text-base font-medium text-body-color">
                Effortless accessibility for prompt and convenient
                communication, ensuring a seamless and responsive interaction
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
              <svg
                width="67"
                height="60"
                viewBox="0 0 67 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.892 6.67578C17.892 6.1235 18.3397 5.67578 18.892 5.67578H24.226C26.4351 5.67578 28.226 7.46664 28.226 9.67578V32.789C28.226 33.3413 27.7783 33.789 27.226 33.789C26.6737 33.789 26.226 33.3413 26.226 32.789V9.67578C26.226 8.57121 25.3305 7.67578 24.226 7.67578H18.892C18.3397 7.67578 17.892 7.22807 17.892 6.67578Z"
                  fill="#6A64F1"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.8959 38.7891C37.8959 38.2368 38.3436 37.7891 38.8959 37.7891H49.7859C51.995 37.7891 53.7859 39.5799 53.7859 41.7891V50.5679C53.7859 51.1202 53.3382 51.5679 52.7859 51.5679C52.2336 51.5679 51.7859 51.1202 51.7859 50.5679V41.7891C51.7859 40.6845 50.8905 39.7891 49.7859 39.7891H38.8959C38.3436 39.7891 37.8959 39.3413 37.8959 38.7891Z"
                  fill="#ABA8F7"
                ></path>
                <rect
                  width="20.0016"
                  height="13.3344"
                  rx="2"
                  fill="#6A64F1"
                ></rect>
                <rect
                  x="19"
                  y="33"
                  width="21"
                  height="11"
                  rx="2"
                  fill="#ABA8F7"
                ></rect>
                <rect
                  x="39.8958"
                  y="47.666"
                  width="24.6688"
                  height="11.3344"
                  rx="2"
                  fill="white"
                  stroke="#6A64F1"
                  strokeWidth="2"
                ></rect>
                <rect
                  x="21"
                  y="18"
                  width="45"
                  height="10"
                  rx="2"
                  fill="white"
                  stroke="#6A64F1"
                  strokeWidth="2"
                ></rect>
              </svg>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                High qualtiy product
              </h3>
              <p className="text-base font-medium text-body-color">
                Outstanding product quality ensures customer satisfaction,
                trust, and loyalty, contributing to long-term business success
                and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}