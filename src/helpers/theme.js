/**
 * Updates the current theme by modifying CSS custom properties (variables)
 * based on the selected theme.
 * @param {string} currentTheme - The name of the theme to apply (e.g., "dark", "light").
 */
const setCurrentTheme = (currentTheme) => {
  // Retrieve all CSS custom properties (variables) that start with "--selected"
  const selectedCssProps = Array.from(document.styleSheets)
    .filter((styleSheet) => {
      try {
        // Ensure the stylesheet's cssRules are accessible (exclude cross-origin stylesheets)
        return styleSheet.cssRules;
      } catch (e) {
        return false; // Skip stylesheets with cross-origin restrictions
      }
    })
    .reduce((prevStyleSheet, currStyleSheet) => {
      // Iterate through all CSS rules in the current stylesheet
      const selectedProperties = Array.from(
        currStyleSheet.cssRules || []
      ).reduce(
        (prevCssRule, currCssRule) => {
          // Check if the rule targets the ":root" selector and contains styles
          if (currCssRule.selectorText === ":root" && currCssRule.style) {
            // Collect all CSS variables that start with "--selected"
            return [
              ...prevCssRule,
              ...Array.from(currCssRule.style || []).filter((item) =>
                item.startsWith("--selected")
              ),
            ];
          }
          return prevCssRule; // Skip rules that don't match
        },
        [] // Start with an empty array for each stylesheet
      );

      // Combine the selected properties from all stylesheets
      return [...prevStyleSheet, ...selectedProperties];
    }, []); // Start with an empty array for all stylesheets

  // Apply the selected theme to the document's root element
  if (Array.isArray(selectedCssProps)) {
    selectedCssProps.forEach((value) => {
      // Update each CSS variable to use the value from the selected theme
      document.documentElement.style.setProperty(
        value,
        `var(--${currentTheme}${value.substring(10)})`
      );
    });
  }
};

export default setCurrentTheme;
