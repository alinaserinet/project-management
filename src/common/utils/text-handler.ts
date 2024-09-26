export const textCutter = (text: string, maxChars = 65) => {
  if (text.length <= maxChars) return text;

  const phrases = text.split(' ');
  let result = '';
  for (const phrase of phrases) {
    const newStr = `${result} ${phrase}`;
    if (newStr.length > maxChars) {
      return `${result}...`;
    }
    result = newStr;
  }

  return `${result}...`;
};
