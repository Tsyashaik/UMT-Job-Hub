// js/listJobs.js

const jobs = [
  {
    title: "Barista - ZUS Coffee",
    type: "Part-time",
    location: "Lot 021, Aras Bawah, Kompleks Siswa, Universiti Malaysia Terengganu, 21030 Kuala Terengganu, Terengganu",
    lat: 5.47531,
    lng: 103.09340,
    image: "images/ZUS COFFEE UMT.jpg"
  },
  {
    title: "Cashier - CU Mart",
    type: "Part-time",
    location: "CU Mart, 21300 Kuala Terengganu, Terengganu",
    lat: 5.40739,
    lng: 103.08949,
    image: "images/CU MART UMT.png"
  },
  {
    title: "Waiter - MARMORIS CAFE",
    type: "Freelance",
    location: "Capital O 90434 Marmoris House, 21300 Kuala Terengganu, Terengganu",
    lat: 5.41279,
    lng: 103.08766,
    image: "images/CAPITAL O 90434 MARMORIS HOUSE UMT.jpg"
  },
  {
    title: "Staff - Umi Cafe",
    type: "Part-time",
    location: "Umi Cafe Kafeteria Abdul Rahman Limbong, 21300 Kuala Terengganu, Terengganu",
    lat: 5.40560,
    lng: 103.09403,
    image: "images/UMI CAFE UMT.jpg"
  },
  {
    title: "Crew - HE & SHE COFFEE @ UMT",
    type: "Freelance",
    location: "HE & SHE COFFEE @ UMT, Terengganu, Universiti Malaysia Terengganu, 21300 Kuala Terengganu, Terengganu",
    lat: 5.41080,
    lng: 103.08639,
    image: "images/HE & SHE COFFEE UMT.png"
  },
  {
    title: "Waiter - Faris Bistro",
    type: "Part-time",
    location: "Faris Bistro, Universiti Malaysia Terengganu, 21300 Kuala Terengganu, Terengganu",
    lat: 5.40549,
    lng: 103.08763,
    image: "images/FARIS BISTRO UMT.jpg"
  },
  {
    title: "Assitant - Siswa Post",
    type: "Part-time",
    location: "Siswa Post, 21300 Kuala Terengganu, Terengganu",
    lat: 5.40518,
    lng: 103.09132,
    image: "images/SISWA POST UMT.jpg"
  },
  {
    title: "Barista - Kofi BEN UMT",
    type: "Freelance",
    location: "Kofi BEN CAFE, Lot 85578D, Kampung Tanjung Gelam, Mengabang Telipot, 21300, Terengganu",
    lat: 5.1907,
    lng: 103.08204,
    image: "images/KOFI BEN UMT.jpg"
  }
];

// Store job data into localStorage if not already present
if (!localStorage.getItem("jobData")) {
  localStorage.setItem("jobData", JSON.stringify(jobs));
}

const searchBox = document.getElementById("searchBox");
const jobList = document.getElementById("jobList");

const jobData = JSON.parse(localStorage.getItem("jobData")) || [];

function generateFileName(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function displayJobs(data) {
  jobList.innerHTML = '';
  data.forEach((job) => {
    const fileName = generateFileName(job.title) + ".html";
    jobList.innerHTML += `
      <div class="job-card">
        <img src="${job.image}" alt="${job.title}" />
        <div class="job-info">
          <h3>${job.title}</h3>
          <p>${job.type} | ${job.location || 'Location not provided'}</p>
          <button onclick="window.location.href='jobDetails/${fileName}'">🔍 View Details</button>
        </div>
      </div>
    `;
  });
}

searchBox.addEventListener("input", () => {
  const keyword = searchBox.value.toLowerCase();
  const filtered = jobData.filter(job =>
    job.title.toLowerCase().includes(keyword) ||
    (job.location && job.location.toLowerCase().includes(keyword)) ||
    (job.type && job.type.toLowerCase().includes(keyword))
  );
  displayJobs(filtered);
});

displayJobs(jobData);
