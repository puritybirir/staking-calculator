import { CellContentState } from "@/components/store/CellContentState";
import { cellLetterNumberToMatrix } from "./cellLetterNumberToMatrix"

export const getEquationFromState = (
  getState: any,
  expression: any,
  notAllowedCellsIds: string[] = []
) => {
  const filterFoundCells = notAllowedCellsIds.filter((cellId) =>
    expression.includes(cellId)
  );

  if (filterFoundCells.length) {
    return "!ERROR";
  }

  const cellValues = [...Array.from(expression.matchAll(/[A-Z]+[0-9]+/gi))]
    .map((regexOutput: any) => regexOutput[0])
    .map((cellId: string) => {
      const { row, column } = cellLetterNumberToMatrix(cellId);

      let value = "";

      try {
        value = getState(CellContentState(`${row},${column}`)) || 0;

        if (value.startsWith("=")) {
          notAllowedCellsIds.push(cellId);
          value = getEquationFromState(
            getState,
            value.slice(1),
            notAllowedCellsIds
          );
        }
      } catch {}

      return {
        cellId,
        value,
      };
    });

  const evaluatedExpression = cellValues.reduce(
    (finalExpression, cellValue) =>
      finalExpression.replaceAll(cellValue.cellId, cellValue.value.toString()),
    expression
  );

  // Evaluated expression needs to be added between brackets to avoid issues caused
  // by Mathematical operations priority
  return `(${evaluatedExpression})`;
};
