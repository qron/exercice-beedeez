import React from 'react'

const Capsule = ({ id, title, summary, lang, level, status }) => (
  <li className="capsules">
    <header className="bars">
      {/* Capsule title */}
      <h2 className="headers">{title}</h2>
    </header>
    <section>
      {/* Capsule summary */}
      <p className="summaries">{summary}</p>
    </section>
    <footer className="footers">
      {/* Capsule status */}
      <p className="badges"><i className="material-icons s">public</i>{lang.toUpperCase()}</p>
      {/* Capsule level */}
      <p className="badges"><i className="material-icons s">school</i>{level.substr(0, 1).toUpperCase() + level.substr(1)}</p>
      {/* Capsule lang */}
      <p className="badges"><i className="material-icons s">flag</i>{status.toUpperCase()}</p>
    </footer>
  </li>
)

export default Capsule
