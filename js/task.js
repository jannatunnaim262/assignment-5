document.addEventListener("DOMContentLoaded", function () {
    const taskCountEl = document.getElementById("taskCount");
    const radioCountEl = document.getElementById("radioCount");
    const activityLogEl = document.getElementById("activityLog");
    const clearHistoryBtn = document.getElementById("clearHistory");

    document.querySelectorAll(".complete-btn").forEach(button => {
        button.addEventListener("click", function () {
            if (this.classList.contains("completed")) return;

        
            // Disable button
            this.classList.add("disabled");
            this.textContent = "Completed";
            this.disabled = true;

            // Decrease Task Assigned Count
            let taskCount = parseInt(taskCountEl.textContent, 10);
            taskCountEl.textContent = taskCount > 0 ? taskCount - 1 : 0;

            // Increase Radio Button Count
            let radioCount = parseInt(radioCountEl.textContent, 10);
            radioCountEl.textContent = radioCount + 1;

            // Log activity
            let taskName = this.getAttribute("data-task");
            let logEntry = document.createElement("div");
            logEntry.classList.add("log");
            logEntry.textContent = `You have completed the task "${taskName}" at ${new Date().toLocaleTimeString()}`;
            activityLogEl.prepend(logEntry);
        });
    });

    clearHistoryBtn.addEventListener("click", function () {
        activityLogEl.innerHTML = "";
    });
});