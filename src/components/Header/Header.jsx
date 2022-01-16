import {
    Link
  } from "react-router-dom";
  
import style from './style/Header.module.css'
import User from "./components/User/User";

function Header() {

    return (
        <>
            <div className={style.container}>
                <div className={style.left_menu}>
                    <div className={style.logo}>
                        logohere
                    </div>
                    <Link  className={style.button} to="/home" >
                        <p>home</p>
                    </Link>
                    <Link className={style.button} to="/browser" > 
                        <p>browse</p>
                    </Link>
                    <Link className={style.button} to="/list" > 
                        <p>list</p>
                    </Link>
                    <Link className={style.button} to="/favourites" > 
                        <p>favourites</p>
                    </Link>
                    <Link className={style.button} to="/about" > 
                        <p>about</p>
                    </Link>
                </div>
                <div className={style.right_menu}>
                    <User />
                </div>
            </div>
        </>
    );
}
export default Header;