import { selector } from 'recoil';
import { saved } from '@/utils/savedContent';
import { cellContent } from './CellContentState';
import { evaluate } from 'mathjs';

export const CalculateCellValue = <T>(cellId: string) =>
  saved(`calculatedCell_${cellId}`,() =>
    selector({
      key:`calculatedCell_${cellId}`,
      get:({get}) => {
        const value = get(cellContent(cellId)) as string;

        if(value.startsWith('=')){
          try{
            return evaluate(value.slice(1))
          } catch {
            return value;
          }
        }
        return value;
      }
    })
  );
