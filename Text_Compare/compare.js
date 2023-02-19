function compareTexts() {
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;
  
    // Split the texts into lines and trim whitespace
    const text1Lines = text1.split("\n").map((line) => line.trim());
    const text2Lines = text2.split("\n").map((line) => line.trim());
  
    // Create arrays to hold the line differences
    const differentLines1 = [];
    const differentLines2 = [];
  
    // Compare the texts line by line
    for (let i = 0; i < Math.max(text1Lines.length, text2Lines.length); i++) {
      const line1 = text1Lines[i];
      const line2 = text2Lines[i];
  
      if (line1 !== line2) {
        if (line1 === undefined) {
          differentLines2.push(i);
        } else if (line2 === undefined) {
          differentLines1.push(i);
        } else {
          differentLines1.push(i);
          differentLines2.push(i);
        }
      }
    }
  
    // Create HTML for the result section
    const text1Section = document.getElementById("text1-section");
    const text2Section = document.getElementById("text2-section");
    text1Section.innerHTML = "";
    text2Section.innerHTML = "";
  
    for (let i = 0; i < Math.max(text1Lines.length, text2Lines.length); i++) {
      const line1 = text1Lines[i];
      const line2 = text2Lines[i];
  
      const lineDiv = document.createElement("div");
      lineDiv.classList.add("line");
  
      const lineNumberSpan = document.createElement("span");
      lineNumberSpan.classList.add("line-number");
      lineNumberSpan.innerText = i + 1;
  
      const lineTextSpan = document.createElement("span");
      lineTextSpan.classList.add("line-text");
      lineTextSpan.innerText = line1 || "";
  
      if (differentLines1.includes(i)) {
        lineTextSpan.classList.add("different-line-1");
      } else if (line1) {
        lineTextSpan.classList.add("same-line");
      }
  
      if (differentLines2.includes(i)) {
        lineTextSpan.classList.add("different-line-2");
      } else if (line2) {
        lineTextSpan.classList.add("same-line");
      }
  
      lineDiv.appendChild(lineNumberSpan);
      lineDiv.appendChild(lineTextSpan);
  
      text1Section.appendChild(lineDiv);
  
      if (line2 !== undefined) {
        const lineDiv2 = document.createElement("div");
        lineDiv2.classList.add("line");
  
        const lineNumberSpan2 = document.createElement("span");
        lineNumberSpan2.classList.add("line-number");
        lineNumberSpan2.innerText = i + 1;
  
        const lineTextSpan2 = document.createElement("span");
        lineTextSpan2.classList.add("line-text");
        lineTextSpan2.innerText = line2;
  
        if (differentLines2.includes(i)) {
          lineTextSpan2.classList.add("different-line-2");
        } else if (line2) {
          lineTextSpan2.classList.add("same-line");
        }
  
        lineDiv2.appendChild(lineNumberSpan2);
        lineDiv2.appendChild(lineTextSpan2);
  
        text2Section.appendChild(lineDiv2);
      }
    }
  
    if (text1Lines.length === 0 && text2Lines.length === 0) {
      text1Section.innerHTML = "<p>No text entered for comparison</p>";
      text2Section.innerHTML = "";
    } else if (text2Lines.length === 0) {
        text1Section.innerHTML = "";
        text2Section.innerHTML = "<p>No text entered for comparison</p>";
      }
    
    
    // Add event listeners to the buttons
    const compareButton = document.getElementById("compare-button");
    compareButton.addEventListener("click", compareTexts);
    
    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", () => {
      document.getElementById("text1").value = "";
      document.getElementById("text2").value = "";
      compareTexts();
    });
    
    // Add event listeners to the text inputs to automatically compare when they change
    const text1Input = document.getElementById("text1");
    text1Input.addEventListener("input", compareTexts);
    
    const text2Input = document.getElementById("text2");
    text2Input.addEventListener("input", compareTexts);
    
}