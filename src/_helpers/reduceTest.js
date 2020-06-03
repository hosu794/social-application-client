export function reduceText(text) {
  if (text.length > 400) {
    return text.substring(0, 400) + " ...";
  } else {
    return text;
  }
}
