// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
    const now = new Date();
    const hours24 = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format for 24-hour clock (HH:MM:SS)
    const time24 = `${String(hours24).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Format for 12-hour clock with AM/PM (HH:MM:SS AM/PM)
    const hours12 = hours24 % 12 || 12;
    const amPm = hours24 >= 12 ? 'PM' : 'AM';
    const time12 = `${String(hours12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${amPm}`;

    console.log("24-hour format: ", time24);
    console.log("12-hour format: ", time12);

    // Recursively call the function to update every second
    setTimeout(updateClock, 1000);
}

updateClock();
