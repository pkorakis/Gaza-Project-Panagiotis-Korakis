// --- Global State ---
let chartsRendered = false;
let currentLang = 'en';

// --- Data for Translations ---
const translations = {
    en: {
        title: "Gaza: Past and Today",
        navHistory: "History",
        navUN: "UN & Diplomacy",
        navPresent: "The Polycrisis",
        navFunds: "Fundraisers",
        introTitle: "Understanding the Context",
        introText: "To truly comprehend the gravity of the current situation—a devastating polycrisis involving war, displacement, and systemic collapse—we must first navigate the complex history, the diplomatic stalemates, and the stories of the people involved.",
        arafatCardTitle: "Yasser Arafat & The Accord",
        arafatCardText: "From the leader of the PLO to the historic handshake with Rabin under Clinton's watch.",
        arafatTitle: "The Leader, The Accord, and The Nobel",
        arafatP1: "Yasser Arafat was more than just a politician; he was the symbol of Palestinian nationalism. As the chairman of the PLO, he navigated the treacherous waters of Middle Eastern politics for decades. His leadership style was complex, transitioning from guerrilla warfare to diplomatic engagement, culminating in the historic Oslo Accords.",
        arafatP2: "In 1994, Yasser Arafat was awarded the Nobel Peace Prize, shared jointly with Shimon Peres and Yitzhak Rabin, for their efforts to create peace in the Middle East. The famous handshake on the White House lawn, overseen by Bill Clinton, remains an iconic image of hope that was ultimately unfulfilled.",
        intifadaTitle: "The Intifadas: Cycles of Uprising",
        intifadaP1: "When the promises of peace withered, the Intifadas (uprisings) began. The First Intifada (1987) was largely a grassroots movement characterized by civil disobedience and stones. It showed the world the depth of Palestinian frustration.",
        intifadaP2: "The Second Intifada (2000), triggered after the failure of the Camp David Summit, was far more violent. It militarized the conflict, leading to thousands of deaths and the construction of separation walls. These eras defined the current generation's trauma.",
        intifadaCardTitle: "Resistance & Consequence",
        intifadaCardText: "From stones against tanks to militarized conflict and checkpoints.",
        unCardTitle: "UN Status & The Superpowers",
        unCardP1: "In 2012, the UN General Assembly recognized Palestine as a 'Non-member Observer State' (Res 67/19). This was a massive diplomatic victory.",
        unCardP2Header: "Global Powers Stance:",
        unUSA: "USA: Does not recognize Palestine. Frequently uses Veto power in the Security Council.",
        unRussia: "Russia: Recognizes the State of Palestine (inherited from USSR stance).",
        grCardTitle: "The Greek Stance",
        grCardP1: "Greece has always been a historical friend to the Palestinian people, balancing its role as a NATO member and EU state.",
        grCardP2: "In December 2015, the Greek Parliament voted unanimously to recommend recognizing the State of Palestine. President Abbas attended this session. Despite this vote, the government has not yet formalized full diplomatic recognition.",
        polyTitle: "The Genocide & Polycrisis",
        polyIntro: "We are witnessing a 'polycrisis'—the simultaneous collapse of health, shelter, and safety.",
        polyTextHeader: "How it Started & How it is Going",
        polyP1: "The current escalation began on October 7th, 2023. Following an attack led by Hamas, Israel launched an unprecedented military campaign against the Gaza Strip. What began as a retaliation rapidly evolved into what many international legal experts and the ICJ are investigating as plausible genocide.",
        polyP2: "Months later, the situation has deteriorated into a humanitarian catastrophe. The bombardment has not ceased, targeting hospitals, schools, and refugee camps designated as 'safe zones.'",
        polyP3: "Today, famine is setting in. The healthcare system has effectively collapsed, with surgeries performed without anesthesia. The 'polycrisis' means that even if the bombing stopped today, the lack of clean water and shelter would continue to kill civilians for months to come.",
        chart1Title: "Conflict Scale (Deaths)",
        chart2Title: "Displacement %",
        chart3Title: "Timeline of Casualties",
        fundsTitle: "Support the Humanitarian Effort",
        fundsSubtitle: "Direct links to verified organizations working on the ground.",
        cardUNRWA: "The primary UN agency for Palestinian refugees. Essential for food, education, and health.",
        cardPCRF: "Palestine Children's Relief Fund. Providing medical care and urgent aid to injured children.",
        cardMSF: "Médecins Sans Frontières. Treating the wounded in hospitals under extreme conditions."
    },
    el: {
        title: "Γάζα: Το Χθες και το Σήμερα",
        navHistory: "Ιστορία",
        navUN: "ΟΗΕ & Διπλωματία",
        navPresent: "Πολυκρίση",
        navFunds: "Δωρεές",
        introTitle: "Κατανοώντας το Πλαίσιο",
        introText: "Για να κατανοήσουμε τη σοβαρότητα της τρέχουσας κατάστασης—μιας καταστροφικής πολυκρίσης που περιλαμβάνει πόλεμο, εκτοπισμό και συστημική κατάρρευση—πρέπει πρώτα να εξετάσουμε την περίπλοκη ιστορία, τα διπλωματικά αδιέξοδα και τις ιστορίες των ανθρώπων.",
        arafatCardTitle: "Γιάσερ Αραφάτ & Η Συμφωνία",
        arafatCardText: "Από ηγέτης της PLO στην ιστορική χειραψία με τον Ράμπιν υπό το βλέμμα του Κλίντον.",
        arafatTitle: "Ο Ηγέτης, η Συμφωνία και το Νόμπελ",
        arafatP1: "Ο Γιάσερ Αραφάτ δεν ήταν απλώς ένας πολιτικός. Ήταν το σύμβολο του παλαιστινιακού εθνικισμού. Ως πρόεδρος της PLO, πλοηγήθηκε στα επικίνδυνα νερά της πολιτικής της Μέσης Ανατολής για δεκαετίες. Το στυλ ηγεσίας του ήταν πολύπλοκο, μεταβαίνοντας από τον ανταρτοπόλεμο στη διπλωματική εμπλοκή.",
        arafatP2: "Το 1994, ο Γιάσερ Αραφάτ τιμήθηκε με το Νόμπελ Ειρήνης, από κοινού με τους Σιμόν Πέρες και Γιτζάκ Ράμπιν. Η διάσημη χειραψία στο Λευκό Οίκο, υπό την επίβλεψη του Μπιλ Κλίντον, παραμένει μια εικόνα ελπίδας που τελικά έμεινε ανεκπλήρωτη.",
        intifadaTitle: "Οι Ιντιφάντα: Κύκλοι Εξέγερσης",
        intifadaP1: "Όταν οι υποσχέσεις για ειρήνη μαράθηκαν, ξεκίνησαν οι Ιντιφάντα (εξεγέρσεις). Η Πρώτη Ιντιφάντα (1987) ήταν κυρίως ένα λαϊκό κίνημα με πέτρες και πολιτική ανυπακοή. Έδειξε στον κόσμο το βάθος της παλαιστινιακής απόγνωσης.",
        intifadaP2: "Η Δεύτερη Ιντιφάντα (2000), μετά την αποτυχία του Καμπ Ντέιβιντ, ήταν πολύ πιο βίαιη. Στρατιωτικοποίησε τη σύγκρουση, οδηγώντας σε χιλιάδες θανάτους και την κατασκευή τειχών. Αυτές οι εποχές καθόρισαν το τραύμα της τρέχουσας γενιάς.",
        intifadaCardTitle: "Αντίσταση & Συνέπειες",
        intifadaCardText: "Από τις πέτρες ενάντια στα τανκς, στη στρατιωτικοποιημένη σύγκρουση και τα σημεία ελέγχου.",
        unCardTitle: "ΟΗΕ & Υπερδυνάμεις",
        unCardP1: "Το 2012, η Γενική Συνέλευση του ΟΗΕ αναγνώρισε την Παλαιστίνη ως 'Κράτος Παρατηρητή' (Res 67/19). Αυτή ήταν μια τεράστια διπλωματική νίκη.",
        unCardP2Header: "Η Στάση των Μεγάλων Δυνάμεων:",
        unUSA: "ΗΠΑ: Δεν αναγνωρίζουν την Παλαιστίνη. Χρησιμοποιούν συχνά Βέτο στο Συμβούλιο Ασφαλείας.",
        unRussia: "Ρωσία: Αναγνωρίζει το Κράτος της Παλαιστίνης (κληρονομιά από την ΕΣΣΔ).",
        grCardTitle: "Η Ελληνική Στάση",
        grCardP1: "Η Ελλάδα υπήρξε ιστορικά φίλη του παλαιστινιακού λαού, ισορροπώντας τον ρόλο της ως μέλος του ΝΑΤΟ και της ΕΕ.",
        grCardP2: "Τον Δεκέμβριο του 2015, η Ελληνική Βουλή ψήφισε ομόφωνα υπέρ της αναγνώρισης του Κράτους της Παλαιστίνης. Ο Πρόεδρος Αμπάς ήταν παρών. Παρά την ψηφοφορία, η κυβέρνηση δεν έχει επισημοποιήσει πλήρη διπλωματική αναγνώριση.",
        polyTitle: "Γενοκτονία & Πολυκρίση",
        polyIntro: "Είμαστε μάρτυρες μιας 'πολυκρίσης'—της ταυτόχρονης κατάρρευσης της υγείας, της στέγασης και της ασφάλειας.",
        polyTextHeader: "Πώς ξεκίνησε & Πού βρίσκεται",
        polyP1: "Η τρέχουσα κλιμάκωση ξεκίνησε στις 7 Οκτωβρίου 2023. Μετά από επίθεση της Χαμάς, το Ισραήλ ξεκίνησε μια πρωτοφανή στρατιωτική εκστρατεία. Αυτό που ξεκίνησε ως αντίποινα εξελίχθηκε σε αυτό που πολλοί νομικοί και το Διεθνές Δικαστήριο διερευνούν ως πιθανή γενοκτονία.",
        polyP2: "Μήνες αργότερα, η κατάσταση έχει εξελιχθεί σε ανθρωπιστική καταστροφή. Οι βομβαρδισμοί δεν έχουν σταματήσει, στοχεύοντας νοσοκομεία, σχολεία και καταυλισμούς προσφύγων.",
        polyP3: "Σήμερα, ο λιμός απειλεί. Το σύστημα υγείας έχει καταρρεύσει. Η 'πολυκρίση' σημαίνει ότι ακόμα κι αν σταματούσαν οι βομβαρδισμοί σήμερα, η έλλειψη καθαρού νερού και στέγης θα συνέχιζε να σκοτώνει αμάχους για μήνες.",
        chart1Title: "Κλίμακα Σύγκρουσης (Θάνατοι)",
        chart2Title: "Εκτοπισμός %",
        chart3Title: "Χρονοδιάγραμμα Θυμάτων",
        fundsTitle: "Στηρίξτε την Ανθρωπιστική Προσπάθεια",
        fundsSubtitle: "Απευθείας σύνδεσμοι σε επαληθευμένους οργανγοργανισμούς που βρίσκονται στο πεδίο.",
        cardUNRWA: "Η βασική υπηρεσία του ΟΗΕ για τους Παλαιστίνιους πρόσφυγες. Απαραίτητη για τροφή και υγεία.",
        cardPCRF: "Ταμείο Αρωγής Παιδιών Παλαιστίνης. Παροχή ιατρικής περίθαλψης σε τραυματισμένα παιδιά.",
        cardMSF: "Γιατροί Χωρίς Σύνορα. Περίθαλψη τραυματιών σε νοσοκομεία υπό ακραίες συνθήκες."
    }
};

