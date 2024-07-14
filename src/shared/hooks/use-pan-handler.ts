import { JigSawPuzzleStatus } from '@shared/enums';
import { ICustomEventWithHammerInput } from '@shared/interfaces';

export const usePanHandler = ({
  dragX,
  setDragX,
  imageWidth,
  fragmentSize,
  offsetX,
  setPuzzleStatus,
}: {
  dragX: () => number;
  setDragX: (value: number) => void;
  imageWidth: () => number;
  fragmentSize: () => number;
  offsetX: () => number;
  setPuzzleStatus: (value: JigSawPuzzleStatus) => void;
}) => {
  let startX: number;
  let trailY: number[] = [];

  const onPanStart = () => {
    startX = dragX();
    trailY = [];
  };

  const onPanMove = (e: ICustomEventWithHammerInput) => {
    const newOffsetX = startX + e.detail.deltaX;
    const normalizedOffsetX = Math.min(Math.max(newOffsetX, 0), imageWidth() - fragmentSize());
    setDragX(normalizedOffsetX);
    trailY.push(e.detail.center.y);
  };

  const onPanEnd = () => {
    const isMatch = Math.abs(dragX() - offsetX()) < 5;
    const average: number = trailY.reduce((a, b) => a + b) / trailY.length;
    const stddev: boolean = Math.sqrt(average) !== 0;
    if (isMatch && stddev) {
      setPuzzleStatus(JigSawPuzzleStatus.Match);
    } else if (isMatch && !stddev) {
      setPuzzleStatus(JigSawPuzzleStatus.PossibleRobotDetected);
    } else {
      setPuzzleStatus(JigSawPuzzleStatus.Error);
    }
  };

  return { onPanStart, onPanMove, onPanEnd };
};
