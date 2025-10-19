import ManageMenu from '../controle/ManageMenu';
import type LiMenuModel from '../model/LiMenuModel';
//import type LiMenuModel from '../model/LIMenuModel';
import './css/Menu.css';


 function ViewMenu (){

    const lista:Array<LiMenuModel> =  ManageMenu.prototype.getListLiMenu();

    return(
        <div className='div-of-nav'>
            <div id="name-pessoal">
                <h2>Jair do Nascimento de Oliveira</h2>
            </div>
            <nav>
                <ol>
                    {
                     lista.map((list, index)=>(
                             <li key={index}><a href='#'>{list.name}</a></li>
                        ))
                    }
                </ol>
            </nav>
        </div>
    )
}
export default ViewMenu