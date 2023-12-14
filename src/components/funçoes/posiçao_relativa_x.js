import { vaziaString, splitL } from "./split";

const posiçaoRelativa_x = (e) => {

    return parseFloat( vaziaString( splitL( e["style"]["left"],'p' ) ) );

}

export {posiçaoRelativa_x}