// Lucas: Crair arquivo
// components/VerticalCarousel.tsx

"use client";

import { ReactNode, Children, isValidElement } from "react";
import styles from "./VerticalCarousel.module.css";

interface VerticalCarouselProps {
  children: ReactNode;
  height?: string; // agora será uma string CSS (ex: "500px")
}

export function VerticalCarousel({ children, height = "500px" }: VerticalCarouselProps) {
  

  return (
    <div className={styles.container} style={{ maxHeight: height }}>
   
      <div >
        <div className={styles.grid} >
          {Children.map(children, (child, idx) =>
            isValidElement(child) ? (
              <div key={idx} className={styles.gridItem}>
                {child}
              </div>
            ) : (
              child
            )
          )}
        </div>
      </div>

      
    </div>
  );
}






