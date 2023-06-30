import React from "react";
import DrawingWidget from "../drawing-widget/drawing-widget.component";

const Composition: React.FC = () => {
  // Other composition component logic

  return (
    <div className="composition">
      {/* Other composition component elements */}
      <DrawingWidget
        selectedImage="https://example.com/image1.png"
        taskDescription="# Draw region around each animal."
        images={[{ src: "https://example.com/image1.png", name: "Image 1" }]}
        regionClsList={["Dog", "Cat"]}
        enabledTools={["create-box"]}
      />
    </div>
  );
};

export default Composition;
