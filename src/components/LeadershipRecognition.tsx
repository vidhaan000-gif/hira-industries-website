"use client";

import { motion } from "framer-motion";
import { FiAward, FiStar, FiUser } from "react-icons/fi";

const recognitionItems = [
  {
    icon: FiStar,
    title: "Droupadi Murmu",
    label: "President of India",
    text:
      "Smt. Droupadi Murmu, the current President of India, represents dignity, resilience, and public service. Her leadership is a reminder that steady purpose can shape lasting change.",
  },
  {
    icon: FiUser,
    title: "Salman Beg",
    label: "Owner, Hira Industries",
    text:
      "Salman Beg leads Hira Industries with a hands-on commitment to quality, trust, and premium presentation. His vision keeps the brand focused on long-term relationships and consistent standards.",
  },
  {
    icon: FiAward,
    title: "Awards & Recognition",
    label: "Selected highlights",
    text:
      "Premium Craftsmanship Recognition, Customer Trust Appreciation, and Design Leadership Mention are presented here as polished recognition highlights. Replace them with your verified awards if you want them to be official.",
  },
];

export default function LeadershipRecognition() {
  return (
    <section className="page-section page-section--tight">
      <div className="site-shell">
        <div className="section-intro section-intro--centered leadership-intro">
          <div className="section-kicker">Leadership & Recognition</div>
          <h2 className="section-title section-title--tight">
            People and moments that shape the brand
          </h2>
          <p className="section-lead">
            Hira Industries is built on leadership, trust, and a clear standard of excellence. This section adds a more human layer to the brand story while keeping the presentation clean and premium.
          </p>
        </div>

        <div className="leadership-layout">
          <div className="leadership-stack">
            {recognitionItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="leadership-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="leadership-card__icon" aria-hidden="true">
                    <Icon size={18} />
                  </div>

                  <div className="leadership-card__label">{item.label}</div>
                  <h3 className="leadership-card__title">{item.title}</h3>
                  <p className="leadership-card__text">{item.text}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="leadership-visual leadership-visual--square surface-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="leadership-visual__frame">
              <img
                src="/images/owner.jpg"
                alt="Salman Beg with the Hon'ble President of India"
                className="leadership-visual__image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
