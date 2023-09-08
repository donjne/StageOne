 // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        return dayOfWeek;
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        const updateTime = () => {
            const currentTime = new Date();
            const year = currentTime.getUTCFullYear();
            const month = (currentTime.getUTCMonth() + 1).toString().padStart(2, '0');
            const date = currentTime.getUTCDate().toString().padStart(2, '0');
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getSeconds().toString().padStart(2, '0');
            
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            
        const formattedTime = `${date} ${monthNames[currentTime.getUTCMonth()]}, ${year}. &nbsp  Time: ${hours}:${minutes}:${seconds}`;
        
        // Update the element with the formatted time using innerHTML
        document.querySelector('[data-testid="currentUTCTime"]').innerHTML = formattedTime;
        };
        
        // Update the time immediately and then every 1000ms (1 second)
        updateTime();
        setInterval(updateTime, 1000);
    }
    

    
    
    // Update the elements with dynamic data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();

    const typed = new Typed('.input', {
        strings: ["Frontend Track", "Frontend Internship", "Frontend Cohort"],
        typedSpeed: 150,
        backSpeed: 150,
        loop: true,
    })