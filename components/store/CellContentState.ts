import { atom } from 'recoil';
import { saved } from '@/utils/saved';

export const CellContentState = (cellId: string) =>
  saved(cellId, () =>
    atom({
      key:`cell_${cellId}`,
      default:"",
    })
  );
