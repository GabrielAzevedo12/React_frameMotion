import { vaziaString, splitL } from "./split";

const cat_w = (e) => {

    return parseFloat( vaziaString( splitL( e["style"]["width"],'p' ) ) );

}

export {cat_w}