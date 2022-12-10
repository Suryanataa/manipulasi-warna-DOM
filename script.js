// ubah warna bg pakai tombol 1
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
	// document.body.style.backgroundColor = "blue";
	// document.body.setAttribute("class", "bg-blue");
	document.body.classList.toggle("bg-blue");
});

// ubah warna secara random pakai btn2
const btn2 = document.createElement("button");
const txt = document.createTextNode("Warna Random");
btn2.appendChild(txt);
btn2.setAttribute("type", "button");
btn1.after(btn2);

btn2.addEventListener("click", () => {
	const r = Math.floor(Math.random() * 255 + 1);
	const g = Math.floor(Math.random() * 255 + 1);
	const b = Math.floor(Math.random() * 255 + 1);
	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// mengubah warna pakai slider
const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
	console.log(range[i]);
	range[i].addEventListener("input", () => {
		const r = range[0].value;
		const g = range[1].value;
		const b = range[2].value;
		document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
	});
}

// mengubah warna berdasarkan posisi kursor
document.body.addEventListener("mousemove", (e) => {
	const xPos = Math.round((e.clientX / window.innerWidth) * 255);
	const yPos = Math.round((e.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
