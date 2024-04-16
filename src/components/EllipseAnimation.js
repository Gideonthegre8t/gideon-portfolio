import Rive from "rive-react";
import Ellipseanimated from "../assets/animation/ellipseanim.riv";


function EllipseAnim(){
    return(
      <div className="header-bottom rive-anim">
        <Rive src={Ellipseanimated} />
      </div>
    );
}

export default EllipseAnim;