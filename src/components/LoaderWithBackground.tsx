import React from 'react';
import { Vortex } from 'react-loader-spinner';

// Define props for LoaderWithBackground
interface LoaderWithBackgroundProps {
  visible: boolean;
}

const LoaderWithBackground: React.FC<LoaderWithBackgroundProps> = ({ visible }) => {
  return (
    visible && (
      <div style={styles.overlay}>
        <Vortex
          visible={visible}
          height={80}
          width={80}
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'purple', 'orange']}
        />
      </div>
    )
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark black with opacity
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's above other content
  },
};

export default LoaderWithBackground;
