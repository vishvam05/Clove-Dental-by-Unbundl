document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', () => {
                const isAlreadyOpen = item.classList.contains('open');

                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                    }
                });

                if (isAlreadyOpen) {
                    item.classList.remove('open');
                } else {
                    item.classList.add('open');
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const features = document.querySelectorAll('.features-list li');

    features.forEach(feature => {
        feature.addEventListener('click', () => {
            const isAlreadyActive = feature.classList.contains('active');

            features.forEach(item => {
                if (item !== feature) {
                    item.classList.remove('active');
                }
            });

            feature.classList.toggle('active');
        });
    });
});