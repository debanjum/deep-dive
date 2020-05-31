// Dive text from URL in ScrollToTextFragment Format
// Refer https://github.com/WICG/ScrollToTextFragment#tldr
const delimiter = ":~:text=";

// If visiting in a deep link URL
if (window.location.hash.includes(delimiter))
{
  // Extract text to dive to from URL
  var dive_to_text = decodeURI(window.location.hash
                               .split(delimiter)[1]);

  // Find, scroll to and highlight the text on page
  window.find(dive_to_text);
}
