import React from "react";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="row mt-5 footers">
        <div className="col-lg-6">
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
            alt="about img"
            className="img-fluid w-100 h-75"
          />
        </div>
        <div className="col-lg-6">
          <h1>Our Story</h1>
          <div className="line " />
          <p className="mt-4 text-secondary font-weight-bolder text-justify line-space">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            aliquam et eum. Necessitatibus aut, quia recusandae fugiat veniam
            consequuntur deleniti obcaecati quidem similique atque dolorum,
            repellat, iure nemo odio itaque!Lorem Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis, similique. Accusantium
            maiores quaerat beatae recusandae quas quae minima, praesentium
            quisquam! A saepe mollitia cum quis neque maxime voluptatum omnis
            recusandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
