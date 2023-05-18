export default function decodeHtml(str) {
  return decodeURIComponent(str).replace(/&#039;/g, "'");
}
