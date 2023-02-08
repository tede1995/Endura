const tooltip = document.querySelector(".tooltipDisplay");
const hoverFrame = document.querySelector(".hover-frame");
let timeout;

const showTooltip = () => {
  tooltip.classList.add('d-block');
  timeout = undefined;
}

const hideTooltip = () => {
  tooltip.classList.remove('d-block');
  if (timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }
}

hoverFrame.addEventListener("mouseover", () => {
  timeout = setTimeout(showTooltip, 500);
});

hoverFrame.addEventListener("mouseout", hideTooltip)