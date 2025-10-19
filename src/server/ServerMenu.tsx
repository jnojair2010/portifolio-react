import LiMenuModel from "../model/LiMenuModel"

export default class ServerMenu{

    getLIMenu():Array<LiMenuModel>{

        const listMenuLi : Array<LiMenuModel>= [];

        listMenuLi.push({id:1, name:"Sobre"});
        listMenuLi.push({id:2, name:"Portifolio" });
        listMenuLi.push({id:3, name:"Competencias"});
        listMenuLi.push({id:4, name:"GitHub"});
        
        return listMenuLi;
    }
}