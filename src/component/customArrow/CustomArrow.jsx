import React from 'react'
import styles from "./Custom.module.css"

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}  ${styles.nextArrow}`}
        style={{
          ...style,
          right: '10px', // Position from the right
          bottom: '10px', // Position from the bottom
          transform: 'translateY(50%)', // Adjust for vertical centering
        }}
        onClick={onClick}
      >
        <span className={styles.arrowIcon}>→</span> {/* Replace with custom icon */}
      </div>
    );
  }

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.Button}`}
        style={{
          ...style,
          left: '10px', // Position from the left
          bottom: '10px', // Position from the bottom
          transform: 'translateY(50%)', // Adjust for vertical centering
        }}
        onClick={onClick}
      >
        <span className={styles.arrowIcon}>←</span> {/* Replace with custom icon */}
      </div>
    );
  }