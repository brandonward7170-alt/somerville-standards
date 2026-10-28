// Same-origin pass-through for EPCOR PDFs. EPCOR's CORS headers are inconsistent, which breaks
// in-page preview, and it blocks framing. Only EPCOR document URLs are allowed; Range is forwarded.
const { Readable } = require("stream");

const ALLOWED = /^https:\/\/www\.epcor\.com\/content\/dam\/epcor\/documents\/[^?#]+\.pdf$/i;

module.exports = async (req, res) => {
  const u = req.query.u;
  if (typeof u !== "string" || !ALLOWED.test(u)) {
    res.status(400).send("Only EPCOR PDF documents can be fetched.");
    return;
  }
  const headers = { "User-Agent": "Mozilla/5.0 (compatible; SomervilleStandards/1.0)" };
  if (req.headers.range) headers.Range = req.headers.range;
  let up;
  try {
    up = await fetch(u, { headers });
  } catch (e) {
    res.status(502).send("Could not reach EPCOR.");
    return;
  }
  if (!up.ok && up.status !== 206) {
    res.status(up.status === 404 ? 404 : 502).send("EPCOR returned " + up.status);
    return;
  }
  res.status(up.status);
  res.setHeader("Content-Type", "application/pdf");
  for (const h of ["content-length", "content-range", "accept-ranges", "etag", "last-modified"]) {
    const v = up.headers.get(h);
    if (v) res.setHeader(h, v);
  }
  res.setHeader("Cache-Control", "public, max-age=3600");
  if (req.query.dl) {
    const name = decodeURIComponent(u.split("/").pop()).replace(/[​"]/g, "");
    res.setHeader("Content-Disposition", 'attachment; filename="' + name + '"');
  }
  Readable.fromWeb(up.body).pipe(res);
};
