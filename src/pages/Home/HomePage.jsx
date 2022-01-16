import style from "./style/HomePage.module.css";
import informations from "./../../exampleData/informations.json";

function HomePage() {
  const Informations = informations.map((data, id) => {

    return ( id%2 ? (
      <div className={style.container} style={{ animationDelay: `${(id + 1) * 0.5}s` }}>
        <div className={style.item}>
          <div className={style.photo} style={{ animationDelay: `${(id + 5) * 0.5}s` }}>t</div>
          <div className={style.textbox}>
            <div className={style.title}>
              <p>{data.title}</p>
            </div>
            <div className={style.text}>{data.text}</div>
          </div>
        </div>
      </div>) : 
      (
        <div className={style.container} style={{ animationDelay: `${ (id + 1) * 0.5}s` }}>
          <div className={style.item}>
            <div className={style.textbox}>
              <div className={style.title}>
                <p>{data.title}</p>
              </div>
              <div className={style.text}>{data.text}</div>
            </div>
            <div className={style.photo } style={{ animationDelay: `${(id + 1) * 0.5}s` }}>t</div>
          </div>
        </div>)
    );
  });

  return (
    <>
      <p className={style.greeting}>World of Coctails!</p>
      {Informations}
    </>
  );
}
export default HomePage;
