// Dive to text specified in URL in ScrollToText Fragment Format
// ScrollToText Fragment Format => :~:text=[prefix-,]textStart[,textEnd][,-suffix]
// Refer https://github.com/WICG/ScrollToTextFragment#tldr for more details
// -----------------------------------------------------------------------------
const delimiter = ":~:text=";

// If visiting in a deep link URL
if (window.location.hash.includes(delimiter))
{
  // Extract text to dive to from URL
  // --------------------------------
  var scrollToText = window.location.hash.split(delimiter)[1];

  // Split into prefix, textStart, textEnd, suffix
  if (scrollToText.split("-,").length > 1)
    var scrollToTextPrefix = scrollToText.split("-,")[0];
  if (scrollToText.split(",-").length > 1)
    var scrollToTextSuffix = scrollToText.split(",-")[1];

  var scrollToTextStart = scrollToText
      .split("-,")
      .slice(-1)[0]
      .split(",")[0];
  var scrollToTextEnd = scrollToText
      .split(",-")[0]
      .split(",")
      .slice(-1)[0];

  // Find, Scroll to and Highlight the target text on page
  // ----------------------------------------------------
  if (!!scrollToTextPrefix)
      // Dive to text prefix which is used as search start context
      window.find(decodeURIComponent(scrollToTextPrefix));
  // Now dive to and highlight text start
  window.find(decodeURIComponent(scrollToTextStart));
}
