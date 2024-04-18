import Rive from "rive-react";
import Ellipseanimated from "../assets/animation/ellipseanim.riv";
import EllipseanimatedSm from "../assets/animation/semisllipseanim.riv";


function EllipseAnim(){
    return(
      <div>
      <div className="header-bottom anim-lg">
        <Rive src={Ellipseanimated} />
      </div>

      <div className="header-bottom anim-sm">
        <Rive src={EllipseanimatedSm}/>
        </div>
        </div>
    );
}

export default EllipseAnim;