const wday = ["الأحد ","الإثنين ","الثلاثاء ","الأربعاء ","الخميس ","الجمعة   ","السبت "];

const d = new Date();
let dday = wday[d.getDay()];

function updateHijriDate() {
			const options = {
			  calendar: 'islamic-umalqura',
			  day: 'numeric',
       
			  month: 'long',
        timeZone: "Africa/Tunis",
			  year: 'numeric'
			};
			// const options = {
			// 	weekday: 'long',
			// 	day: 'numeric',
			// 	month: 'numeric',
			// 	year: 'numeric'
			// };
			const arabicLocale = 'ar-TN';
			const hijriDate = new Date().toLocaleDateString(arabicLocale, options);
		  
			const hijriDateElement = document.getElementById('hijri-date');
			hijriDateElement.textContent =dday+ hijriDate;
		}

updateHijriDate();
