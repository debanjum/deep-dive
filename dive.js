// Extract text to dive to from URL
// Dive text from URL in ScrollToTextFragment Format
// Refer https://github.com/WICG/ScrollToTextFragment#tldr
var dive_to_text = decodeURI(window.location.hash
                             .split(':~:text=')[1]);

// Find, scroll to and highlight the text on page
window.find(dive_to_text);
