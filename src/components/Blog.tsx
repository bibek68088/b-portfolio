import img from "../images/image1.jpg";
const Blog = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col items-center gap-6 pb-10">
        <h2 className="text-3xl font-bold">Blog</h2>
        <p className="font-light">
          Far far away, behind the world mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="container grid lg:grid-cols-3 ">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="detalsi">
          <h2>Why Lead Generation is Key for Business Growth</h2>
          <p>Sept.12, 2019 </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regilialia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
