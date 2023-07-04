import React from "react";
import DrawingWidget from "./components/drawing-widget/drawing-widget.component";

const DrawPage: React.FC = () => {
  // Add your draw page component implementation here

  return (
    <div>
      <h1>Draw Page</h1>
      <p>Welcome to the Draw Page!</p>
      <DrawingWidget selectedImage={""} taskDescription={""} images={[]} />
      {/* Add your draw page content and components here */}
    </div>
  );
};

export default DrawPage;
