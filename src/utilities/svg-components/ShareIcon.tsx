import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IShareIconProps extends ISvgBaseComponentProps {
  fillClasses?: string;
}

export const ShareIcon = (props: IShareIconProps) => {
  return (
    <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>DFE16DCF-A5DD-4B4D-B681-ABFFAB2E02E5</title>
      <g id="5.7分享賺錢" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          id="5.7.3_面對面掃碼"
          transform="translate(-20.000000, -752.000000)"
          class={formatClasses('fill-primary', props.fillClasses)}>
          <g id="picker/share-money" transform="translate(0.000000, 121.000000)">
            <g id="share" transform="translate(20.000000, 631.000000)">
              <path
                d="M6.65216622,28 L21.3478338,28 C22.6285883,28 23.5908046,27.6845754 24.2344828,27.0537262 C24.8781609,26.4228769 25.2,25.4895436 25.2,24.2537262 L25.2,11.5688042 C25.2,10.3329867 24.8781609,9.40127094 24.2344828,8.77365685 C23.5908046,8.14604275 22.6285883,7.8322357 21.3478338,7.8322357 L17.7333333,7.8322357 L17.7333333,9.55008666 L21.3082228,9.55008666 C21.988211,9.55008666 22.5147067,9.72801849 22.88771,10.0838821 C23.2607132,10.4397458 23.4472149,10.9638359 23.4472149,11.6561525 L23.4472149,24.1663778 C23.4472149,24.8651646 23.2607132,25.3908723 22.88771,25.7435009 C22.5147067,26.0961294 21.988211,26.2724437 21.3082228,26.2724437 L6.69177719,26.2724437 C5.99858532,26.2724437 5.46878868,26.0961294 5.10238727,25.7435009 C4.73598585,25.3908723 4.55278515,24.8651646 4.55278515,24.1663778 L4.55278515,11.6561525 C4.55278515,10.9638359 4.73598585,10.4397458 5.10238727,10.0838821 C5.46878868,9.72801849 5.99858532,9.55008666 6.69177719,9.55008666 L10.2765694,9.55008666 L10.2765694,7.8322357 L6.65216622,7.8322357 C5.37801356,7.8322357 4.41744769,8.14442519 3.77046861,8.76880416 C3.12348954,9.39318313 2.8,10.3265165 2.8,11.5688042 L2.8,24.2537262 C2.8,25.4960139 3.12348954,26.4309648 3.77046861,27.0585789 C4.41744769,27.686193 5.37801356,28 6.65216622,28 Z M14,18.2946274 C14.2376658,18.2946274 14.4423224,18.2121317 14.6139699,18.0471404 C14.7856174,17.882149 14.8714412,17.686424 14.8714412,17.4599653 L14.8714412,4.21213172 L14.802122,2.36811092 L15.8419098,3.42599653 L17.9214854,5.56117851 C18.0799293,5.73587522 18.2779841,5.82322357 18.5156499,5.82322357 C18.740112,5.82322357 18.9299145,5.75205084 19.0850575,5.60970537 C19.2402004,5.46735991 19.3177719,5.28619295 19.3177719,5.06620451 C19.3177719,4.95621028 19.2946655,4.85592143 19.2484527,4.76533795 C19.2022399,4.67475448 19.1395225,4.58740612 19.0603006,4.50329289 L14.6337754,0.281455806 C14.5215444,0.177931831 14.4159151,0.105141537 14.3168877,0.063084922 C14.2178603,0.0210283073 14.1122311,0 14,0 C13.8877689,0 13.7821397,0.0210283073 13.6831123,0.063084922 C13.5840849,0.105141537 13.4784556,0.177931831 13.3662246,0.281455806 L8.93969938,4.50329289 C8.85387563,4.58740612 8.78950781,4.67475448 8.74659593,4.76533795 C8.70368406,4.85592143 8.68222812,4.95621028 8.68222812,5.06620451 C8.68222812,5.28619295 8.75649867,5.46735991 8.90503979,5.60970537 C9.0535809,5.75205084 9.24008252,5.82322357 9.46454465,5.82322357 C9.70881226,5.82322357 9.91016799,5.73587522 10.0686118,5.56117851 L12.1580902,3.42599653 L13.197878,2.36811092 L13.1285588,4.21213172 L13.1285588,17.4599653 C13.1285588,17.686424 13.2143826,17.882149 13.3860301,18.0471404 C13.5576776,18.2121317 13.7623342,18.2946274 14,18.2946274 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
