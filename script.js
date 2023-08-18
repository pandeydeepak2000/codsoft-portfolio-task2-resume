// Event listener to initiate text typing on window load
window.addEventListener('load', () => {
  // Get the element where the typing effect will be displayed
  const typingTextElement = document.querySelector('.p-text');
  
  // The text to be typed out
  const textToType = "As an ambitious and dedicated individual seeking to launch my career in the dynamic world of web development, I am excited to take my passion for coding and turn it into a tangible skill set. With a strong foundation in web development concepts and a thirst for learning, I am eager to contribute my creativity and problem-solving abilities to a dynamic team.";
  
  // Get background color and text color from CSS variables
  const backgroundColor = getComputedStyle(document.body).getPropertyValue('--bg-color').trim();
  const textColor = getComputedStyle(document.body).getPropertyValue('--text-color').trim();
  
  // Initialize character index for typing
  let charIndex = 0;
  
  // Function to simulate typing effect
  function type() {
    if (charIndex < textToType.length) {
      const char = textToType[charIndex];
      typingTextElement.innerHTML += `<span style="color: ${textColor};">${char}</span>`;
      charIndex++;
      setTimeout(type, 50); // Adjust typing speed here
    }
  }
  
  // Apply background color and padding to the typing element
  typingTextElement.style.backgroundColor = backgroundColor;
  typingTextElement.style.padding = '15px'; // Adjust padding as needed
  
  // Initiate the typing effect
  type();
});
