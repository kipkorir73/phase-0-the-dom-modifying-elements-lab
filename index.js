// Get the main element
const mainElement = document.getElementById('main');

// Remove the main element
mainElement.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the newHeader to the document body
document.body.appendChild(newHeader);

// Export the newHeader variable for testing
module.exports = {
  newHeader
};
