const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="mb-2 text-yellow-600">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-4 py-3">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
