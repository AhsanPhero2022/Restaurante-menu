import { Link } from "react-router-dom";
import Cover from "../../../../Shared/Cover/Cover";
import MenuItem from "../../../../Shared/Footer/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid md:grid-cols-2 my-16 gap-10 mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
