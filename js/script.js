// кнопки
const btn = document.querySelectorAll('.btn');

if (btn) {
    btn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('btn--active');
        })
    })
}

// notice
const noticeEl = document.querySelector('.notice');

if (noticeEl) {
    const noticeCloseEl = noticeEl.querySelector('.notice__close');
    noticeCloseEl.addEventListener('click', () => {
        noticeEl.classList.add('notice--hidden');
    })
}

// burger menu

const burgerEl = document.querySelector('.burger');

if (burgerEl) {
    const body = document.body;
    const menuEl = document.querySelector('.header__bottom');
    burgerEl.addEventListener('click', () => {
        menuEl.classList.toggle('header__bottom--active');
        burgerEl.classList.toggle('burger--active');
        body.classList.toggle('stop-scroll');
    });

};

const headerListEl = document.querySelector('.header__list');

if (headerListEl) {
    new TransferElements(
        {
          sourceElement: headerListEl,
          breakpoints: {
            767.98: {
              targetElement: document.querySelector('.header__bottom'),
              targetPosition: 1
            }
          }
        }
      );
}

//filters

const filtersBtn = document.querySelector('.mobile-btn');

if (filtersBtn) {
    const filtersEl = document.querySelector('.filters');

    filtersBtn.addEventListener('click', () => {
        filtersBtn.classList.toggle('mobile-btn--active');
        filtersEl.classList.toggle('filters--active');
    });

}

// stepper
const stepperEls = document.querySelectorAll('.stepper');

// кнопки плюс и минус
if (stepperEls) {
    stepperEls.forEach(stepperEl => {
        const stepperInputEl = stepperEl.querySelector('.stepper__input');
        const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn-minus');
        const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn-plus');

        const stepperMin = Number(stepperInputEl.getAttribute('min'));
        const stepperMax = Number(stepperInputEl.getAttribute('max'));

        let count = Number(stepperInputEl.value);

        // ввод с клавиатуры в инпут
        stepperInputEl.addEventListener('change', () => {
            stepperBtnMinusEl.disabled = false;
            stepperBtnPlusEl.disabled = false;
            // stepperBtnMinusEl.classList.remove('stepper__btn--disabled');
            // stepperBtnPlusEl.classList.remove('stepper__btn--disabled');

            if (stepperInputEl.value < stepperMin) {
                stepperInputEl.value = stepperMin;
                stepperBtnMinusEl.disabled = true;
                // stepperBtnMinusEl.classList.add('stepper__btn--disabled');
            }
            if (stepperInputEl.value > stepperMax) {
                stepperInputEl.value = stepperMax;
                stepperBtnPlusEl.disabled = true;
                // stepperBtnPlusEl.classList.add('stepper__btn--disabled');
            }
        });

        stepperBtnPlusEl.addEventListener('click', () => {
            count = Number(stepperInputEl.value);
            if (count < stepperMax) {
                stepperBtnMinusEl.disabled = false;
                stepperBtnPlusEl.disabled = false;
                // stepperBtnMinusEl.classList.remove('stepper__btn--disabled');
                // stepperBtnPlusEl.classList.remove('stepper__btn--disabled');
                count++;
                stepperInputEl.value = count;
            }
            if (count === stepperMax) {
                stepperBtnPlusEl.disabled = true;
                // stepperBtnPlusEl.classList.add('stepper__btn--disabled');
            }
        });

        stepperBtnMinusEl.addEventListener('click', () => {
            count = Number(stepperInputEl.value);
            if (count > stepperMin) {
                stepperBtnMinusEl.disabled = false;
                stepperBtnPlusEl.disabled = false;
                // stepperBtnPlusEl.classList.remove('stepper__btn--disabled');
                // stepperBtnMinusEl.classList.remove('stepper__btn--disabled');
                count--;
                stepperInputEl.value = count;
            }
            if (count === stepperMin) {
                stepperBtnMinusEl.disabled = true;
                // stepperBtnMinusEl.classList.add('stepper__btn--disabled');
            }
        });
    });
};

