document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .container > div').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Reviews Data
const reviews = [
    { name: "Aarav P.", date: "1 day ago", stars: 5, text: "Easy to use and reliable, thanks Metapilot", verified: true },
    { name: "Vikram R.", date: "1 day ago", stars: 3, text: "Took free trial, but Why i cant logged in by my other laptop with same credentials?", verified: true },
    { name: "Neha S.", date: "1 week ago", stars: 5, text: "Mentors- You are masterminds.... Thanks", verified: true },
    { name: "Samira L.", date: "1 month ago", stars: 4, text: "Worth every rupees spent here...", verified: true },
    { name: "Alex B.", date: "2 weeks ago", stars: 3, text: "Too Fast with chatGPT, lagging with Gemini in Meta Go", verified: true },
    { name: "John D.", date: "2 days ago", stars: 5, text: "For coding interview its fire", verified: true },
    { name: "Rohan D.", date: "2 months ago", stars: 3, text: "App ek number hai bhai, but I had to borrow a Windows laptop.", verified: true },
    { name: "Tanya C.", date: "5 days ago", stars: 5, text: "You will be loved by many, keep going, keep helping.", verified: true },
    { name: "David M.", date: "just now", stars: 5, text: "Absolutely brilliant for prep.", verified: true },
    { name: "Mike R.", date: "3 days ago", stars: 4, text: "Really quick responses.", verified: true },
    { name: "Chris T.", date: "2 hours ago", stars: 5, text: "Sub-0.5s is real.", verified: true },
    { name: "Priya V.", date: "4 days ago", stars: 4, text: "just took 1 day free trial of MP Pro and MP Go, Pro is best, but slighlt costly... Thimking to go with MP Go.", verified: true },
    { name: "Amit S.", date: "1 week ago", stars: 3, text: "Works well but needs very strong WiFi or it reconnects.", verified: true },
    { name: "Ravi K.", date: "2 weeks ago", stars: 5, text: "Great tool for fresherss", verified: false },
    { name: "Julien P.", date: "1 month ago", stars: 4, text: "Très bien, mais c'est dommage qu'il n'y ait pas de version Mac.", verified: false },
    { name: "Sarah L.", date: "3 weeks ago", stars: 4, text: "Takes a bit to learn the hotkeys, but then it's smooth.", verified: true },
    { name: "Lucas M.", date: "1 hour ago", stars: 4, text: "My AirPods didn't sync at first, but support fixed it.", verified: true },
    { name: "Marie F.", date: "5 days ago", stars: 4, text: "Un peu cher, mais ça vaut le coup pour un job.", verified: true },
    { name: "Rajesh N.", date: "yesterday", stars: 3, text: "Good app, support took 4 hours to reply on weekend.", verified: true },
    { name: "Sneha M.", date: "12 hours ago", stars: 5, text: "I used MetaPilot Go version, and its good for coding questions, 1 click and boom, answer is in front of my eyes. Need smart mind to use it.", verified: true },
    { name: "Arjun K.", date: "1 day ago", stars: 5, text: "Subscribed for Go app version, and its good, but beyond this there mentors are exclent, Thanks team", verified: true },
    { name: "Karan P.", date: "3 days ago", stars: 5, text: "i have 7 YOE but still hard to code in interviews, Its just owsome app.", verified: true },
    { name: "Anil T.", date: "1 week ago", stars: 5, text: "Hey team, congratulate me, I became Data Engineer in 3 weeks. MetaPilot pilot pro", verified: true },
    { name: "Daniel W.", date: "2 weeks ago", stars: 5, text: "The invisible mode is entirely undetectable. I used it on a heavily monitored corporate laptop during an external interview and it performed perfectly.", verified: true },
    { name: "Emma H.", date: "3 weeks ago", stars: 5, text: "I struggled with live SQL optimization questions. MetaPilot captured the query log instantly and gave me the exact JOIN fix I needed.", verified: false },
    { name: "Liam J.", date: "1 month ago", stars: 5, text: "Voice transcription in Pro is next level. It heard the interviewer ask about Redis caching and fed me the talking points instantly.", verified: true },
    { name: "Aditi S.", date: "2 months ago", stars: 5, text: "I was unemployed for 8 months. Used this for 2 weeks and secured two SDE II offers. The mentorship calls rebuilt my confidence.", verified: true },
    { name: "Oliver G.", date: "2 months ago", stars: 5, text: "Never crashed on me once during the 1-Month Journey. Support team responds on WhatsApp in literally 5 minutes.", verified: true },
    { name: "Sophia C.", date: "3 months ago", stars: 5, text: "I bought the 1-Week Elite pass for my final rounds. The real-time theoretical answers made me sound like an absolute expert.", verified: true },
    { name: "Sachin G.", date: "2 days ago", stars: 5, text: "Bhai sach me maza aa gaya. Invisible mode kafi sahi chal raha hai.", verified: true },
    { name: "Pooja M.", date: "1 week ago", stars: 5, text: "Mera TCS ka technical round clear ho gaya iski wajah se. Thanks team!", verified: true },
    { name: "Rahul J.", date: "2 weeks ago", stars: 5, text: "Bawal cheez hai be. 1 click aur answer tumhare screen par.", verified: false },
    { name: "Vivek S.", date: "3 days ago", stars: 5, text: "Ekdum paisa wasool app hai. Mentors hindi me bhi acche se samjhate hain.", verified: true },
    { name: "Manish K.", date: "1 month ago", stars: 5, text: "ChatGPT bahut fast hai isme. Interviewer ko shak tak nahi hua.", verified: true },
    { name: "Akash R.", date: "15 hours ago", stars: 5, text: "Ek number app", verified: true },
    { name: "Neha D.", date: "1 day ago", stars: 5, text: "Bahut helpful tha thank you.", verified: true },
    { name: "Kunal V.", date: "4 days ago", stars: 5, text: "Pro version ka voice logic OP hai ekdum. Bina type kiye answer aata hai.", verified: true },
    { name: "Suresh P.", date: "2 weeks ago", stars: 5, text: "Market me issey tez koi app nahi hai abhi. Guaranteed.", verified: true },
    { name: "Rishabh Y.", date: "1 month ago", stars: 5, text: "Job chali gayi thi aur isne wapas la di. Shukriya Metapilot.", verified: true },
    { name: "Aman T.", date: "just now", stars: 5, text: "Bilkul sahi kaam kar raha hai.", verified: true },
    { name: "Vikas H.", date: "2 days ago", stars: 5, text: "Go version is brilliant for freshers. Koi lag nahi.", verified: true },
    { name: "Sonali K.", date: "1 week ago", stars: 5, text: "Mentorship is very good.", verified: false },
    { name: "Sumit B.", date: "3 weeks ago", stars: 5, text: "Kisi ko pata nahi chalta, screen share me bhi safe hai.", verified: true },
    { name: "Deepak N.", date: "1 month ago", stars: 5, text: "System design me pagal ho gaya tha, isne bacha liya.", verified: true },
    { name: "Nitin P.", date: "2 months ago", stars: 5, text: "Go wala version bahut fast hai.", verified: true },
    { name: "Kiran S.", date: "3 days ago", stars: 5, text: "TCS ninja clear", verified: true },
    { name: "Ritu M.", date: "1 week ago", stars: 5, text: "Mentors bahut supportive hain yahan.", verified: true },
    { name: "Ashish L.", date: "2 weeks ago", stars: 5, text: "Interview ke liye aag hai yarr", verified: true },
    { name: "Prateek C.", date: "1 month ago", stars: 5, text: "Audio capture perfectly work karta hai speaker se.", verified: true },
    { name: "Camille J.", date: "2 days ago", stars: 5, text: "C'est le meilleur outil pour les entretiens de codage. Très rapide.", verified: true },
    { name: "Laurent P.", date: "1 week ago", stars: 5, text: "L'application fonctionne parfaitement et de manière totalement invisible.", verified: true },
    { name: "Sophie M.", date: "3 days ago", stars: 5, text: "Très utile pour les entretiens techniques en ligne.", verified: false },
    { name: "Antoine D.", date: "2 weeks ago", stars: 5, text: "Je n'arrive pas à croire à quel point c'est rapide. Un clic et la réponse est là.", verified: true },
    { name: "Élise R.", date: "1 month ago", stars: 5, text: "L'équipe de mentorat est exceptionnelle. Merci!", verified: true },
    { name: "Marc T.", date: "1 day ago", stars: 5, text: "Chaque centime dépensé en valait la peine.", verified: true },
    { name: "Julie G.", date: "4 days ago", stars: 5, text: "L'interface est très simple et c'est vraiment invisible.", verified: true },
    { name: "Hugo L.", date: "2 weeks ago", stars: 5, text: "Un logiciel fantastique pour les professionnels.", verified: true },
    { name: "Chloé B.", date: "3 weeks ago", stars: 5, text: "J'ai réussi mon entretien technique grâce à Voice Logic. C'est magique.", verified: true },
    { name: "Luc K.", date: "1 month ago", stars: 5, text: "Testé sur des problèmes Python complexes, résultat impeccable.", verified: true },
    { name: "Nina A.", date: "2 months ago", stars: 5, text: "Merci à Metapilot, j'ai trouvé mon emploi idéal.", verified: true },
    { name: "Paul V.", date: "1 week ago", stars: 5, text: "La vitesse avec ChatGPT est incroyable.", verified: false },
    { name: "Léa C.", date: "3 days ago", stars: 5, text: "Je le recommande à tous les ingénieurs.", verified: true },
    { name: "Maxime N.", date: "2 weeks ago", stars: 5, text: "Génial! La fonction vocale change la donne.", verified: true },
    { name: "Claire H.", date: "1 month ago", stars: 5, text: "Application au top.", verified: true },
    { name: "Zack O.", date: "2 hours ago", stars: 5, text: "Fantastic app.", verified: true },
    { name: "Rachel F.", date: "1 day ago", stars: 5, text: "Works exactly as described.", verified: true },
    { name: "Henry G.", date: "2 days ago", stars: 5, text: "If you have coding interviews coming up, this is mandatory.", verified: false },
    { name: "William E.", date: "3 days ago", stars: 5, text: "Clean and intuitive interface.", verified: true },
    { name: "Kelly W.", date: "1 week ago", stars: 5, text: "I had a setup issue and the team helped me over Zoom within 20 mins.", verified: true },
    { name: "Ryan B.", date: "1 week ago", stars: 5, text: "I was super paranoid about screen recording, but it is actually 100% invisible.", verified: true },
    { name: "Gaurav M.", date: "2 weeks ago", stars: 5, text: "Cracked my Amazon SDE 2 round with this.", verified: true },
    { name: "Tarul K.", date: "2 weeks ago", stars: 5, text: "Super product", verified: true },
    { name: "Jatin P.", date: "3 weeks ago", stars: 5, text: "The Pro version costs more but the Voice feature justifies every penny.", verified: true },
    { name: "Kevin C.", date: "3 weeks ago", stars: 5, text: "Thank you Metapilot for saving my career.", verified: true },
    { name: "Brian D.", date: "1 month ago", stars: 5, text: "Love the UI.", verified: false },
    { name: "Laura T.", date: "1 month ago", stars: 5, text: "It saved me during a brutal live coding session.", verified: true },
    { name: "Omar H.", date: "1 month ago", stars: 5, text: "Works flawlessly on Windows 11 without any lag.", verified: true },
    { name: "Ali S.", date: "2 months ago", stars: 5, text: "Instant key delivery nice.", verified: true },
    { name: "Prashant V.", date: "2 months ago", stars: 5, text: "I can't believe how quickly it generates the code.", verified: true },
    { name: "Megha R.", date: "2 months ago", stars: 5, text: "The mentors helped me re-write my resume too.", verified: true },
    { name: "Nikhil A.", date: "3 months ago", stars: 5, text: "10/10 would buy again.", verified: true },
    { name: "Ian M.", date: "3 months ago", stars: 5, text: "Very powerful software.", verified: false },
    { name: "Sean K.", date: "3 months ago", stars: 5, text: "No bugs, it just works.", verified: true },
    { name: "Justin V.", date: "4 months ago", stars: 5, text: "A+ customer service.", verified: true },
    { name: "Aaron J.", date: "4 months ago", stars: 5, text: "I prefer the Gemini integration for logic questions.", verified: true },
    { name: "Tyler F.", date: "5 months ago", stars: 5, text: "ChatGPT4 responses are incredibly accurate through this app.", verified: true },
    { name: "Samantha L.", date: "5 months ago", stars: 5, text: "Really happy with the results.", verified: true },
    { name: "Erika W.", date: "6 months ago", stars: 5, text: "It feels like magic.", verified: false },
    { name: "Chris B.", date: "6 months ago", stars: 5, text: "Very impressive technology under the hood.", verified: true },
    { name: "Vicky T.", date: "1 day ago", stars: 5, text: "Awesome app.", verified: true },
    { name: "Amit B.", date: "12 hours ago", stars: 5, text: "Superb.", verified: true },
    { name: "Rajat N.", date: "1 day ago", stars: 5, text: "Excellent.", verified: false },
    { name: "Kirti S.", date: "2 days ago", stars: 5, text: "Good product.", verified: true },
    { name: "Manoj P.", date: "1 week ago", stars: 5, text: "Nice.", verified: true },
    { name: "Yash K.", date: "2 weeks ago", stars: 5, text: "Very solid tool.", verified: true },
    { name: "Harsh D.", date: "3 weeks ago", stars: 5, text: "Value for money.", verified: true },
    { name: "Shweta G.", date: "1 month ago", stars: 5, text: "Just wow.", verified: true },
    { name: "Pankaj M.", date: "1 month ago", stars: 5, text: "Best AI app.", verified: false },
    { name: "Vinay R.", date: "2 months ago", stars: 5, text: "Top class.", verified: true },
    { name: "Akshay K.", date: "3 months ago", stars: 5, text: "Thank you guys.", verified: true }
];

