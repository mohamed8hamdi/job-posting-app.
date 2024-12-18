async function submitJob() {
    const form = document.getElementById("jobForm");
  
    const jobDetails = {
      title: form.title.value,
      description: form.description.value,
      skillsRequired: form.skillsRequired.value,
      location: form.location.value,
      duration: form.duration.value,
      wage: parseFloat(form.wage.value),
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobDetails),
      });
  
      if (response.ok) {
        alert("Job posted successfully!");
        form.reset();
      } else {
        alert("Error posting job.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while posting the job.");
    }
  }
  