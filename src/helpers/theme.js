const setCurrentTheme = (currentTheme) => {
  const selectedCssProps = Array.from(document.styleSheets)
    .filter((styleSheet) => {
      try {
        return styleSheet.cssRules; // Check if cssRules is accessible
      } catch (e) {
        return false; // Exclude stylesheets with cross-origin restrictions
      }
    })
    .reduce((prevStyleSheet, currStyleSheet) => {
      const selectedProperties = Array.from(currStyleSheet.cssRules || []).reduce(
        (prevCssRule, currCssRule) => {
          if (
            currCssRule.selectorText === ":root" &&
            currCssRule.style
          ) {
            return [
              ...prevCssRule,
              ...Array.from(currCssRule.style || []).filter((item) =>
                item.startsWith("--selected")
              ),
            ];
          }
          return prevCssRule;
        },
        [] // Ensure this always starts as an empty array
      );

      return [...prevStyleSheet, ...selectedProperties];
    }, []); // Ensure this always starts as an empty array

  if (Array.isArray(selectedCssProps)) {
    selectedCssProps.forEach((value) => {
      document.documentElement.style.setProperty(
        value,
        `var(--${currentTheme}${value.substring(10)})`
      );
    });
  }
};

export default setCurrentTheme;