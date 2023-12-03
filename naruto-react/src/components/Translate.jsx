import React, { useEffect } from "react";

const Translate = () => {
  useEffect(() => {
    const customizeTranslateElement = () => {
      const iframeDocument = document.querySelector(
        ".goog-te-menu-frame"
      ).contentDocument;

      if (iframeDocument) {
        // Apply styles to the select element
        const selectElement = iframeDocument.querySelector(
          "#google_translate_element select"
        );
        if (selectElement) {
          selectElement.style.background = "#f6edfd";
          selectElement.style.color = "black";
          selectElement.style.border = "none";
          selectElement.style.borderRadius = "3px";
          selectElement.style.padding = "2px 6px";
          selectElement.style.marginTop = "5px";
        }

        // Hide Google Translate link, logo, banner-frame, and tooltip
        const hideElements = [
          ".goog-logo-link",
          ".goog-te-gadget span",
          "#goog-gt-",
          ".goog-te-banner-frame",
          "#goog-gt-tt",
          ".goog-te-balloon-frame",
        ];

        hideElements.forEach((selector) => {
          const element = iframeDocument.querySelector(selector);
          if (element) {
            element.style.display = "none";
          }
        });

        // Apply additional styles
        const textHighlightElement = iframeDocument.querySelector(
          ".goog-text-highlight"
        );
        if (textHighlightElement) {
          textHighlightElement.style.background = "none";
          textHighlightElement.style.boxShadow = "none";
        }
      }
    };

    // Attach the function to the click event
    const translateElement = document.getElementById(
      "google_translate_element"
    );
    if (translateElement) {
      translateElement.addEventListener("click", customizeTranslateElement);
    }

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      if (translateElement) {
        translateElement.removeEventListener(
          "click",
          customizeTranslateElement
        );
      }
    };
  }, []); // Empty dependency array ensures that this effect runs once after component mount

  return (
    <li className="nav-item mx-4">
      <div id="google_translate_element"></div>

      {/* Script for Google Translate */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
              );
            }
          `,
        }}
      ></script>

      <script
        type="text/javascript"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      ></script>
    </li>
  );
};

export default Translate;
