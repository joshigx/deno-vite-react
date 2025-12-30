import { useDragDropMonitor } from '@dnd-kit/react';

export default function DragMonitor() {
    useDragDropMonitor({

        onDragStart(event, manager) {
            console.log('Started dragging', event.operation.source);
            const allDraggables = manager.registry.draggables;



            console.log(`Es gibt ${allDraggables.value} draggable Items`);
        },
        onDragMove(event) {
            //console.log('Current position:', event.operation.position);
        },
        onDragOver(event) {
           // console.log('Over droppable:', event.operation.target);
        },
        onDragEnd(event) {
            const { operation, canceled } = event;
            console.log("Position x: " + operation.position.current.x);
            console.log("Position y: " + operation.position.current.y);

            if (canceled) {
                console.log('Drag cancelled');
                return;
            }

            if (operation.target) {
                console.log(`Dropped ${operation.source?.id} onto ${operation.target?.id}`);
            }
        },
        onCollision(event) {
           // console.log('Collisions:', event.collisions);
        }
    });

    return null;
}