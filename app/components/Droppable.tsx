import { useEffect, type ReactNode } from "react";
import { useDroppable, type UniqueIdentifier } from "@dnd-kit/core";

type Props = {
  children?: ReactNode;
  id: string;
  className?: string;
  dropedOverID?: UniqueIdentifier | null | undefined
};

export default function Droppable(props: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };




  useEffect(() => {
    console.log("Über mir (" + props.id + ") wurde etwas gedroppt");
  }, [props.dropedOverID]);

  return (
    <div ref={setNodeRef} style={style} className={props.className}>
      {props.children}
    </div>
  );
}
