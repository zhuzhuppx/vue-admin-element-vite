import appConfig from "@/appConfig.js";
import { getElementHeight } from "@/utils/domUtil.js";
export default () => {    
    let pageHeight =window.innerHeight;
    let headerHeight = getElementHeight(
        document.getElementsByClassName("header")[0]
    );
    let footerHeight = 0;
    if (appConfig.showFooter) {
        footerHeight = getElementHeight(
            document.getElementsByClassName("footer")[0]
        );
    }
    let mainHeight = pageHeight - headerHeight - footerHeight;
    let mains = document.getElementsByClassName("main-content");
    for (let index = 0; index < mains.length; index++) {
        mains[index].style.minHeight = mainHeight + "px";
    }
}