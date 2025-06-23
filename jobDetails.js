// js/jobData.js
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




// js/jobDetails.js
// Get job data from localStorage
const jobData = JSON.parse(localStorage.getItem("jobData")) || [];

// Get the job ID from the URL query string (e.g. ?id=2)
const params = new URLSearchParams(window.location.search);
const jobId = parseInt(params.get("id"));

// Find the correct job from the list
const job = jobData[jobId];

// Get the HTML container where the job info will be shown
const jobDetails = document.getElementById("jobDetails");

if (job) {
  jobDetails.innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>Type:</strong> ${job.type}</p>
    <p><strong>Description:</strong> ${job.description || 'No description'}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <img src="${job.image}" alt="${job.title}" style="width:100%; border-radius:10px; margin-top:10px;" />
  `;
} else {
  jobDetails.innerHTML = "<p>Job not found.</p>";
}
