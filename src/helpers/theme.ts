const setCurrentTheme = (currentTheme: string) => {
  const selectedCssProps = Array.from(document.styleSheets).reduce(
    //@ts-expect-error - TS doesn't know that CSSStyleSheet is a valid type
    (prevStyleSheet: CSSStyleSheet, currStyleSheet: CSSStyleSheet) => {
      prevStyleSheet = prevStyleSheet || ({} as CSSStyleSheet);

      const selectedProperties = Array.from(currStyleSheet.cssRules).reduce(
        (prevCssRule: (string | CSSRule)[], currCssRule: CSSRule) => {
          prevCssRule =
            (currCssRule as CSSStyleRule).selectorText === ":root"
              ? [
                  ...prevCssRule,
                  ...Array.from((currCssRule as CSSStyleRule).style).filter(
                    (item) => {
                      return item.startsWith("--selected");
                    }
                  ),
                ]
              : prevCssRule;
          return prevCssRule;
        },
        []
      );

      return selectedProperties;
    }
  );

  (selectedCssProps as unknown as Array<string>).forEach((value: string) => {
    document.documentElement.style.setProperty(
      value,
      `var(--${currentTheme}${value.substring(10)})`
    );
  });
};

export default setCurrentTheme;
