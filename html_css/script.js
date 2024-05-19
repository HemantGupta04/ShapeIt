document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll('.options input[type="radio"]');

    options.forEach(option => {
        option.addEventListener('change', function() {
            const questionId = this.getAttribute('name'); // Get the ID of the question

            // Remove 'selected' class from all labels within the same question
            document.querySelectorAll(`[name="${questionId}"]`).forEach(input => {
                input.parentElement.classList.remove('selected');
            });

            // Add 'selected' class to the label of the checked radio input
            const checkedLabel = this.parentElement;
            checkedLabel.classList.add('selected');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        let totalPoints = 0;
        let isAlertNeeded = false;
        let isContact988Alert = false;

        // Loop through each question
        for (let i = 1; i <= 10; i++) {
            const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedOption) {
                totalPoints += parseInt(selectedOption.value);
            } else {
                isAlertNeeded = true;
            }
        }

        if (isAlertNeeded) {
            alert('Please select one option from each question.');
            return; // Stop further execution
        }

        // get the value of input field with name test
        const test = document.querySelector('input[name="test"]').value;
        console.log(test);

        // Determine result based on total points
        let result = '';
        let subresult = '';
        if (totalPoints >= 0 && totalPoints <= 5) {

            if (test == "Depression Test Result")
                {
                    result = "Minimal Depression";
                    subresult = "Based on your responses, you have few or no symptoms of depression. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }
            else if (test == "Anxiety Test Result")
                {
                    result = "Minimal Anxiety";
                    subresult = "Based on your responses, you have few or no symptoms of anxiety. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Stress Test Result")
                {
                    result = "Minimal Stress";
                    subresult = "Based on your responses, you have few or no symptoms of stress. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "PTSD Test Result")
                {
                    result = "Minimal PTSD";
                    subresult = "Based on your responses, you have few or no symptoms of PTSD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

                else if (test == "ADHD Test Result")
                {
                    result = "Minimal ADHD";
                    subresult = "Based on your responses, you have few or no symptoms of ADHD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

                else if (test == "Addiction Test Result")
                {
                    result = "Minimal Addiction";
                    subresult = "Based on your responses, you have few or no symptoms of addiction. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

        } else if (totalPoints >= 6 && totalPoints <= 10) {

            if (test == "Depression Test Result")
                {
                    result = "Mild Depression";
                    subresult = "Based on your responses, you may have symptoms of mild depression. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }
            else if (test == "Anxiety Test Result")
                {
                    result = "Mild Anxiety";
                    subresult = "Based on your responses, you may have symptoms of mild anxiety. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Stress Test Result")
                {
                    result = "Mild Stress";
                    subresult = "Based on your responses, you may have symptoms of mild stress. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "PTSD Test Result")
                {
                    result = "Mild PTSD";
                    subresult = "Based on your responses, you may have symptoms of mild PTSD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

                else if (test == "ADHD Test Result")
                {
                    result = "Mild ADHD";
                    subresult = "Based on your responses, you may have symptoms of mild ADHD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

                else if (test == "Addiction Test Result")
                {
                    result = "Mild Addiction";
                    subresult = "Based on your responses, you may have symptoms of mild addiction. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

        } else if (totalPoints >= 11 && totalPoints <= 15) {

            if (test == "Depression Test Result")
                {
                    result = "Moderate Depression";
                    subresult = "Based on your responses, you may have symptoms of moderate depression. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Anxiety Test Result")
                {
                    result = "Moderate Anxiety";
                    subresult = "Based on your responses, you may have symptoms of moderate anxiety. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Stress Test Result")
                {
                    result = "Moderate Stress";
                    subresult = "Based on your responses, you may have symptoms of moderate stress. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "PTSD Test Result")
                {
                    result = "Moderate PTSD";
                    subresult = "Based on your responses, you may have symptoms of moderate PTSD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

                else if (test == "ADHD Test Result")
                    {
                        result = "Moderate ADHD";
                        subresult = "Based on your responses, you may have symptoms of moderate ADHD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                    }

                else if (test == "Addiction Test Result")
                    {
                        result = "Moderate Addiction";
                        subresult = "Based on your responses, you may have symptoms of moderate addiction. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                    }
            
            isContact988Alert = true;

        } else if (totalPoints >= 16 && totalPoints <= 20) {
            
            if (test == "Depression Test Result")
                {
                    result = "Moderate Depression";
                    subresult = "Based on your responses, you may have symptoms of moderate depression. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Anxiety Test Result")
                {
                    result = "Moderate Anxiety";
                    subresult = "Based on your responses, you may have symptoms of moderate anxiety. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Stress Test Result")
                {
                    result = "Moderate Stress";
                    subresult = "Based on your responses, you may have symptoms of moderate stress. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "PTSD Test Result")
                {
                    result = "Moderate PTSD";
                    subresult = "Based on your responses, you may have symptoms of moderate PTSD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

                else if (test == "ADHD Test Result")
                    {
                        result = "Moderate ADHD";
                        subresult = "Based on your responses, you may have symptoms of moderate ADHD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                    }

                else if (test == "Addiction Test Result")
                    {
                        result = "Moderate Addiction";
                        subresult = "Based on your responses, you may have symptoms of moderate addiction. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                    }

            isContact988Alert = true;

        } else if (totalPoints >= 21 && totalPoints <= 30) {
            
            if (test == "Depression Test Result")
                {
                    result = "Severe Depression";
                    subresult = "Based on your responses, you may have symptoms of severe depression. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Anxiety Test Result")
                {
                    result = "Severe Anxiety";
                    subresult = "Based on your responses, you may have symptoms of severe anxiety. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "Stress Test Result")
                {
                    result = "Severe Stress";
                    subresult = "Based on your responses, you may have symptoms of severe stress. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

            else if (test == "PTSD Test Result")
                {
                    result = "Severe PTSD";
                    subresult = "Based on your responses, you may have symptoms of severe PTSD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                }

                else if (test == "ADHD Test Result")
                    {
                        result = "Severe ADHD";
                        subresult = "Based on your responses, you may have symptoms of severe ADHD. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                    }

                else if (test == "Addiction Test Result")
                    {
                        result = "Severe Addiction";
                        subresult = "Based on your responses, you may have symptoms of severe addiction. This result is not a diagnosis. A doctor or therapist can help you get a diagnosis and/or treatment.";
                    }


            isContact988Alert = true;
        }
        
        if (isContact988Alert) {
            alert("Call or text the 988 Suicide & Crisis Lifeline at 988. The Lifeline provides 24-hour, confidential support to anyone in suicidal crisis or emotional distress. Call 911 in life-threatening situations.");
        }
        // Redirect to result.html with the results as query parameters and 
        window.location.href = `result.html?result=${encodeURIComponent(result)}&subresult=${encodeURIComponent(subresult)}&test=${encodeURIComponent(test)}`;
    });
});
