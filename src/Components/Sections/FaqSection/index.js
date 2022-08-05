import React, { useState } from "react";
import "./styles.css";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";

export default function FaqSection() {
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. ",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false,
    },
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="FaqSection">
      <h2 style={{ textAlign: "left" }}>Frequently Asked</h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div className="askQuestionAndImageBanner">
          <Link to={"/"} style={{ marginBottom: 20 }} className="heroSecCta">
            Ask A Question
          </Link>
          <div className="askQuestionBanner">
            <img
              loading="lazy"
              width="500"
              height="500"
              alt="ask a question"
              src="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/close-up-portrait-attractive-young-woman-isolated-scaled.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
