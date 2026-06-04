// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Form submission via Formspree
const form = document.getElementById('support-form');
const btnText = document.getElementById('btn-text');
const btnLoading = document.getElementById('btn-loading');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('form-success');
const errorMsg = document.getElementById('form-error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitBtn.disabled = true;
  btnText.hidden = true;
  btnLoading.hidden = false;
  successMsg.hidden = true;
  errorMsg.hidden = true;

  try {
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      successMsg.hidden = false;
      form.reset();
      updateCounter();
    } else {
      errorMsg.hidden = false;
    }
  } catch {
    errorMsg.hidden = false;
  } finally {
    submitBtn.disabled = false;
    btnText.hidden = false;
    btnLoading.hidden = true;
  }
});

// Simulated/local signature counter
// Replace with a real API call if you add a backend counter
function updateCounter() {
  const el = document.getElementById('signature-count');
  const current = parseInt(el.textContent) || 0;
  el.textContent = current + 1;
}

// On load: fetch real count from Formspree submissions or set a seed number
// For now we show a seed that can be updated manually
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('signature-count');
  // Update this number periodically to reflect real signatures collected
  el.textContent = '1';
});
