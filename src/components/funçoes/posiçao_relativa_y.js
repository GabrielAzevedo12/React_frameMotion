import { vaziaString, splitL } from "./split";

const posiçaoRelativa_y = (e) => {

    return parseFloat( vaziaString( splitL(e["style"]["top"],'p') ) );

}

export {posiçaoRelativa_y }