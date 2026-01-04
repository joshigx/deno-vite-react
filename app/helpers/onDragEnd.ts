//usend in game.tsx

import type { DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import type { loggedAnswer } from "../types/types.ts";

export function onDragEnd(
  e: DragEndEvent,
  loggedAnswers: loggedAnswer[],
  setLoggedAnswers: React.Dispatch<React.SetStateAction<loggedAnswer[]>>,
  setDroppedOverID: React.Dispatch<
    React.SetStateAction<UniqueIdentifier | null>
  >,
) {
  //wenn ein item über dropzone losgelassen wird
  if (e.over) {
    //wenn zu diesem droppable bereits eine anwort existiert nichts machen
    if (loggedAnswers.some((item) => item.droppableZoneId === e.over!.id)) {
      console.log(
        "Über dieser dropzone befindet sich bereits etwas, deswegen wird diese anwort nicht eingeloggt",
      );
    } //wenn über dropzone fallen gelassen und dropzone frei
    else {
      setLoggedAnswers((prev) => {
        // a) Erst altes Vorkommen dieser Antwort entfernen (egal wo sie war)
        const filtered = prev.filter((item) => item.answerId !== e.active.id);

        // b) Dann neuen Eintrag hinzufügen
        return [
          ...filtered,
          { droppableZoneId: e.over!.id, answerId: e.active.id },
        ];
      });
    }

    console.log(
      "Das Draggable: " + e.active.id + " wurde auf " + e.over?.id +
        " gedroppt",
    );
  } //wenn das item ins leere gezogen wird

  else {
    console.log("Das Draggable wurde nicht über einer dropzone losgelassen");

    //ebenfalls ausloggen
    //ausloggfunktion bauen und dann doppelten code ersetzen
    setLoggedAnswers((prev) => {
      // Prüfen, ob das Element überhaupt existiert (optional für Logging, aber gut für Logik)
      const exists = prev.some((item) => item.answerId === e.active.id);

      if (exists) {
        console.log("war vorher aber in einer -> wird entfernt");
        // Neues Array zurückgeben OHNE das Element
        return prev.filter((item) => item.answerId !== e.active.id);
      }

      // Wenn es nicht existierte, nichts ändern (alten State zurückgeben)
      return prev;
    });
  }

  if (e.over?.id) {
    setDroppedOverID(e.over.id);
  } else {
    setDroppedOverID(null);
  }
}
