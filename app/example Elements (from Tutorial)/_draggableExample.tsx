import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "unique-id",
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  //Docs: https://docs.dndkit.com/api-documentation/draggable
  //listener and attributes are given to the DOM Element that handles the drag and can be
  //different from the element the setNodeRef is given to
  //You can even have multiple drag handles if that makes sense in the context of your application:
  return (
    <div ref={setNodeRef} style={style}>
      <button {...listeners} {...attributes}>Drag handle 1</button>
      /* Some other content that does not activate dragging */
      <button {...listeners} {...attributes}>Drag handle 2</button>
    </div>
  );
}
