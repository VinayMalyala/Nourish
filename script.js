const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true,
    delay: 100
});

sr.reveal(`.left-section, .program-left, .faq-heading, .contact-us, .final-section-left`, {origin: 'left'});

sr.reveal(`.right-section, .program-right-section, .details, .final-right-section`, {origin: 'right'});

sr.reveal(`.features-section-heading, .get-in-touch button, footer`)
sr.reveal(`.feature-card, .review-card, .footer-logo ul li`, {interval: 300})
sr.reveal(`.faq-card`, {interval: 200})