import React from "react";
import "./Testimonials.css";
import "animate.css"
function Testimonials({ data1, data2 }) {
  return (
    <div className="testimonial_main ">
      <div className="card">
        {data1.map((posts) => {
          return (
            <div className="card1" key={posts.id}>
              <div className="top ">
                <img src={posts.avatar} alt="" />
                <div className="top_details">
                  <p>
                    {posts.first_name}&nbsp;{posts.last_name}
                  </p>
                  <p className="top_email">{posts.email}</p>
                </div>
              </div>
              <p className="card_summary">
                "It’s amazing meeting really amazing people from the comfort of
                my home - people capable of adding real value. I find that
                incredibly awesome!"
              </p>
            </div>
          );
        })}
      </div>
      <div className="card_animation">
        {data2.map((posts) => {
          return (
            <div className="card2" key={posts.id}>
              <div className="top">
                <img src={posts.avatar} alt="" />
                <div className="top_details">
                  <p>
                    {posts.first_name}&nbsp;{posts.last_name}
                  </p>
                  <p className="top_email">{posts.email}</p>
                </div>
              </div>
              <p className="card_summary">
                "It’s amazing meeting really amazing people from the comfort of
                my home - people capable of adding real value. I find that
                incredibly awesome!"
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
