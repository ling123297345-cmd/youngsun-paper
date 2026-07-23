const fs = require('fs');
let data = fs.readFileSync('D:/网站/youngsunpaper.com/src/data.js', 'utf8');

const overviews = {
  'grey-board': 'YOUNGSUN Grey Board is made from 100% post-consumer recovered paper and designed for applications that require dependable thickness, rigidity and converting performance. It is available in sheets, reels, custom-cut panels and laminated structures for rigid box, bookbinding and stationery production. For enhanced surface appearance, buyers can choose laminated variants with coated white, uncoated white, colored, kraft, black, gold, silver or specialty facing papers bonded to the grey board base according to the required look and converting process.',
  'black-paper': 'YOUNGSUN supplies black paper in virgin-fibre and recycled-fibre grades. The material has a uniform black appearance, clean cutting edges and good performance in printing, hot stamping, embossing, die-cutting and box converting. Available from lightweight 80 gsm paper up to 1500 gsm laminated heavy board, covering the full range from stationery to structural packaging.',
  'color-card-paper': 'YOUNGSUN Color Card Paper is available in a broad range of standard, deep and embossed colors. It combines a uniform shade with clean converting performance for packaging, garment tags, stationery and promotional applications. Custom color matching is available subject to order quantity.',
  'folding-box-board': 'YOUNGSUN Folding Box Board is a coated virgin-fibre paperboard developed for high-quality printing and folding carton conversion. Regular-bulk and high-bulk options are available to balance caliper, stiffness, print performance and material yield. The GC1/C1S grade offers a smooth white printing surface with light-treated reverse.',
  'c2s-art-board': 'YOUNGSUN C2S High Bulk Bristol Board combines a coated surface on both sides with increased caliper at a controlled grammage. It is designed for applications that require printability, visual quality and a more substantial paper feel. Double-coated both sides with ISO 92%+ brightness and CIE 140+ whiteness for premium graphic applications.',
  'duplex-board': 'YOUNGSUN Duplex Board provides a smooth coated white printing side and an economical recycled grey reverse. It is suitable for high-volume packaging where print quality, converting efficiency and cost control are important. White back variant is available subject to order quantity.',
  'kraft-paper': 'YOUNGSUN supplies extensible sack kraft, high-strength sack kraft and premium kraft paper for packaging and industrial converting. Grades can be selected according to the required tensile strength, tear resistance, extensibility and printability. Available in natural brown, bleached white, and recycled options.',
  'ckb': 'YOUNGSUN Coated Kraft Back Board combines a multi-coated white printing surface with a strong unbleached kraft reverse. Hard sizing and high structural strength make it suitable for demanding packaging and cold-storage applications. Triple-coated top with reliable tear and compression performance.',
  'woodfree-paper': 'YOUNGSUN Woodfree Offset Paper is an uncoated printing paper developed for clear text, balanced ink absorption and reliable press performance. It is suitable for books, notebooks, manuals, forms and general commercial printing. Available in high white and natural white grades.',
  'color-offset-paper': 'YOUNGSUN Color Offset Paper is available in standard, deep and fluorescent shades for printing and converting applications. The uncoated surface is suitable for offset printing, copying, writing and general paper converting. Lightweight options available for inserts and multi-page products.',
  'lwc-paper': 'YOUNGSUN LWC Paper combines low basis weight with a coated printing surface, helping publishers and printers reduce product weight while maintaining image quality and opacity. It is suitable for high-volume publication and advertising applications. Typical gloss 43%, ISO whiteness 84%, opacity 89.5%-96% depending on grammage.',
  'cup-paper': 'YOUNGSUN Cupstock Board is a virgin-fibre paperboard developed for cup making and food packaging conversion. It offers a clean printing surface, reliable forming performance and compatibility with single- or double-side PE coating. Available from 160 to 330 gsm for hot cups, cold cups, food containers and takeaway packaging.',
  'greaseproof-paper': 'YOUNGSUN Greaseproof Paper is designed to resist oil and grease while maintaining suitable strength and converting performance. White and natural options are available for food wrapping, liners, bags and printed food-service packaging. 3M KIT level 6 or higher grease resistance for the referenced grade.',
  'tracing-paper': 'YOUNGSUN Tracing Paper combines controlled transparency with a smooth, clean surface for printing, drawing and premium packaging. Multiple grammages are available to balance transparency, handling strength and visual effect. Transparency approximately 56%-73% depending on grammage, making it ideal for luxury packaging overlays and decorative applications.',
  'copy-paper': 'YOUNGSUN supplies copy paper for photocopying, laser printing, inkjet printing and general office use. Standard and customized sheet formats are available, with flexible ream and carton configurations for wholesale distribution. Private-label packaging can be developed for qualified container-volume orders.',
  'ncr-paper': 'YOUNGSUN NCR carbonless copy paper provides reliable image transfer in multi-part forms, invoices, receipts and business documents. Available in 2-part to 6-part configurations with clean, consistent copy quality.'
};

let count = 0;
for (const [slug, overview] of Object.entries(overviews)) {
  const marker = '"' + slug + '": {';
  const idx = data.indexOf(marker);
  if (idx === -1) { console.log('NOT FOUND: ' + slug); continue; }

  // Find description within next 8000 chars
  const block = data.slice(idx, idx + 8000);
  const descRe = /description:\s*"/;
  const descMatch = block.match(descRe);
  if (!descMatch) { console.log('NO DESC: ' + slug); continue; }

  const descStart = idx + descMatch.index + descMatch[0].length;
  // Find the closing unescaped quote of the description string
  let descEnd = descStart;
  while (descEnd < data.length) {
    if (data[descEnd] === '\\') { descEnd += 2; continue; }
    if (data[descEnd] === '"') break;
    descEnd++;
  }

  const currentDesc = data.slice(descStart, descEnd);
  // Don't duplicate if overview is already included
  if (currentDesc.includes(overview.slice(0, 80))) {
    console.log('SKIP (already has): ' + slug);
    continue;
  }
  const newDesc = currentDesc + ' ' + overview;

  data = data.slice(0, descStart) + newDesc + data.slice(descEnd);
  count++;
  console.log('Updated: ' + slug + ' (' + currentDesc.length + ' -> ' + newDesc.length + ' chars)');
}

console.log('\nTotal updated: ' + count);
fs.writeFileSync('D:/网站/youngsunpaper.com/src/data.js', data);
console.log('Done!');
