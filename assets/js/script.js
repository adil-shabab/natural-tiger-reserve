

const bhadra_click = document.querySelectorAll('.bhadra_click');
const nagarahole_click = document.querySelectorAll('.nagarahole_click');
const kali_click = document.querySelectorAll('.kali_click');
const biligiriranganatha_click = document.querySelectorAll('.biligiriranganatha_click');
const bandipur_click = document.querySelectorAll('.bandipur_click');

if (bhadra_click.length > 0) {
    bhadra_click.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item)
            document.getElementById('bhadra').scrollIntoView({ behavior: 'smooth' });
        });
    });
}
if (nagarahole_click.length > 0) {
    nagarahole_click.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item)
            document.getElementById('nagarahole').scrollIntoView({ behavior: 'smooth' });
        });
    });
}
if (kali_click.length > 0) {
    kali_click.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item)
            document.getElementById('kali').scrollIntoView({ behavior: 'smooth' });
        });
    });
}
if (biligiriranganatha_click.length > 0) {
    biligiriranganatha_click.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item)
            document.getElementById('biligiriranganatha').scrollIntoView({ behavior: 'smooth' });
        });
    });
}
if (bandipur_click.length > 0) {
    bandipur_click.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item)
            document.getElementById('bandipur').scrollIntoView({ behavior: 'smooth' });
        });
    });
}





const tooltips = document.querySelectorAll(".tooltip");
const mapContainer = document.querySelector(".map-container");

let currentTooltip = null; // Store the currently active tooltip (initially null)


mapContainer.addEventListener("mousemove", (event) => {
    const target = event.target;

    // Check if clicked element is a path and has a data-tooltip attribute
    if (target.tagName !== "path" || !target.dataset.tooltip) return;

    const state = target.dataset.tooltip;
    currentTooltip = document.querySelector(`.tooltip[data-state="${state}"]`);

    console.log(currentTooltip);
    // Hide all tooltips except the current one
    tooltips.forEach((tooltip) => {
        if (tooltip !== currentTooltip) {
            tooltip.style.opacity = 0;
            tooltip.style.display = "none";
            tooltip.style.bottom = 'unset';
        }
    });

    // Update position and show the current tooltip
    const tooltipX = event.clientX + 10; // Adjust X position as needed
    const tooltipY = event.clientY + 10; // Adjust Y position as needed
    currentTooltip.style.left = `${tooltipX}px`;
    currentTooltip.style.top = `${tooltipY}px`;
    currentTooltip.style.opacity = 1; // Ensure tooltip visibility
    currentTooltip.style.display = "block"; // Ensure tooltip visibility
});

// Handle mouse leaving the map container (hide all tooltips)
mapContainer.addEventListener("mouseleave", () => {
    if (currentTooltip) {
        currentTooltip.style.opacity = 0;
        currentTooltip.style.display = "none";
        currentTooltip = null; // Reset active tooltip
    }
});

mapContainer.addEventListener("click", async (event) => {
    const target = event.target;

    // Check if the clicked element is a path and has a data-tooltip attribute
    if (target.tagName !== "path" || !target.dataset.tooltip) return;

    const state = target.dataset.tooltip;
    const url = `${state}.html`;

    // Check if the URL exists
    try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
            window.location.href = url;
        }
    } catch (error) {
        // Do nothing if the file does not exist or there is an error
        console.error(`Error fetching ${url}:`, error);
    }
});
