(() => {
  const resultMessage = document.body.dataset.phishingMessage || "❓ No result available";
  const isPhishing = document.body.dataset.isPhishing === "true";

  const banner = document.createElement('div');
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.padding = '20px';
  banner.style.textAlign = 'center';
  banner.style.zIndex = '10000';

  if (isPhishing) {
      banner.style.backgroundColor = 'red';
      banner.style.color = 'white';
      banner.textContent = resultMessage;
  } else if (isPhishing === false) {
      banner.style.backgroundColor = 'green';
      banner.style.color = 'white';
      banner.textContent = resultMessage;
  } else {
      banner.style.backgroundColor = 'yellow';
      banner.style.color = 'black';
      banner.textContent = resultMessage;
  }

  document.body.prepend(banner);
})();
