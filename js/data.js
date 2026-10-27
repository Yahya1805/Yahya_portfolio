/**
 * Portfolio project and certificate detail data with bilingual support (ID & EN).
 *
 * This file stores detailed information used by the detail modal and card rendering.
 */
window.portfolioData = {
    /**
     * Helper to resolve localized fields.
     */
    getLocalized: function (field, lang) {
        if (!field) return '';
        if (typeof field === 'object' && !Array.isArray(field)) {
            return field[lang] || field.id || field.en || '';
        }
        return field;
    },

    projects: {
        'software-engineering-laboratory': {
            title: {
                id: 'Software Engineering Laboratory',
                en: 'Software Engineering Laboratory'
            },
            type: {
                id: 'Rekayasa Perangkat Lunak',
                en: 'Software Engineering'
            },
            typeClass: 'academic',
            category: 'projects',
            needsConfirmation: true,
            description: {
                id: 'Laboratorium Software Engineer merupakan laboratorium yang berfokus pada bidang rekayasa perangkat lunak (Software Engineering). Laboratorium ini berkaitan dengan proses pengembangan perangkat lunak secara terstruktur, mulai dari analisis kebutuhan, perancangan sistem, implementasi, hingga pengujian dan pemeliharaan perangkat lunak.\n\nBidang ini menekankan penerapan prinsip, metode, dan praktik rekayasa perangkat lunak untuk menghasilkan aplikasi yang terstruktur, dapat dipelihara, dan sesuai dengan kebutuhan pengguna. Laboratorium ini menjadi lingkungan untuk mempelajari serta mendalami konsep dan praktik pengembangan perangkat lunak.',
                en: 'The Software Engineering Laboratory is a facility focused on the field of software engineering. It encompasses structured software development processes, from requirements analysis, system architecture design, and implementation to software testing and maintenance.\n\nThis discipline emphasizes applying software engineering principles, methodologies, and practices to deliver structured, maintainable software tailored to user needs. The laboratory provides an active environment for studying and deepening concepts and practices in software development.'
            },
            shortDescription: {
                id: 'Laboratorium yang berfokus pada bidang rekayasa perangkat lunak dan proses pengembangan aplikasi yang terstruktur, handal, dan dapat dipelihara.',
                en: 'A laboratory focused on software engineering and structured, reliable, maintainable application development processes.'
            },
            features: {
                id: [
                    'Proses pengembangan perangkat lunak terstruktur (analisis, perancangan, implementasi, pengujian, pemeliharaan)',
                    'Penerapan prinsip, metode, dan praktik rekayasa perangkat lunak',
                    'Lingkungan pembelajaran dan pendalaman konsep pengembangan aplikasi yang dapat dipelihara'
                ],
                en: [
                    'Structured software development lifecycle (analysis, design, implementation, testing, maintenance)',
                    'Application of software engineering principles, methodologies, and engineering practices',
                    'Learning environment dedicated to developing maintainable and robust applications'
                ]
            },
            technologies: ['Software Engineering'],
            duration: null,
            role: null,
            challenges: null,
            learnings: {
                id: 'Penerapan prinsip, metode, dan praktik rekayasa perangkat lunak untuk menghasilkan aplikasi yang terstruktur, dapat dipelihara, dan sesuai dengan kebutuhan pengguna.',
                en: 'Application of software engineering principles, methods, and practices to deliver structured, maintainable, and user-centric software.'
            },
            links: {
                repository: null,
                demo: null
            }
        },

        'cafe-recommendation-website': {
            title: {
                id: 'Cafe Recommendation Website',
                en: 'Cafe Recommendation Website'
            },
            type: {
                id: 'Pengembangan Web',
                en: 'Web Development'
            },
            typeClass: 'personal',
            category: 'projects',
            needsConfirmation: true,
            description: {
                id: 'Cafe Recommendation Website adalah website yang dirancang untuk membantu pengguna menemukan referensi kafe sebagai tempat nongkrong, menikmati kopi, atau menghabiskan waktu bersama teman. Proyek ini berfokus pada penyajian informasi kafe melalui antarmuka yang informatif, menarik, dan mudah digunakan, sehingga pengguna dapat menjelajahi pilihan kafe yang tersedia dengan lebih praktis. Proyek ini merupakan salah satu bentuk penerapan pengembangan web dalam membangun pengalaman pengguna yang nyaman dan terstruktur.',
                en: 'Cafe Recommendation Website is a web platform designed to help users discover coffee shops and social spots for hanging out, having coffee, or spending time with friends. It focuses on presenting cafe details through an informative, engaging, and user-friendly interface for convenient exploration. This project demonstrates web development applied to crafting comfortable and well-structured user experiences.'
            },
            shortDescription: {
                id: 'Website rekomendasi kafe untuk membantu pengguna menemukan referensi tempat nongkrong dan menikmati kopi melalui antarmuka yang informatif.',
                en: 'A cafe recommendation website designed to help users find coffee spots and hangout places through an informative interface.'
            },
            features: {
                id: [
                    'Penyajian informasi kafe melalui antarmuka yang informatif dan menarik',
                    'Kemudahan eksplorasi pilihan kafe untuk nongkrong atau menikmati kopi',
                    'Pengalaman pengguna yang nyaman, praktis, dan terstruktur'
                ],
                en: [
                    'Presentation of cafe information via an informative and visually appealing interface',
                    'Effortless exploration of cafe spots for working or socializing',
                    'Comfortable, practical, and structured user experience'
                ]
            },
            technologies: ['HTML', 'CSS', 'JavaScript'],
            duration: null,
            role: null,
            challenges: null,
            learnings: {
                id: 'Penerapan pengembangan web dalam membangun pengalaman pengguna yang nyaman dan terstruktur.',
                en: 'Application of web development principles to build intuitive and structured user experiences.'
            },
            links: {
                repository: null,
                demo: null
            }
        },

        'app-pengelolaan-keuangan': {
            title: {
                id: 'App Pengelolaan Keuangan',
                en: 'App Pengelolaan Keuangan'
            },
            type: {
                id: 'Pengembangan Aplikasi',
                en: 'Application Development'
            },
            typeClass: 'personal',
            category: 'projects',
            needsConfirmation: true,
            description: {
                id: 'App Pengelolaan Keuangan merupakan aplikasi yang dikembangkan menggunakan Java untuk membantu pengguna mengelola keuangan secara lebih terstruktur. Aplikasi ini dirancang dengan mengutamakan fungsi, kemudahan penggunaan, dan pengelolaan data keuangan yang praktis. Proyek ini menjadi penerapan pemrograman Java dalam membangun aplikasi fungsional yang berorientasi pada kebutuhan pengguna serta melatih kemampuan dalam merancang alur program, mengelola data, dan mengembangkan logika aplikasi.',
                en: 'App Pengelolaan Keuangan is an application developed using Java to help users manage their personal finances in a structured manner. It is engineered with a focus on functionality, ease of use, and practical financial record-keeping. The project serves as an implementation of Java programming in developing user-oriented functional software while practicing program flow design, data handling, and application logic.'
            },
            shortDescription: {
                id: 'Aplikasi berbasis Java untuk membantu pengguna mengelola data keuangan dan memantau statistik pengeluaran secara lebih terstruktur.',
                en: 'A Java-based application to help users manage financial data and monitor expense statistics in a structured manner.'
            },
            features: {
                id: [
                    'Dashboard visualisasi dan statistik pengeluaran per kategori',
                    'Pemantauan tren pengeluaran bulanan dan kategori pengeluaran terboros',
                    'Pencatatan dan pengelolaan tabel riwayat transaksi secara terstruktur'
                ],
                en: [
                    'Expense visualization dashboard and statistical breakdown per category',
                    'Monthly spending trends monitoring and top expense categories',
                    'Structured recording and table management of financial transactions'
                ]
            },
            technologies: ['Java'],
            duration: null,
            role: null,
            challenges: null,
            learnings: {
                id: 'Penerapan pemrograman Java dalam membangun aplikasi fungsional yang berorientasi pada kebutuhan pengguna serta melatih pengelolaan data dan logika program.',
                en: 'Implementing Java programming to build user-centered software while strengthening data handling and programmatic logic.'
            },
            links: {
                repository: null,
                demo: null
            }
        },

        'estimasi-panen-tanaman-selada': {
            title: {
                id: 'Estimasi Panen Tanaman Selada',
                en: 'Estimasi Panen Tanaman Selada'
            },
            type: {
                id: 'Machine Learning',
                en: 'Machine Learning'
            },
            typeClass: 'personal',
            category: 'projects',
            status: {
                id: 'Sedang Berjalan',
                en: 'In Progress'
            },
            statusCode: 'in-progress',
            progress: 40,
            needsConfirmation: false,
            description: {
                id: 'Aplikasi berbasis Machine Learning untuk membantu melakukan estimasi panen tanaman selada berdasarkan data yang digunakan dalam proses prediksi. Proyek ini masih dalam tahap pengembangan dengan progres sekitar 40%.',
                en: 'A Machine Learning-based application to assist in estimating lettuce harvest yields based on predictive data inputs. The project is currently in development with approximately 40% progress.'
            },
            shortDescription: {
                id: 'Aplikasi berbasis Machine Learning untuk membantu melakukan estimasi panen tanaman selada berdasarkan data yang digunakan dalam proses prediksi.',
                en: 'A Machine Learning-based application to assist in estimating lettuce harvest yields based on data used in the prediction process.'
            },
            features: {
                id: [
                    'Estimasi dan prediksi hasil panen tanaman selada berbasis data',
                    'Implementasi model Machine Learning untuk perhitungan estimasi panen',
                    'Antarmuka aplikasi untuk memantau data dan parameter prediksi panen'
                ],
                en: [
                    'Data-driven lettuce harvest yield estimation and prediction',
                    'Implementation of Machine Learning model for yield estimation calculations',
                    'Application interface for monitoring data and harvest prediction parameters'
                ]
            },
            technologies: ['Machine Learning'],
            duration: null,
            role: null,
            challenges: null,
            learnings: {
                id: 'Penerapan konsep Machine Learning dan pengolahan data prediksi dalam membangun solusi estimasi panen tanaman selada.',
                en: 'Applying Machine Learning concepts and predictive data processing to build a lettuce harvest estimation solution.'
            },
            links: {
                repository: null,
                demo: null
            }
        }
    },

    certificates: {
        'lspsmk-jaringan-komputer': {
            title: {
                id: 'Kompetensi Bidang Jaringan Komputer',
                en: 'Computer Network Competency'
            },
            officialTitle: {
                id: 'Sertifikat Kompetensi: Jaringan Komputer',
                en: 'Certificate of Competency: Computer Networks'
            },
            type: {
                id: 'Sertifikat',
                en: 'Certificates'
            },
            typeClass: 'academic',
            category: 'certificates',
            field: {
                id: 'Jaringan Komputer dan Infrastruktur Jaringan',
                en: 'Computer Networks and Network Infrastructure'
            },
            needsConfirmation: false,
            description: {
                id: 'Sertifikat ini mencakup unit kompetensi di bidang jaringan komputer, mulai dari pengumpulan data perangkat jaringan, perancangan topologi dan pengalamatan jaringan, penentuan spesifikasi perangkat, hingga pemasangan kabel jaringan.\n\nMateri kompetensi tersebut berkaitan dengan pemahaman dasar perencanaan dan instalasi infrastruktur jaringan, termasuk identifikasi kebutuhan perangkat, penyusunan rancangan jaringan, serta penerapan konektivitas antarperangkat.',
                en: 'This certificate covers competency units in computer networking, ranging from network equipment data collection, topology and IP addressing design, device specification determination, to network cabling installation.\n\nThe competency scope encompasses foundational planning and installation of network infrastructure, including identifying equipment requirements, formulating network topologies, and implementing physical and logical device connectivity.'
            },
            shortDescription: {
                id: 'Sertifikat ini mencakup unit kompetensi di bidang jaringan komputer, mulai dari pengumpulan data perangkat jaringan, perancangan topologi dan pengalamatan jaringan, penentuan spesifikasi perangkat, hingga pemasangan kabel jaringan.',
                en: 'This certificate covers competency units in computer networking, ranging from network equipment data collection, topology and IP addressing design, device specification determination, to network cabling installation.'
            },
            competencies: [
                {
                    code: 'J.611000.002.01',
                    title: {
                        id: 'Mengumpulkan Data Peralatan Jaringan Dengan Teknologi yang Sesuai',
                        en: 'Collecting Network Equipment Data Using Appropriate Technologies'
                    },
                    description: {
                        id: 'Memahami proses pengumpulan informasi mengenai perangkat jaringan menggunakan teknologi dan metode yang sesuai dengan kebutuhan.',
                        en: 'Understanding information gathering on network devices using methods and technologies aligned with requirements.'
                    }
                },
                {
                    code: 'J.611000.003.02',
                    title: {
                        id: 'Merancang Topologi Jaringan',
                        en: 'Designing Network Topologies'
                    },
                    description: {
                        id: 'Memahami penyusunan rancangan topologi jaringan berdasarkan kebutuhan konektivitas dan hubungan antarperangkat.',
                        en: 'Designing network topology layouts based on connectivity needs and inter-device relationships.'
                    }
                },
                {
                    code: 'J.611000.004.01',
                    title: {
                        id: 'Merancang Pengalamatan Jaringan',
                        en: 'Designing Network Addressing'
                    },
                    description: {
                        id: 'Memahami perancangan skema pengalamatan jaringan untuk mendukung komunikasi antarperangkat secara terstruktur.',
                        en: 'Designing structured network addressing schemes (IP addressing/subnets) to facilitate device communication.'
                    }
                },
                {
                    code: 'J.611000.005.02',
                    title: {
                        id: 'Menentukan Spesifikasi Perangkat Jaringan',
                        en: 'Determining Network Device Specifications'
                    },
                    description: {
                        id: 'Memahami penentuan spesifikasi perangkat jaringan berdasarkan kebutuhan, fungsi, dan rancangan infrastruktur yang akan digunakan.',
                        en: 'Specifying network hardware specifications based on operational requirements, functionality, and planned infrastructure.'
                    }
                },
                {
                    code: 'J.611000.009.02',
                    title: {
                        id: 'Memasang Kabel Jaringan',
                        en: 'Installing Network Cabling'
                    },
                    description: {
                        id: 'Memahami pemasangan kabel jaringan sebagai bagian dari pembangunan koneksi fisik antarperangkat jaringan.',
                        en: 'Executing network cabling installations as an essential part of establishing physical network connectivity.'
                    }
                }
            ],
            technologies: ['Jaringan Komputer', 'Infrastruktur Jaringan'],
            document: {
                fileName: 'LSPSMK.pdf',
                pages: 2,
                path: 'assets/certificates/LSPSMK.pdf'
            },
            links: {
                certificate: 'assets/certificates/LSPSMK.pdf',
                repository: null,
                demo: null
            }
        },

        'itbox-cyber-security': {
            title: {
                id: 'Cyber Security Course — ITBOX',
                en: 'Cyber Security Course — ITBOX'
            },
            type: {
                id: 'Sertifikat',
                en: 'Certificates'
            },
            typeClass: 'academic',
            category: 'certificates',
            status: {
                id: 'Sedang Berjalan',
                en: 'In Progress'
            },
            statusCode: 'in-progress',
            progress: 20,
            needsConfirmation: false,
            description: {
                id: 'Course Cyber Security dari ITBOX yang sedang dipelajari untuk memperdalam pemahaman mengenai keamanan siber, konsep dasar perlindungan sistem, dan pengetahuan keamanan digital.',
                en: 'Cyber Security course from ITBOX currently being studied to deepen understanding of cybersecurity, fundamental system protection concepts, and digital security knowledge.'
            },
            shortDescription: {
                id: 'Course Cyber Security dari ITBOX yang sedang dipelajari untuk memperdalam pemahaman mengenai keamanan siber, konsep dasar perlindungan sistem, dan pengetahuan keamanan digital.',
                en: 'Cyber Security course from ITBOX currently being studied to deepen understanding of cybersecurity, fundamental system protection concepts, and digital security knowledge.'
            },
            features: {
                id: [
                    'Pemahaman konsep dasar keamanan siber (Cyber Security)',
                    'Prinsip perlindungan sistem dan konsep dasar keamanan digital',
                    'Materi pembelajaran terstruktur dari platform ITBOX'
                ],
                en: [
                    'Fundamental understanding of cybersecurity concepts',
                    'System protection principles and essential digital defense knowledge',
                    'Structured curriculum provided by the ITBOX platform'
                ]
            },
            technologies: ['Cyber Security', 'ITBOX'],
            duration: null,
            role: null,
            challenges: null,
            learnings: {
                id: 'Memperdalam pemahaman mengenai keamanan siber, konsep dasar perlindungan sistem, dan pengetahuan keamanan digital.',
                en: 'Deepening knowledge in cybersecurity foundations, system protection techniques, and digital threat awareness.'
            },
            links: {
                certificate: null,
                repository: null,
                demo: null
            }
        },

        'wpu-course': {
            title: {
                id: 'WPU Course',
                en: 'WPU Course'
            },
            type: {
                id: 'Sertifikat',
                en: 'Certificates'
            },
            typeClass: 'academic',
            category: 'certificates',
            status: {
                id: 'Belum Dimulai',
                en: 'Not Started'
            },
            statusCode: 'not-started',
            progress: 0,
            needsConfirmation: false,
            description: {
                id: 'Course WPU yang direncanakan sebagai materi pembelajaran untuk mengembangkan kemampuan pemrograman dan pengembangan aplikasi.',
                en: 'WPU course planned as learning material to develop programming and application development capabilities.'
            },
            shortDescription: {
                id: 'Course WPU yang direncanakan sebagai materi pembelajaran untuk mengembangkan kemampuan pemrograman dan pengembangan aplikasi.',
                en: 'WPU course planned as learning material to develop programming and application development capabilities.'
            },
            features: {
                id: [
                    'Rencana materi pembelajaran pengembangan web dan pemrograman',
                    'Pengembangan logika pemrograman dan implementasi aplikasi',
                    'Materi pembelajaran terstruktur dari WPU (Web Programming UNPAS)'
                ],
                en: [
                    'Planned curriculum for web development and software programming',
                    'Strengthening programming logic and application implementation',
                    'Structured learning path from WPU (Web Programming UNPAS)'
                ]
            },
            technologies: ['Web Development', 'Programming', 'WPU'],
            duration: null,
            role: null,
            challenges: null,
            learnings: {
                id: 'Rencana pengembangan kemampuan pemrograman dan pengembangan aplikasi melalui materi terstruktur.',
                en: 'Planned development of programming skills and application engineering through structured lessons.'
            },
            links: {
                certificate: null,
                repository: null,
                demo: null
            }
        }
    }
};
