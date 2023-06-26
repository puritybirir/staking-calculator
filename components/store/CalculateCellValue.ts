import { selector } from 'recoil';
import { saved } from '@/utils/saved';
import { CellContentState } from './CellContentState';
import { evaluate } from 'mathjs';
import { getEquationFromState } from '@/utils/getEquationFromState';

export const CalculateCellValue = (cellId: string) =>
  saved(`evaluatedCell_${cellId}`, () =>
    selector({
      key: `evaluatedCell_${cellId}`,
      get: ({ get }) => {
        const value = get(CellContentState(cellId)) as string;

        if (value.startsWith("=")) {
          try {
            const evaluatedExpression = getEquationFromState(
              get,
              value.slice(1)
            );

            if (evaluatedExpression == "!ERROR") {
              throw new Error('!Error');
            }

            return evaluate(evaluatedExpression);
          } catch {
            return value;
          }
        }

        return value;
      },
    })
  );
