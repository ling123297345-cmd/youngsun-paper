import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "./i18n.jsx";

export default function PaperSelectionGuide({ guide }) {
  const { lang } = useLang();
  const content = guide?.[lang];
  if (!content) return null;
  return (
    <section className="paper-selection-guide">
      <h2>{content.title}</h2>
      <p>{content.intro}</p>
      <div className="paper-selection-rows">
        {content.items.map((item) => (
          <div className="paper-selection-row" key={item.href}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link to={item.href}>{item.label}<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        ))}
      </div>
    </section>
  );
}
