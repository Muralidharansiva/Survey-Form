document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form
    const username = document.getElementById('username').value.trim();
    const age = document.getElementById('age').value.trim();
    const address = document.getElementById('address').value.trim();
    const contact = document.getElementById('contact').value.trim();

    if (!username || !age || !address || !contact) {
        alert('Please fill out all required fields.');
        return;
    }

    // Calculate score
    let score = 0;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    if (satisfaction) {
        score += parseInt(satisfaction.value);
    }

    const features = document.querySelectorAll('input[name="features"]:checked');
    score += features.length; // Each selected feature adds 1 to the score

    // Display score
    document.getElementById('scoreDisplay').textContent = `Your score: ${score}`;

    // Reset form
    this.reset();

    // Confirmation message
    alert('Thank you for your feedback!');

    // Optionally, you could redirect to another page:
    // window.location.href = 'thank_you.html';
});