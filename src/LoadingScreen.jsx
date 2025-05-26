import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <span className="logo-text">Programming</span>
      </div>
      <div className="decorative-line"></div>
      <div className="classic-spinner"></div>
      <div className="decorative-line"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingScreen;