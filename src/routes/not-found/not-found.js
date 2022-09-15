import { useEffect } from "react";
import { useAppContext } from "../../context/app-context";
import './not-found.styles.scss'

const NotFound = () => {
  const { setOtherNav } = useAppContext();
  useEffect(() => {
    setOtherNav();
  }, []);
  return (
    <div class="error-page">
    <div className="error-content">
      <h1 className="number-error">404</h1>
      <h2 className="error-type">Page Not Found</h2>
    
      </div>
    </div>
  );
};
export default NotFound;
