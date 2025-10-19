import ViewMenu from "./ViewMenu";
import './css/ViewHeaderDev.css'

function ViewHeaderDev(){
    return(
        <div className="viewHeaderdev">
        <ViewMenu />
        <div id="personal">
            <div id="personal-information">
                <div id="infor-foto">
                    <div id="foto">

                    </div>
                    <div id="information">

                    </div>
                </div>
                <div id="social-media">

                </div>

            </div>
        </div>
        </div>
    )
}
export default ViewHeaderDev;