// Pin first 5 reviews (which contain mixed ratings) and shuffle the rest
const topReviews = reviews.splice(0, 5);
for (let i = reviews.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
}
reviews.unshift(...topReviews);

let currentReviewIndex = 0;
const reviewsPerLoad = 5;

function renderStars(count) {
    let starsHtml = '';
    for(let i=1; i<=5; i++) {
        if(i <= count) starsHtml += '★';
        else starsHtml += '<span style="color: var(--glass-border);">★</span>';
    }
    return starsHtml;
}

function loadMoreReviews() {
    const feed = document.getElementById('review-feed');
    const displayCount = document.getElementById('review-count-display');
    const btnLayout = document.getElementById('btn-show-more-reviews');

    if(!feed) return;

    let endIndex = currentReviewIndex + reviewsPerLoad;
    if (endIndex > reviews.length) endIndex = reviews.length;

    for (let i = currentReviewIndex; i < endIndex; i++) {
        const r = reviews[i];
        const verifiedTag = r.verified ? `<span style="color: #34c759; font-size: 0.8rem; margin-left: 8px; font-weight: 600;">✓ Verified Purchase</span>` : '';
        
        const reviewHTML = `
            <div style="${i !== reviews.length - 1 ? 'border-bottom: 1px solid var(--glass-border); padding-bottom: 32px;' : ''}">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <div>
                        <span style="font-weight: 600; color: var(--text-main); font-size: 1.1rem;">${r.name}</span>
                        ${verifiedTag}
                    </div>
                    <div style="color: var(--text-dim); font-size: 0.85rem;">${r.date}</div>
                </div>
                <div style="color: #fbbf24; font-size: 1.1rem; margin-bottom: 12px;">${renderStars(r.stars)}</div>
                <p style="color: var(--text-dim); font-size: 0.95rem; line-height: 1.6;">${r.text}</p>
            </div>
        `;
        feed.insertAdjacentHTML('beforeend', reviewHTML);
    }

    const startIndex = currentReviewIndex;
    currentReviewIndex = endIndex;

    // Automatically scroll to the newly loaded comments (Amazon-style)
    if (startIndex > 0 && feed.children[startIndex]) {
        feed.children[startIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Hide button if no more reviews
    if (currentReviewIndex >= reviews.length && btnLayout) {
        btnLayout.style.display = 'none';
        feed.insertAdjacentHTML('beforeend', `<div style="text-align: center; color: var(--text-dim); font-size: 0.9rem; padding: 20px 0;">End of reviews.</div>`);
    }
}

// Initialize Reviews & Forms
document.addEventListener('DOMContentLoaded', () => {
    loadMoreReviews();

    const btnShowMore = document.getElementById('btn-show-more-reviews');
    if(btnShowMore) {
        btnShowMore.addEventListener('click', loadMoreReviews);
    }

    // Review Form Toggle
    const btnWrite = document.getElementById('btn-write-review');
    const formBox = document.getElementById('write-review-form');
    if(btnWrite && formBox) {
        btnWrite.addEventListener('click', () => {
            formBox.style.display = formBox.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Submit Review Simulation
    const btnSubmit = document.getElementById('btn-submit-review');
    const successMsg = document.getElementById('review-success-msg');
    
    if(btnSubmit && successMsg) {
        btnSubmit.addEventListener('click', () => {
            const name = document.getElementById('review-name').value;
            const text = document.getElementById('review-text').value;
            
            if(name.trim() === '' || text.trim() === '') {
                alert("Please fill in your name and comment.");
                return;
            }

            btnSubmit.innerText = "Submitting...";
            btnSubmit.disabled = true;

            // Fake network request
            setTimeout(() => {
                successMsg.style.display = 'block';
                document.getElementById('review-name').value = '';
                document.getElementById('review-text').value = '';
                btnSubmit.innerText = "Submit Review";
                btnSubmit.disabled = false;
                
                // Hide form totally after 3s
                setTimeout(() => {
                    formBox.style.display = 'none';
                    successMsg.style.display = 'none';
                }, 3000);
            }, 1000);
        });
    }
});
