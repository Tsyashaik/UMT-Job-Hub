let map, marker, jobImageBase64 = "";

window.onload = () => {
  map = L.map("map").setView([5.4164, 103.0500], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  marker = L.marker([5.4164, 103.0500], { draggable: true }).addTo(map);
  updateLatLng(marker.getLatLng());
  marker.on("dragend", e => updateLatLng(e.target.getLatLng()));

  document.getElementById("locationSearch").addEventListener("change", fetchLocation);
};

function updateLatLng(pos) {
  document.getElementById("latitude").value = pos.lat;
  document.getElementById("longitude").value = pos.lng;
}

document.getElementById("searchLocationBtn").addEventListener("click", fetchLocation);

function fetchLocation() {
  const query = document.getElementById("locationSearch").value;
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if (!data.length) return alert("Location not found");

      const { lat, lon, display_name } = data[0];
      const latNum = parseFloat(lat);
      const lngNum = parseFloat(lon);

      // Move map and marker
      map.setView([latNum, lngNum], 17);
      marker.setLatLng([latNum, lngNum]);

      // Update hidden inputs
      document.getElementById("latitude").value = latNum;
      document.getElementById("longitude").value = lngNum;

      // Update visible location input with accurate place name
      document.getElementById("locationSearch").value = display_name;
    })
    .catch(() => alert("Failed to search location. Please try again."));

	
}


document.getElementById("imageInput").addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = e => jobImageBase64 = e.target.result;
  if (file) reader.readAsDataURL(file);
});

document.getElementById("jobForm").addEventListener("submit", e => {
  e.preventDefault();
  const job = {
    title: document.getElementById("title").value,
    type: document.getElementById("type").value,
    description: document.getElementById("description").value,
    location: document.getElementById("locationSearch").value,
    lat: parseFloat(document.getElementById("latitude").value),
    lng: parseFloat(document.getElementById("longitude").value),
    image: jobImageBase64
  };

  const jobs = JSON.parse(localStorage.getItem("jobData")) || [];
  jobs.push(job);
  localStorage.setItem("jobData", JSON.stringify(jobs));

  alert("Job posted successfully!");
  window.location.href = "listJobs.html";
});

function deleteLastPostedJob() {
  let jobs = JSON.parse(localStorage.getItem("jobData")) || [];
  if (jobs.length === 0) {
    alert("No jobs to delete.");
    return;
  }

  if (confirm("Are you sure you want to delete the last posted job?")) {
    jobs.pop(); // remove the last job
    localStorage.setItem("jobData", JSON.stringify(jobs));
    alert("Last job deleted!");
  }
}
