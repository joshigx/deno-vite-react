import type { UniqueIdentifier } from "@dnd-kit/core";
import type { loggedAnswer } from "../types/types.ts";

//wird in Droppable aufgerufen
/**
 * Validates and synchronizes the answer state for a given droppable zone.
 *
 * Iterates through a list of previously logged answers and compares each entry's
 * `droppableZoneId` against the provided `droppableId`. For any matching entry:
 * - If the `answerId` equals the `droppableZoneId`, the answer is considered correct:
 *   local state is set to `1` and the global state is updated with `1`.
 * - Otherwise, the answer is considered incorrect: local state is set to `-1` and
 *   the global state is updated with `-1`.
 *
 * If `loggedAnswers` is `null` the function treats the zone as unanswered and sets
 * both local and global states to `0`.
 *
 * Note: The function invokes the provided callbacks directly and may call them
 * multiple times if more than one logged answer matches the `droppableId`.
 *
 * @param loggedAnswers - Array of previously logged answers or `null` when no answers exist.
 *                        Each entry is expected to contain `droppableZoneId` and `answerId`.
 * @param droppableId - The identifier of the droppable zone to validate.
 * @param setLocalAnswerState - Callback used to set the local/component answer state.
 *                              Expected to accept: 1 (correct), -1 (incorrect), 0 (unanswered).
 * @param changeAnswerStateGlobally - Callback used to persist/update the answer state globally;
 *                                    receives the droppable ID and the numeric state (1, -1, or 0).
 *
 * @returns void
 *
 * @example
 * // Marks the droppable as correct or incorrect based on logged answers,
 * // and synchronizes the result with global state via callbacks.
 */

export function validateAnswers(
  loggedAnswers: loggedAnswer[] | null,
  droppableId: UniqueIdentifier,
  setLocalAnswerState: (value: number) => void,
) {
  if (loggedAnswers) {
    loggedAnswers.forEach((answer) => {
      if (answer.droppableZoneId === droppableId) {
        if (answer.answerId === answer.droppableZoneId) {
          //richtige Anwort
          setLocalAnswerState(1);
        } else {
          setLocalAnswerState(-1);
        }
      }
    });
  } else {
    setLocalAnswerState(0);
  }
}
