import "./Logo.css";
import ImageForOpenPage from "./../../../Assets/Images/ImageForOpenPage/Picture1.jpg";
function Logo(): JSX.Element {
  return (
    <div className="Logo">
      <img src={ImageForOpenPage} />
    </div>
  );
}

export default Logo;
