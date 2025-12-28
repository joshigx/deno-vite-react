import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DroppableProps = {
  id: string
  children: ReactNode
}

export function Droppable(props: DroppableProps) {



/**
 * 
 * interface UseDroppableArguments {
 * id: string | number;
 * disabled?: boolean;
 * data?: Record<string, any>;
}
 * 
 * 
 */

  const { setNodeRef } = useDroppable({
    id: props.id,
  });



  return (
    <div ref={setNodeRef}>
      {props.children}
    </div>
  );
}

export default function MultipleDroppables() {
  const droppables = ['1', '2', '3', '4'];

  return (
    <section>
      {droppables.map((id) => (
        <Droppable id={id} key={id}>
          Droppable container id: ${id}
        </Droppable>
      ))}
    </section>
  );
}