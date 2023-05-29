import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featurdImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featuredItem bg-fixed  pt-8 my-18">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className=" bg-slate-500 bg-opacity-50 text-white  md:flex justify-center items-center pb-20 pt-12 px-36 mb-8 gap-8">
        <div>
          <img src={featurdImg} alt="" />
        </div>
        <div className="space-y-2">
          <p>Aug 20, 2029</p>
          <p className="font-semibold uppercase">where can i get some?</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            facere tempore aliquam cum, asperiores aut beatae perspiciatis
            ducimus quasi quaerat amet error nulla accusamus in nobis velit
            minus modi quidem veritatis! Maiores quas quaerat earum, omnis
            dolorum sit voluptatum. Laborum dolorem, eaque iure est sit rem
            necessitatibus eos et consectetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
