
import LiMenuModel from "../model/LiMenuModel";
import ServerMenu from "../server/ServerMenu";

class ManageMenu{

        getListLiMenu():Array<LiMenuModel>{

            const listLi:Array<LiMenuModel> = ServerMenu.prototype.getLIMenu();
             return listLi;
        }

           
}
export default ManageMenu;