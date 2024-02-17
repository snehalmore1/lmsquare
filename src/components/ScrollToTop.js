import { useEffect } from "react";

const ScrollToTop = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        &#8593; {/* Unicode arrow-up character */}
      </button>
      {props.children}
    </>
  );
};

export default ScrollToTop;
