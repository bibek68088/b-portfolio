import projImg1 from "../images/coffee-cup.png";
import projImg2 from "../images/customer-service.png";
import projImg3 from "../images/gift.png";

const Projects = () => {
  return (
    <section>
      <div className="flex justify-center p-3">
        <h1 className="text-2xl font-medium">My Projects</h1>
      </div>
      <p className="flex justify-center pb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elite.
      </p>

      <div className="p-2">
        <div className="grid grid-cols-3 gap-2">
          <img src={projImg1} alt="" className="w-6/12"/>
          <img src={projImg2} alt="" className="w-6/12"/>
          <img src={projImg3} alt=""className="w-6/12" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
