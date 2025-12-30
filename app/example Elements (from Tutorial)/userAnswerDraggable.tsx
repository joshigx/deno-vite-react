import { useDraggable } from "@dnd-kit/core";
//import { CSS } from '@dnd-kit/utilities';
import { type ReactNode, useEffect, useState } from "react";

type DraggableProps = {
  id: string;
  children?: ReactNode;
  startPosition?: { x: number; y: number };
};

export default function Draggable(props: DraggableProps) {
  const [position, setPosition] = useState({
    x: (props.startPosition?.x || 0),
    y: (props.startPosition?.y || 0),
  });
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const [lastTransform, setLastTransform] = useState(transform);

  useEffect(() => {
    if (lastTransform && (transform === null)) {
      setPosition((prev) => ({
        x: prev.x + lastTransform.x,
        y: prev.y + lastTransform.y,
      }));
    }
    setLastTransform(transform);
  }, [transform]);

  const style = {
    position: "absolute" as const, // Feste Position im Dokument
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
    touchAction: "none",
  };

  return (
    <button
      type="button"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="text-white bg-brand box-border bg-amber-700 border border-transparent 
         hover:bg-brand-strong hover:bg-amber-900 
         focus:ring-4 focus:ring-brand-medium 
         shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
    >
      {props.children}
    </button>
  );
}
