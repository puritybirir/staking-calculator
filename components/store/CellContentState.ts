import { saved } from '@/utils/savedContent';
import { atom } from 'recoil';

export const cellContent = (cellId: string) =>
  saved(cellId,() =>
    atom({
      key:`cell_${cellId}`,
      default:"",
    })
  );
