import { useLang } from "./i18n.jsx";
import { JsonLd } from "./SEO.jsx";
import { productEs } from "./productEs.js";
import { createProductSchema } from "./schemaData.js";

export default function ProductSchema({ product }) {
  const { lang } = useLang();
  return (
    <JsonLd
      id="product-schema"
      data={createProductSchema(product, { lang, translation: productEs[product?.id] })}
    />
  );
}
