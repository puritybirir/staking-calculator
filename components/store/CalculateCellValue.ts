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
        const columnCharacter = cellId.split("").pop();
        const isFirstColumn = columnCharacter === '0';
        const isSecondColumn = columnCharacter === '1';
        const valueNum = Number(value);

        if (isFirstColumn && valueNum !== 0) {
          const formattedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueNum);
          return formattedValue;
        }

        if (isSecondColumn && valueNum !== 0) {
          const formattedValue = new Intl.NumberFormat('en-US', { style: 'percent' }).format(valueNum / 100);
          return formattedValue;
        }

        if (value.startsWith("=")) {
          try {
            const evaluatedExpression = getEquationFromState(get, value.slice(1));

            if (evaluatedExpression === "!ERROR") {
              throw new Error('!Error');
            }

            const result = evaluate(evaluatedExpression);
            const formattedResult = new Intl.NumberFormat('en-US').format(result / 100);
            return formattedResult;
          } catch {
            return value;
          }
        }

        return value;
      },
    })
  );
