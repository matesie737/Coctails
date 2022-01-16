import style from './style/User.module.css'

function User() {
    return (
        <>
            <div className={style.user_name}>
                <p>user_name</p>
            </div>
            <div className={style.user_ico}>
                <p>user_icon</p>
            </div>
        </>);
}

export default User;