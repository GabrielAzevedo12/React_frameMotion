import { vaziaString, splitL } from "./split";

const cat_h = (e) => {

    return parseFloat( vaziaString( splitL( e["style"]["height"],'p' ) ) );

}

export {cat_h}