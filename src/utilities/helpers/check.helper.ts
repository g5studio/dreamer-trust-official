import { Sid } from '@shared/enums';

const periodMap: Record<number, string[]> = {
  [Sid.Football]: ['1h', '2h', 'ot1h', 'ot2h'],
  [Sid.Basketball]: ['q1', 'q2', 'q3', 'q4', 'ot', '1h', '2h'],
};

export const showPeriodTime = ({ sid, period }: { sid: Sid; period: string }) => {
  if (!period) {
    return false;
  }
  return periodMap[sid]?.includes(period);
};
