import React, { useState } from "react";
import ReactImageAnnotate from "react-image-annotate";

interface Annotation {
  type: string;
  geometry: {
    type: string;
    points: [number, number][];
  };
  cls?: string;
}

interface DrawingWidgetProps {
  selectedImage: string;
  taskDescription: string;
  images: { src: string; name: string }[];
  regionClsList?: string[];
  enabledTools?: string[];
}

const DrawingWidget: React.FC<DrawingWidgetProps> = ({
  selectedImage,
  taskDescription,
  images,
  regionClsList,
  enabledTools,
}) => {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

  const handleAnnotationUpdate = (updatedAnnotations: Annotation[]) => {
    setAnnotations(updatedAnnotations);
  };

  const handleSaveAnnotations = () => {
    // Perform actions with the captured annotations
    // eslint-disable-next-line no-console
    console.log("Annotations:", annotations);
  };

  return (
    <div className="drawing-widget">
      <ReactImageAnnotate
        labelImages
        regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
        regionTagList={["tag1", "tag2", "tag3"]}
        images={[
          {
            src: "https://placekitten.com/408/287",
            name: "Image 1",
            regions: [],
          },
        ]}
      />
    </div>
  );
};

export default DrawingWidget;
