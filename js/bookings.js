// document.addEventListener("DOMContentLoaded", () => {
// const form = document.getElementById("booking-form");

// form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const bookingData = {
//     name: form.name.value.trim(),
//     email: form.email.value.trim(),
//     phone: form.phone.value.trim(),
//     date: form.date.value,
//     time: form.time.value
//     };

//     try {
//     const res = await fetch('/api/booking', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bookingData)
//     });

//     const result = await res.json();

//     if (res.ok && result.success) {
//         window.location.href = "/confirmation";
//     } else {
//         alert("Booking failed.");
//     }
//     } catch (err) {
//     alert("Something went wrong.");
//     console.error(err);
//     }
// });
// });