// --- Language Functionality ---
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'el' : 'en';
    document.getElementById('lang-display').innerText = currentLang.toUpperCase();
    
    // Select all elements with data-key
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

// --- Tab Navigation Logic ---
function switchTab(tabName) {
    // Hide all tabs
    const tabIds = ['tab-history', 'tab-un', 'tab-present', 'tab-funds'];
    tabIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // Show selected tab
    const selectedTab = document.getElementById('tab-' + tabName);
    if (selectedTab) selectedTab.classList.remove('hidden');

    // Update Buttons Styling
    const buttons = ['history', 'un', 'present', 'funds'];
    buttons.forEach(btn => {
        const el = document.getElementById('btn-' + btn);
        if (!el) return;
        
        if (btn === tabName) {
            el.classList.add('bg-white', 'dark:bg-slate-600', 'shadow-sm', 'text-amber-700', 'dark:text-amber-400');
            el.classList.remove('text-gray-600', 'dark:text-gray-300');
        } else {
            el.classList.remove('bg-white', 'dark:bg-slate-600', 'shadow-sm', 'text-amber-700', 'dark:text-amber-400');
            el.classList.add('text-gray-600', 'dark:text-gray-300');
        }
    });

    // If Present tab is selected, render charts
    if (tabName === 'present') {
        renderCharts();
    }
}

