/* ---------------------------------------------------------------
   Pakistani Phone Number Authenticator
   Validates the local number typed after the fixed +92 country code
   using a single regular expression against Pakistan's mobile format:
   0 3 X X  X X X X X X X   -> 11 digits total, always starts with 03
--------------------------------------------------------------- */

const PK_LOCAL_FORMAT = /^03\d{9}$/; // full local dialing format, e.g. 03012345678

const input = document.getElementById('phone-input');
const inputRow = document.getElementById('input-row');
const result = document.getElementById('result');
const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const checklist = document.getElementById('checklist');

const ICONS = {
  neutral: '',
  valid: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  invalid: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>'
};

// Strip everything but digits, then normalize away an optional
// leading country code (92) or leading trunk zero (0) so we are
// always working with the number the user actually intends to dial.
function toLocalNumber(rawValue) {
  let digits = rawValue.replace(/\D/g, '');

  if (digits.startsWith('92')) {
    digits = digits.slice(2);
  }
  if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  // digits should now be the 10-digit core, e.g. 3012345678
  return digits.length ? '0' + digits : '';
}

function setCheck(name, state) {
  const el = checklist.querySelector(`[data-check="${name}"]`);
  el.classList.remove('is-valid', 'is-invalid');
  if (state !== null) {
    el.classList.add(state ? 'is-valid' : 'is-invalid');
  }
}

function renderIdle() {
  inputRow.dataset.state = 'idle';
  result.dataset.state = 'idle';
  resultIcon.innerHTML = ICONS.neutral;
  resultTitle.textContent = 'Waiting for input';
  resultMessage.textContent = 'Start typing a mobile number to see it validated live.';
  ['prefix', 'length', 'format'].forEach((name) => setCheck(name, null));
}

function renderResult(local, digitsTyped) {
  const startsWith03 = local.startsWith('03');
  const is11Digits = local.length === 11;
  const isValidFormat = PK_LOCAL_FORMAT.test(local);

  setCheck('prefix', startsWith03);
  setCheck('length', is11Digits);
  setCheck('format', isValidFormat);

  if (isValidFormat) {
    const display = `+92 ${local.slice(1, 4)} ${local.slice(4)}`;
    inputRow.dataset.state = 'valid';
    result.dataset.state = 'valid';
    resultIcon.innerHTML = ICONS.valid;
    resultTitle.textContent = 'Valid phone number';
    resultMessage.textContent = `${display} is a valid Pakistani phone number.`;
  } else {
    inputRow.dataset.state = 'invalid';
    result.dataset.state = 'invalid';
    resultIcon.innerHTML = ICONS.invalid;
    resultTitle.textContent = 'Invalid phone number';

    if (!startsWith03) {
      resultMessage.textContent = 'Pakistani mobile numbers start with 03 after the country code.';
    } else if (local.length < 11) {
      resultMessage.textContent = `Enter ${11 - local.length} more digit${11 - local.length === 1 ? '' : 's'} to complete the number.`;
    } else if (local.length > 11) {
      resultMessage.textContent = 'That has too many digits for a Pakistani mobile number.';
    } else {
      resultMessage.textContent = 'That doesn\u2019t match a valid Pakistani mobile format.';
    }
  }
}

input.addEventListener('input', () => {
  const local = toLocalNumber(input.value);

  if (!local) {
    renderIdle();
    return;
  }

  renderResult(local);
});

renderIdle();