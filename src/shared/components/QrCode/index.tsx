import { QRCodeSVG } from 'solid-qr-code';

interface IQrCodeProps {
  value: string;
  size: number;
  ref?: SVGSVGElement | ((element: SVGSVGElement) => void);
  testId?: string;
  classes?: string;
}

const QrCode = (props: IQrCodeProps) => {
  return (
    <div data-testid={props.testId} class={props.classes}>
      <QRCodeSVG value={props.value} size={props.size} ref={props.ref} />
    </div>
  );
};
export default QrCode;