// --- Image Interaction Logic ---
function toggleInfo(id) {
    const infoDiv = document.getElementById(id);
    if (!infoDiv) return;

    if (infoDiv.classList.contains('hidden')) {
        infoDiv.classList.remove('hidden');
        setTimeout(() => {
            infoDiv.classList.add('opacity-100', 'translate-y-0');
            infoDiv.classList.remove('opacity-0', 'translate-y-4');
        }, 10);
    } else {
        infoDiv.classList.remove('opacity-100', 'translate-y-0');
        infoDiv.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => {
            infoDiv.classList.add('hidden');
        }, 300);
    }
}

// --- Slideshow Logic ---
function startSlideshows() {
    const slideshows = [
        { ids: ['slide-arafat-1', 'slide-arafat-2'], current: 0 },
        { ids: ['slide-intifada-1', 'slide-intifada-2'], current: 0 },
        { ids: ['slide-curr-1', 'slide-curr-2', 'slide-curr-3'], current: 0 }
    ];

    slideshows.forEach(show => {
        setInterval(() => {
            // Hide current
            document.getElementById(show.ids[show.current]).classList.remove('opacity-100');
            document.getElementById(show.ids[show.current]).classList.add('opacity-0');
            
            // Move to next
            show.current = (show.current + 1) % show.ids.length;
            
            // Show next
            document.getElementById(show.ids[show.current]).classList.remove('opacity-0');
            document.getElementById(show.ids[show.current]).classList.add('opacity-100');
        }, 15000); // 15 seconds as requested
    });
}

// --- Dark Mode Logic ---
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// --- Scroll to Top Logic ---
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.remove('translate-y-20', 'opacity-0');
        } else {
            scrollBtn.classList.add('translate-y-20', 'opacity-0');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Chart Generation (Chart.js) ---
function renderCharts() {
    if (chartsRendered) return;
    
    // Chart 1: Bar
    new Chart(document.getElementById('casualtiesChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['2014', '2023-24'],
            datasets: [{
                label: 'Deaths',
                data: [2251, 35000], 
                backgroundColor: ['#CBD5E0', '#E53E3E'],
                borderRadius: 5,
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    // Chart 2: Doughnut
    new Chart(document.getElementById('displacementChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Displaced', 'Home'],
            datasets: [{
                data: [85, 15],
                backgroundColor: ['#DD6B20', '#EDF2F7'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });

    // Chart 3: Line (Timeline)
    new Chart(document.getElementById('timelineChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
            datasets: [{
                label: 'Cumulative Casualties (Thousands)',
                data: [8, 15, 22, 27, 30, 35],
                borderColor: '#E53E3E',
                backgroundColor: 'rgba(229, 62, 62, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    chartsRendered = true;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    switchTab('history');
    startSlideshows();
});