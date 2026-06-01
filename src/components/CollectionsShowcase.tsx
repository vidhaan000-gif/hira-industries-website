"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { collectionHighlights } from "@/lib/site-data";

export default function CollectionsShowcase() {
  return (
    <section className="page-section collection-showcase">
      <div className="site-shell">
        <div className="products-intro">
          <div className="section-kicker">Collections</div>
          <h2 className="section-title">Premium product collections</h2>
          <p className="section-lead">
            From tea sets to serveware, every collection is designed to feel polished, balanced, and ready for premium homes and hospitality spaces.
          </p>
        </div>

        <div style={{ marginTop: "1.5rem" }} className="collection-grid">
          {collectionHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="collection-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <div className="collection-card__inner">
                <div className="collection-card__media" aria-hidden="true">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="collection-card__image"
                    loading="lazy"
                    style={{ objectPosition: item.objectPosition ?? "center center" }}
                  />
                </div>

                <div className="collection-card__content">
                  <div className="collection-card__subtitle">{item.subtitle}</div>
                  <h3 className="collection-card__title">{item.title}</h3>
                  <p className="collection-card__text">{item.description}</p>

                  <div className="collection-card__footer">
                    <Link href="/products" className="site-button site-button--solid collection-card__button">
                      View range
                      <FiArrowRight className="button-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
