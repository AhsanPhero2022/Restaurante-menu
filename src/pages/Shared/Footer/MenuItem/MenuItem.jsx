const MenuItem = ({ item }) => {
  const { image, price, name } = item;
  return (
    <div className="flex space-x-4 mx-auto">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{price}</p>
      </div>
      <p className="text-yellow-500">$</p>
    </div>
  );
};

export default MenuItem;
