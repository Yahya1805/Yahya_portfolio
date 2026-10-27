/**
 * Internationalization (i18n) module for bilingual support:
 * - Bahasa Indonesia (id) [Default]
 * - English (en)
 *
 * Persists language choice in localStorage with fallback.
 */
(function () {
    window.Portfolio = window.Portfolio || {};

    const STORAGE_KEY = 'portfolio_language';
    const DEFAULT_LANG = 'id';
    const SUPPORTED_LANGS = ['id', 'en'];

    const translations = {
        id: {
            // Document Meta
            'page.title': 'M. Yahya Irvansyah | Portofolio',
            'page.metaDescription': 'Portofolio pribadi M. Yahya Irvansyah, mahasiswa D-IV Teknik Informatika di Politeknik Negeri Malang yang berfokus pada pengembangan web dan keamanan siber.',
            'skip.link': 'Lewati ke konten utama',
            'nav.logoAria': 'M. Yahya Irvansyah — Beranda',
            'nav.toggleOpen': 'Buka menu navigasi',
            'nav.toggleClose': 'Tutup menu navigasi',
            'noscript.note': 'JavaScript dinonaktifkan. Kotak dialog detail proyek dan pesan interaktif tidak akan berfungsi.',

            // Navigation Links
            'nav.home': 'Beranda',
            'nav.about': 'Tentang',
            'nav.skills': 'Keahlian',
            'nav.projects': 'Proyek',
            'nav.experience': 'Pengalaman',
            'nav.social': 'Sosial',

            // Hero Section
            'hero.badge': 'Mahasiswa Informatika &middot; Cyber Security',
            'hero.headline': 'Web Development & Cyber Security Enthusiast.',
            'hero.tagline': 'Mahasiswa D-IV Teknik Informatika di Politeknik Negeri Malang yang memiliki ketertarikan pada Web Development dan Cyber Security. Memiliki pengalaman mengembangkan proyek aplikasi web serta dasar jaringan komputer, dan terus mengembangkan kemampuan melalui perkuliahan dan pembelajaran mandiri.',
            'hero.viewWork': 'Lihat Karya Saya',
            'hero.downloadCv': 'Lihat CV',
            'hero.cvNote': 'File PDF CV belum tersedia. Tombol ini akan aktif setelah file ditambahkan.',
            'hero.techLabel': 'Teknologi yang saya gunakan',

            // About Section
            'about.eyebrow': 'Tentang',
            'about.title': 'Awal perjalanan saya di dunia pengembangan perangkat lunak',
            'about.subtitle': 'Ketika rasa ingin tahu berubah menjadi baris kode.',
            'about.storyTitle1': 'Memasuki dunia perkuliahan',
            'about.storyText1': 'Perjalanan saya dimulai di Politeknik Negeri Malang saat menempuh pendidikan di program studi D-IV Teknik Informatika. Melalui perkuliahan, saya mulai mengeksplorasi dunia teknologi, mempelajari cara kerja perangkat lunak, bagaimana aplikasi dibangun, dan bagaimana teknologi dapat menyelesaikan masalah nyata.',
            'about.storyTitle2': 'Awal mula ketertarikan',
            'about.storyText2': 'Fokus akademik saya mencakup pengembangan web, pengembangan aplikasi, dan manajemen basis data. Namun, rasa ingin tahu saya berkembang lebih dari sekadar membangun sistem yang fungsional. Saya juga tertarik memahami bagaimana sistem dapat dieksploitasi, di mana celah keamanan berada, dan bagaimana lingkungan digital dapat dibuat lebih aman.',
            'about.storyTitle3': 'Fokus saat ini',
            'about.storyText3': 'Saat ini saya sedang memperdalam kemampuan dalam pengembangan web sembari mengeksplorasi bidang keamanan siber, khususnya keamanan web, analisis kerentanan, dan pengujian penetrasi. Tujuan saya adalah memadukan pemahaman tentang bagaimana aplikasi dibangun dengan pengetahuan tentang bagaimana melindunginya, menciptakan sistem yang tidak hanya fungsional tetapi juga aman dan andal.',
            'about.factEducation': 'Pendidikan',
            'about.factEducationVal': 'D-IV Teknik Informatika<br>Politeknik Negeri Malang',
            'about.factLocation': 'Lokasi',
            'about.factLocationVal': 'Malang, Jawa Timur<br>Indonesia',
            'about.factFocus': 'Fokus',
            'about.factFocusVal': 'Pengembangan Web<br>Keamanan Siber',

            // Skills Section
            'skills.eyebrow': 'Keahlian',
            'skills.title': 'Mempelajari pemrograman &amp; teknologi',
            'skills.subtitle': 'Membangun keahlian setahap demi setahap melalui setiap proyek.',
            'skills.technicalTitle': 'Kemampuan teknis',
            'skills.sectionNote': 'Tingkat kemampuan teknis dinilai secara realistis berdasarkan pemahaman konsep dan pengalaman implementasi proyek.',
            'skills.levelLabel': 'Level:',
            'skills.level.intermediate': 'Intermediate',
            'skills.level.beginner': 'Beginner',
            'skills.level.beginnerIntermediate': 'Beginner&ndash;Intermediate',
            'skills.webDesc': 'Memiliki kemampuan tingkat menengah dalam pengembangan web, termasuk membangun antarmuka, menyusun struktur halaman, mengelola styling, dan mengembangkan fungsi website menggunakan teknologi yang telah dipelajari.',
            'skills.appDesc': 'Memiliki pemahaman dasar dalam pengembangan aplikasi menggunakan Java, termasuk mempelajari logika program, struktur kode, dan implementasi fungsi aplikasi.',
            'skills.secDesc': 'Memiliki pemahaman dasar hingga menengah awal mengenai konsep keamanan siber dan sedang memperdalam pengetahuan melalui pembelajaran serta latihan secara bertahap.',
            'skills.workingStyleTitle': 'Gaya kerja',
            'skills.soft.problemSolving': 'Pemecahan Masalah',
            'skills.soft.teamCollab': 'Kolaborasi Tim',
            'skills.soft.fastLearner': 'Cepat Belajar',
            'skills.soft.creativeThinking': 'Berpikir Kreatif',
            'skills.soft.timeManagement': 'Manajemen Waktu',
            'skills.soft.documentation': 'Dokumentasi',

            // Projects Section
            'projects.eyebrow': 'Proyek',
            'projects.title': 'Proyek &amp; Eksperimen',
            'projects.subtitle': 'Membangun karya nyata, satu iterasi demi satu iterasi.',
            'projects.note': 'Deskripsi proyek, status penyelesaian, dan detail modal diambil dari portofolio sebelumnya. Detail repositori, demo, tangkapan layar, dan persentase yang sedang berlangsung masih memerlukan konfirmasi. Proyek yang selesai ditampilkan 100%.',
            'projects.filterAria': 'Saring konten berdasarkan kategori',
            'projects.filterProjects': 'Proyek',
            'projects.filterCertificates': 'Sertifikat',
            'projects.statusProjects': '{count} proyek ditampilkan.',
            'projects.statusCertificates': '{count} sertifikat tersedia.',
            'projects.btnViewDetails': 'Lihat Detail',
            'projects.btnViewCertificate': 'Lihat Sertifikat',
            'projects.noteNoLinks': 'Tautan repositori dan demo belum tersedia.',
            'projects.noteCertPdf': 'Dokumen sertifikat resmi format PDF (2 halaman).',
            'projects.noteCertProgress': 'Course sedang dipelajari (sertifikat kelulusan belum tersedia).',
            'projects.noteCertPlanned': 'Course terencana (sertifikat kelulusan belum tersedia).',
            'projects.badgeCompleted': 'Selesai',
            'projects.badgeInProgress': 'Sedang Berjalan',
            'projects.badgeNotStarted': 'Belum Dimulai',
            'projects.badgeVerifiedDoc': 'Dokumen Terverifikasi',
            'projects.progressLabel': 'Progres: {val}%',
            'projects.progressPages': 'PDF 2 Halaman',
            'projects.progressNotConfirmed': 'Progres: belum dikonfirmasi',

            // Empty State
            'empty.title': 'Belum Ada Sertifikat yang Tersedia',
            'empty.text': 'Saat ini belum ada dokumen sertifikat atau bukti sertifikasi resmi yang telah diverifikasi untuk ditampilkan. Dokumen sertifikat akan ditampilkan di sini setelah proses verifikasi selesai.',

            // Experience Section
            'experience.eyebrow': 'Pengalaman',
            'experience.title': 'Pengalaman &amp; Keterlibatan',
            'experience.subtitle': 'Perjalanan akademik, pengalaman organisasi, proyek, dan pengembangan keterampilan teknologi.',
            'experience.sectionTitle': 'Pengalaman',

            // 1. BEM Polinema
            'experience.bemPeriod': '2025 &ndash; Sekarang',
            'experience.bemType': 'Organisasi Mahasiswa',
            'experience.bemRole': 'Wakil Menteri Komunikasi dan Informasi &mdash; BEM Polinema',
            'experience.bemOrg': 'Badan Eksekutif Mahasiswa, Politeknik Negeri Malang',
            'experience.bemLi1': 'Berkontribusi dalam pengelolaan media sosial dan publikasi informasi organisasi.',
            'experience.bemLi2': 'Berkoordinasi dengan tim dalam pelaksanaan program kerja dan pembuatan konten digital.',
            'experience.bemLi3': 'Mengembangkan kemampuan komunikasi, kolaborasi, dan manajemen waktu.',

            // 2. Proyek Akademik
            'experience.academicPeriod': '2024 &ndash; Sekarang',
            'experience.academicType': 'Proyek Akademik',
            'experience.academicRole': 'Pengembangan Proyek Akademik',
            'experience.academicOrg': 'Proyek Perkuliahan D-IV Teknik Informatika',
            'experience.academicLi1': 'Mengembangkan website rekomendasi kafe dan aplikasi pencatatan keuangan.',
            'experience.academicLi2': 'Mempelajari pengembangan web, database, serta machine learning melalui proyek perkuliahan.',
            'experience.academicLi3': 'Mengasah kemampuan pemrograman, pemecahan masalah, dan pengujian aplikasi.',

            // 3. Jaringan Komputer & Cyber Security
            'experience.netsecPeriod': '2021 &ndash; Sekarang',
            'experience.netsecType': 'Jaringan &amp; Keamanan Siber',
            'experience.netsecRole': 'Pembelajaran Jaringan Komputer &amp; Cyber Security',
            'experience.netsecOrg': 'SMKN 1 Bangil &amp; Belajar Mandiri',
            'experience.netsecLi1': 'Mempelajari dasar jaringan komputer dan Cyber Security sejak bersekolah di SMKN 1 Bangil.',
            'experience.netsecLi2': 'Pernah menjalani persiapan LKS bidang Cyber Security tingkat provinsi.',
            'experience.netsecLi3': 'Melanjutkan pembelajaran secara mandiri untuk memperluas pemahaman tentang keamanan sistem dan jaringan.',

            // Tonggak Pembelajaran
            'experience.milestonesTitle': 'Tonggak Pembelajaran',
            'experience.ms1Year': '2021–2024',
            'experience.ms1Title': 'Fondasi Jaringan Komputer',
            'experience.ms1Text': 'Mempelajari topologi jaringan, pengalamatan IP, perangkat jaringan, dan instalasi kabel. Memperoleh sertifikasi BNSP Junior Technical Support pada 2025.',
            'experience.ms2Year': '2024',
            'experience.ms2Title': 'Memulai Perkuliahan Informatika',
            'experience.ms2Text': 'Mulai mendalami pemrograman, pengembangan aplikasi, dan konsep dasar rekayasa perangkat lunak.',
            'experience.ms3Year': '2024–2025',
            'experience.ms3Title': 'Pengembangan Proyek Aplikasi',
            'experience.ms3Text': 'Mengerjakan proyek akademik, termasuk website rekomendasi kafe dan aplikasi pencatatan keuangan, serta mempelajari basis data.',
            'experience.ms4Year': '2025 – Sekarang',
            'experience.ms4Title': 'Eksplorasi Teknologi dan Cyber Security',
            'experience.ms4Text': 'Memperluas wawasan melalui pembelajaran web development, machine learning, dan belajar mandiri Cyber Security sesuai minat pribadi.',

            // Social Section
            'social.eyebrow': 'Terhubung',
            'social.title': 'Ikuti &amp; Terhubung',
            'social.subtitle': 'Temukan profil dan aktivitas saya di media sosial serta platform pengembangan.',
            'social.instagramLabel': 'Profil Instagram',
            'social.linkedinLabel': 'Profil LinkedIn',

            // Footer
            'footer.builtWith': '&copy; {year} M. Yahya Irvansyah. Dibuat dengan HTML, CSS, dan JavaScript.',

            // Modal Dialog
            'modal.closeAria': 'Tutup detail proyek',
            'modal.noteConfirmation': 'Beberapa detail dalam dialog ini diambil dari portofolio sebelumnya dan masih memerlukan konfirmasi.',
            'modal.headingAboutProject': 'Tentang Proyek Ini',
            'modal.headingAboutCert': 'Tentang Sertifikat / Course Ini',
            'modal.headingFeatures': 'Fitur Utama',
            'modal.headingCompetencies': 'Daftar Unit Kompetensi',
            'modal.headingTech': 'Teknologi yang Digunakan',
            'modal.headingCompField': 'Bidang Kompetensi',
            'modal.headingDetails': 'Detail Proyek',
            'modal.headingChallenges': 'Tantangan',
            'modal.headingLearnings': 'Pembelajaran Utama',
            'modal.headingLimitations': 'Batasan Saat Ini',
            'modal.headingLinks': 'Tautan &amp; Dokumen',
            'modal.labelDuration': 'Durasi:',
            'modal.labelRole': 'Peran:',
            'modal.noDocCert': 'Dokumen sertifikat kelulusan belum tersedia (course masih dalam proses / rencana).',
            'modal.noDocProject': 'Tautan repositori dan demo belum tersedia.',
            'modal.linkPdf': 'Lihat Sertifikat (PDF - 2 Halaman)',
            'modal.linkRepo': 'Repositori',
            'modal.linkDemo': 'Demo langsung'
        },

        en: {
            // Document Meta
            'page.title': 'M. Yahya Irvansyah | Portfolio',
            'page.metaDescription': 'Personal portfolio of M. Yahya Irvansyah, an Applied Informatics student at Politeknik Negeri Malang focused on web development and cybersecurity.',
            'skip.link': 'Skip to main content',
            'nav.logoAria': 'M. Yahya Irvansyah — Home',
            'nav.toggleOpen': 'Open navigation menu',
            'nav.toggleClose': 'Close navigation menu',
            'noscript.note': 'JavaScript is disabled. Project detail dialogs and form status messages will not work.',

            // Navigation Links
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.experience': 'Experience',
            'nav.social': 'Social',

            // Hero Section
            'hero.badge': 'Informatics Student &middot; Cyber Security',
            'hero.headline': 'Web Development & Cyber Security Enthusiast.',
            'hero.tagline': 'Applied Informatics student at Politeknik Negeri Malang with a passion for Web Development and Cyber Security. Experienced in developing web application projects and computer networking fundamentals, continuously advancing skills through coursework and self-directed learning.',
            'hero.viewWork': 'View My Work',
            'hero.downloadCv': 'View CV',
            'hero.cvNote': 'The CV PDF is not available yet. This button will be enabled after the file is added.',
            'hero.techLabel': 'Technologies I work with',

            // About Section
            'about.eyebrow': 'About',
            'about.title': 'The beginning of my developer journey',
            'about.subtitle': 'Where curiosity turned into code.',
            'about.storyTitle1': 'Entering university',
            'about.storyText1': 'My journey began at Politeknik Negeri Malang, where I pursued a degree in Applied Informatics. Through university, I started exploring the world of technology, learning how software works, how applications are built, and how technology can solve real-world problems.',
            'about.storyTitle2': 'The spark',
            'about.storyText2': 'My academic focus revolves around web development, application development, and database management. However, my curiosity extends beyond building functional systems. I am equally interested in understanding how systems can be exploited, where vulnerabilities exist, and how digital environments can be made more secure.',
            'about.storyTitle3': 'My focus',
            'about.storyText3': 'I am currently developing my skills in web development while exploring the field of cybersecurity, particularly web security, vulnerability analysis, and penetration testing. My goal is to combine my understanding of how applications are built with the knowledge of how to protect them, creating systems that are not only functional but also secure and reliable.',
            'about.factEducation': 'Education',
            'about.factEducationVal': 'D-IV Applied Informatics<br>Politeknik Negeri Malang',
            'about.factLocation': 'Location',
            'about.factLocationVal': 'Malang, East Java<br>Indonesia',
            'about.factFocus': 'Focus',
            'about.factFocusVal': 'Web Development<br>Cyber Security',

            // Skills Section
            'skills.eyebrow': 'Skills',
            'skills.title': 'Learning to code',
            'skills.subtitle': 'Building my toolkit one project at a time.',
            'skills.technicalTitle': 'Technical skills',
            'skills.sectionNote': 'Technical proficiency levels are realistically assessed based on conceptual understanding and hands-on project implementation.',
            'skills.levelLabel': 'Level:',
            'skills.level.intermediate': 'Intermediate',
            'skills.level.beginner': 'Beginner',
            'skills.level.beginnerIntermediate': 'Beginner&ndash;Intermediate',
            'skills.webDesc': 'Possesses intermediate skills in web development, including building user interfaces, structuring pages, managing styling, and developing website functionality using learned technologies.',
            'skills.appDesc': 'Possesses foundational understanding in application development using Java, including learning program logic, code structure, and application feature implementation.',
            'skills.secDesc': 'Possesses foundational to early intermediate understanding of cybersecurity concepts and is actively deepening knowledge through structured learning and practice.',
            'skills.workingStyleTitle': 'Working style',
            'skills.soft.problemSolving': 'Problem Solving',
            'skills.soft.teamCollab': 'Team Collaboration',
            'skills.soft.fastLearner': 'Fast Learner',
            'skills.soft.creativeThinking': 'Creative Thinking',
            'skills.soft.timeManagement': 'Time Management',
            'skills.soft.documentation': 'Documentation',

            // Projects Section
            'projects.eyebrow': 'Projects',
            'projects.title': 'Projects &amp; experiments',
            'projects.subtitle': 'Building real things, one iteration at a time.',
            'projects.note': 'Project descriptions, completion statuses, and modal details are carried over from the previous portfolio. Repository, demo, screenshot, and in-progress percentage details still need confirmation. Completed projects are shown at 100%.',
            'projects.filterAria': 'Filter content by category',
            'projects.filterProjects': 'Projects',
            'projects.filterCertificates': 'Certificates',
            'projects.statusProjects': '{count} project{s} shown.',
            'projects.statusCertificates': '{count} certificate{s} available.',
            'projects.btnViewDetails': 'View Details',
            'projects.btnViewCertificate': 'View Certificate',
            'projects.noteNoLinks': 'Repository and demo links are not available yet.',
            'projects.noteCertPdf': 'Official certificate document in PDF format (2 pages).',
            'projects.noteCertProgress': 'Course in progress (completion certificate not yet available).',
            'projects.noteCertPlanned': 'Planned course (completion certificate not yet available).',
            'projects.badgeCompleted': 'Completed',
            'projects.badgeInProgress': 'In Progress',
            'projects.badgeNotStarted': 'Not Started',
            'projects.badgeVerifiedDoc': 'Verified Document',
            'projects.progressLabel': 'Progress: {val}%',
            'projects.progressPages': '2 Pages PDF',
            'projects.progressNotConfirmed': 'Progress: not confirmed',

            // Empty State
            'empty.title': 'No Certificates Available Yet',
            'empty.text': 'Currently, there are no verified official certificates or certification documents to display. Certificate documents will appear here once the verification process is complete.',

            // Experience Section
            'experience.eyebrow': 'Experience',
            'experience.title': 'Experience &amp; Involvement',
            'experience.subtitle': 'Academic journey, organizational experience, projects, and tech skill development.',
            'experience.sectionTitle': 'Experience',

            // 1. BEM Polinema
            'experience.bemPeriod': '2025 &ndash; Present',
            'experience.bemType': 'Student Organization',
            'experience.bemRole': 'Deputy Minister of Communication and Information &mdash; BEM Polinema',
            'experience.bemOrg': 'Student Executive Board, Politeknik Negeri Malang',
            'experience.bemLi1': 'Contributed to social media management and organizational information publication.',
            'experience.bemLi2': 'Coordinated with the team on work program execution and digital content creation.',
            'experience.bemLi3': 'Developed communication, collaboration, and time management skills.',

            // 2. Proyek Akademik
            'experience.academicPeriod': '2024 &ndash; Present',
            'experience.academicType': 'Academic Projects',
            'experience.academicRole': 'Academic Project Development',
            'experience.academicOrg': 'Applied Informatics Coursework Projects',
            'experience.academicLi1': 'Developed a cafe recommendation website and a personal financial tracking application.',
            'experience.academicLi2': 'Studied web development, databases, and machine learning through coursework projects.',
            'experience.academicLi3': 'Honed programming, problem-solving, and application testing capabilities.',

            // 3. Jaringan Komputer & Cyber Security
            'experience.netsecPeriod': '2021 &ndash; Present',
            'experience.netsecType': 'Networking &amp; Cyber Security',
            'experience.netsecRole': 'Computer Networking &amp; Cyber Security Learning',
            'experience.netsecOrg': 'SMKN 1 Bangil &amp; Independent Study',
            'experience.netsecLi1': 'Learned computer networking basics and cyber security fundamentals starting from SMKN 1 Bangil.',
            'experience.netsecLi2': 'Completed preparation for the provincial-level Student Competency Competition (LKS) in Cyber Security.',
            'experience.netsecLi3': 'Continuing self-directed learning to deepen understanding of systems and network security.',

            // Milestones
            'experience.milestonesTitle': 'Learning Milestones',
            'experience.ms1Year': '2021–2024',
            'experience.ms1Title': 'Computer Networking Foundations',
            'experience.ms1Text': 'Studied network topologies, IP addressing, networking hardware, and structured cabling. Earned BNSP Junior Technical Support certification in 2025.',
            'experience.ms2Year': '2024',
            'experience.ms2Title': 'Commencing Informatics Studies',
            'experience.ms2Text': 'Began diving into programming, application development, and software engineering principles.',
            'experience.ms3Year': '2024–2025',
            'experience.ms3Title': 'Application Project Development',
            'experience.ms3Text': 'Built academic projects including a cafe recommendation website and finance tracker while mastering database systems.',
            'experience.ms4Year': '2025 – Present',
            'experience.ms4Title': 'Tech Exploration &amp; Cyber Security',
            'experience.ms4Text': 'Expanding expertise through web development, machine learning, and self-directed cyber security exploration aligned with personal interests.',

            // Social Section
            'social.eyebrow': 'Connect',
            'social.title': 'Follow &amp; Connect',
            'social.subtitle': 'Find my profiles and activity across social media and developer platforms.',
            'social.instagramLabel': 'Instagram Profile',
            'social.linkedinLabel': 'LinkedIn Profile',

            // Footer
            'footer.builtWith': '&copy; {year} M. Yahya Irvansyah. Built with HTML, CSS, and JavaScript.',

            // Modal Dialog
            'modal.closeAria': 'Close project details',
            'modal.noteConfirmation': 'Some details in this dialog are carried over from the previous portfolio and still need confirmation.',
            'modal.headingAboutProject': 'About This Project',
            'modal.headingAboutCert': 'About This Certificate / Course',
            'modal.headingFeatures': 'Key Features',
            'modal.headingCompetencies': 'List of Unit Competencies',
            'modal.headingTech': 'Technologies Used',
            'modal.headingCompField': 'Competency Fields',
            'modal.headingDetails': 'Project Details',
            'modal.headingChallenges': 'Challenges',
            'modal.headingLearnings': 'Key Learnings',
            'modal.headingLimitations': 'Current Limitations',
            'modal.headingLinks': 'Links &amp; Documents',
            'modal.labelDuration': 'Duration:',
            'modal.labelRole': 'Role:',
            'modal.noDocCert': 'Certificate completion document is not available yet (course is in progress / planned).',
            'modal.noDocProject': 'Repository and demo links are not available yet.',
            'modal.linkPdf': 'View Certificate (PDF - 2 Pages)',
            'modal.linkRepo': 'Repository',
            'modal.linkDemo': 'Live demo'
        }
    };

    /**
     * Read saved language preference or default to 'id'.
     */
    function getSavedLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && SUPPORTED_LANGS.includes(saved)) {
                return saved;
            }
        } catch {
            // localStorage not accessible
        }
        return DEFAULT_LANG;
    }

    /**
     * Persist language preference.
     */
    function saveLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            // localStorage not accessible
        }
    }

    let currentLanguage = getSavedLanguage();

    /**
     * Translate a key with optional dynamic tokens.
     */
    function t(key, tokens = {}) {
        const langTable = translations[currentLanguage] || translations[DEFAULT_LANG];
        let str = langTable[key] || translations[DEFAULT_LANG][key] || key;

        Object.keys(tokens).forEach(k => {
            str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), tokens[k]);
        });

        return str;
    }

    /**
     * Apply active language to all DOM elements with data-i18n attributes.
     */
    function applyLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) {
            lang = DEFAULT_LANG;
        }

        currentLanguage = lang;
        saveLanguage(lang);

        // Update html lang attribute
        document.documentElement.lang = lang;

        // Update page title & meta description
        document.title = t('page.title');
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', t('page.metaDescription'));
        }

        // Update elements with data-i18n (innerHTML or textContent)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = t(key);
            if (translation) {
                // If the translation contains HTML entities or tags, set innerHTML; otherwise textContent
                if (/[<>&]/.test(translation)) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Update elements with data-i18n-attr (e.g. data-i18n-attr="aria-label:nav.logoAria")
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const rules = el.getAttribute('data-i18n-attr').split(',');
            rules.forEach(rule => {
                const [attr, key] = rule.split(':').map(s => s.trim());
                if (attr && key) {
                    const translation = t(key);
                    if (translation) {
                        el.setAttribute(attr, translation);
                    }
                }
            });
        });

        // Update switcher buttons UI
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = btnLang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });

        // Inform other modules (Projects, Modal)
        if (window.Portfolio.projects?.updateLanguage) {
            window.Portfolio.projects.updateLanguage(lang);
        }

        if (window.Portfolio.modal?.updateLanguage) {
            window.Portfolio.modal.updateLanguage(lang);
        }

        // Custom event for any interested component
        if (typeof CustomEvent !== 'undefined' && typeof window.dispatchEvent === 'function') {
            window.dispatchEvent(new CustomEvent('portfolio:languageChanged', { detail: { language: lang } }));
        }
    }

    /**
     * Set language programmatically.
     */
    function setLanguage(lang) {
        if (lang === currentLanguage) return;
        applyLanguage(lang);
    }

    /**
     * Initialize language switcher event handlers.
     */
    function init() {
        const switcherButtons = document.querySelectorAll('.lang-btn');
        switcherButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang) {
                    setLanguage(targetLang);
                }
            });
        });

        // Apply saved or default language initially
        applyLanguage(currentLanguage);
    }

    window.Portfolio.i18n = {
        init,
        t,
        setLanguage,
        getLanguage: () => currentLanguage,
        applyLanguage
    };
})();
