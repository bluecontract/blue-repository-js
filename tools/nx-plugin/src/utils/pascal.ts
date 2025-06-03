/**
 * Formats the given string in pascal case fashion
 *
 * pascal('hello world') -> 'HelloWorld'
 * pascal('va va boom') -> 'VaVaBoom'
 * pascal('MyOS Timeline Channel') -> 'MyOSTimelineChannel'
 */
export const pascal = (str: string): string => {
  // eslint-disable-next-line no-useless-escape
  const parts = str?.split(/[\.\-\s_]/).filter((part) => part.length > 0) ?? [];
  if (parts.length === 0) return '';

  return parts
    .map((part) => {
      // If the part is all uppercase (likely an acronym), keep it as is
      if (part === part.toUpperCase() && part.length > 1) {
        return part;
      }

      // If the part already has mixed case (like camelCase), preserve it but ensure first letter is uppercase
      if (part !== part.toLowerCase() && part !== part.toUpperCase()) {
        return part.charAt(0).toUpperCase() + part.slice(1);
      }

      // For regular words, capitalize first letter and lowercase the rest
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');
};
