import { Link } from "react-router-dom";
import style from "./style/List.module.css";
import exdata from "./../../exampleData/items.json";

function List() {
  const Items = exdata.map((data, id) => {
    const Ingredients = data.ingredients.map((ingdata, id) => {
      return <div className={style.ingredients}>{ingdata.name}</div>;
    });

    return (
      <Link
        className={style.item}
        style={{ animationDelay: `${(id + 1) * 0.5}s` }}
        to={"/item/" + data.id}
      >
        <div className={style.container}>
          <div className={style.left_side}>
            <div className={style.image}></div>
          </div>
          <div className={style.right_side}>
            <div className={style.name}>
              <p>{data.name}</p>
            </div>
            {Ingredients}
          </div>
        </div>
      </Link>
    );
  });

  return <>{Items}</>;
}
export default List;
