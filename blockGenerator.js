// Array of block elements with varying heights
var blockHeights = [100, 120, 280, 209, 95, 321];

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to create and append blocks to the body
function createBlocks() {
  var columnSectionCollection =
    document.getElementsByClassName("column-section");
  var columnSections = Array.from(columnSectionCollection); // Convert HTML Collection to an array for

  for (var i = 0; i < blockHeights.length; i++) {
    for (var j = 0; j < columnSections.length; j++) {
      var section = columnSections[j];

      // for each section, create blocks
      var block = document.createElement("div");
      block.className = "block";
      block.style.height = blockHeights[i] + "px";
      block.style.backgroundColor = generateRandomColor();

      section.appendChild(block);
    }
  }
}

// Call the function to create and append blocks
createBlocks();
