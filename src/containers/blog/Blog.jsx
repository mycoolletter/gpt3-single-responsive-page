import React from "react";
import { Article } from "../../components";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import "./blog.css";

function Blog() {
  const articlesData = [
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 25, 2021",
      picture: blog2,
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 24, 2021",
      picture: blog3,
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 21, 2021",
      picture: blog4,
    },
    {
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 20, 2021",
      picture: blog5,
    },
  ];
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            picture={blog1}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {articlesData.map((item) => {
            return (
              <Article
                title={item.title}
                date={item.date}
                picture={item.picture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
