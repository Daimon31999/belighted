import React from 'react'
import styles from './css/FooterTop.module.css'
import FooterForm from "./FooterForm"

export default function FooterTop() {
  return (
    <footer className=""
      style={{
        backgroundColor: "red",
        position: "absolute",
        left: 0,
        top: "360vh",
        height: "150vh",
        width: "100%",
        backgroundColor: "#343D4F",
        color: "white",
        zIndex: "9999"
      }}>
      <div className="content m-24 flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-6 -mt-2">Belighted</h1>
          <p>Place de l'Université 25 <br />
          1348 Louvain-la-Neuve <br />
          Belgium
        </p>
        </div>
        <div className="flex flex-col ml-10">
          <ul id="footer">
            <li className={styles.li}><a href="#">Code Review</a></li>
            <li className={styles.li}><a href="#">UX Audit</a></li>
            <li className={styles.li}><a href="#">User Testing</a></li>
            <li className={styles.li}><a href="#">SaaS</a></li>
            <li className={styles.li}><a href="#">Free Assessment</a></li>
            <li className={styles.li}><a href="#">Estimate Project</a></li>
          </ul>
        </div>
        <div className="flex flex-col ml-10">
          <ul id="footer">
            <li className={styles.li}><a href="#">Strategy Workshop</a></li>
            <li className={styles.li}><a href="#">Design Sprint</a></li>
            <li className={styles.li}><a href="#">Technologies</a></li>
            <li className={styles.li}><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-6 -mt-2">
            Let's talk about your project
          </h1>
          <FooterForm />
        </div>
      </div>
    </footer>
  )
}
