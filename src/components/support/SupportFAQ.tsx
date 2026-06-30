"use client";

import { useState } from "react";

import { supportFaqs } from "./supportMockData";
import { supportStyles } from "./SupportPageContent.styles";

export default function SupportFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToForm() {
    document.getElementById("support-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  const leftFaqs = supportFaqs.slice(0, 4);
  const rightFaqs = supportFaqs.slice(4, 8);

  function renderFaqs(items: typeof supportFaqs, offset: number) {
    return items.map((faq, index) => {
      const realIndex = index + offset;
      const isActive = activeIndex === realIndex;

      return (
        <div key={faq.question} className={supportStyles.faqItem}>
          <button
            type="button"
            className={supportStyles.faqButton}
            onClick={() => setActiveIndex(isActive ? -1 : realIndex)}
          >
            <span
              className={`${supportStyles.faqNumber} ${
                isActive ? supportStyles.faqNumberActive : ""
              }`}
            >
              {String(realIndex + 1).padStart(2, "0")}
            </span>

            <span className={supportStyles.faqQuestion}>{faq.question}</span>
            <span className={supportStyles.faqIcon}>{isActive ? "−" : "+"}</span>
          </button>

          {isActive && <p className={supportStyles.faqAnswer}>{faq.answer}</p>}
        </div>
      );
    });
  }

  return (
    <section className={supportStyles.section}>
      <div className={supportStyles.sectionHeader}>
        <div>
          <h2 className={supportStyles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={supportStyles.sectionSubtitle}>
            Got questions? We have answers about accounts, watchlists, trailers and V Stream features.
          </p>
        </div>

        <button type="button" className={supportStyles.askButton} onClick={scrollToForm}>
          Ask a Question
        </button>
      </div>

      <div className={supportStyles.faqGrid}>
        <div>{renderFaqs(leftFaqs, 0)}</div>
        <div>{renderFaqs(rightFaqs, 4)}</div>
      </div>
    </section>
  );
}