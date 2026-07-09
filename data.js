const data = {
    stats: [
        { count: "50+", label: "Doctors" },
        { count: "8+", label: "Specialities" },
        { count: "10+", label: "Clinics" }
    ],
    missionVision: {
        mission: "To amplify the healthcare workforce by helping doctors and clinics manage patients, appointments, and daily workflows — so they can focus on what matters most: patient care.",
        vision: "To empower medical professionals with smart, intuitive tools that make healthcare management more organized, connected, and human."
    },
    services: [
        {
            title: "Patient Management",
            description: "Access complete patient records, medical history, prescriptions, billing, and intake forms in one organized dashboard.",
            icon: "images/stethoscope.svg",
            styleClass: "border-purple f-purple"
        },
        {
            title: "Appointment Scheduling",
            description: "Schedule, track, and manage patient appointments from a smart calendar view — with public self-booking for patients.",
            icon: "images/calendar.svg",
            styleClass: "border-pink f-pink"
        },
        {
            title: "Billing & Invoicing",
            description: "Auto-generate invoices, track payment status, and monitor revenue KPIs with detailed financial performance charts.",
            icon: "images/chart-line.svg",
            styleClass: "border-green f-green"
        },
        {
            title: "Dental Chart",
            description: "Interactive per-tooth treatment tracking with a full dental chart, treatment catalog, and clinical notes per patient.",
            faIcon: "fas fa-tooth",
            styleClass: "border-blue f-blue"
        },
        {
            title: "Forms & Workflows",
            description: "Build custom intake forms, medical questionnaires, and patient reports. Patients fill them out digitally before their visit.",
            icon: "images/brain.svg",
            styleClass: "border-purple f-purple"
        },
        {
            title: "WhatsApp Integration",
            description: "Send automated appointment reminders, booking confirmations, and clinic notifications to patients via WhatsApp.",
            faIcon: "fab fa-whatsapp",
            styleClass: "border-green f-green"
        },
        {
            title: "Staff & Access Control",
            description: "Manage doctors, secretaries, and admins with fine-grained role-based permissions per clinic and per module.",
            faIcon: "fas fa-user-shield",
            styleClass: "border-blue f-blue"
        },
        {
            title: "To-Do List",
            description: "Organize daily tasks, follow-ups, and reminders for the entire clinic team. Stay on top of your practice.",
            icon: "images/clock.svg",
            styleClass: "border-yellow f-yellow"
        }
    ],
    features: [
        {
            number: "01",
            title: "Practice Dashboard & Financial Insights",
            description: "View appointment activity, revenue KPIs, payment charts, expense trends, and outstanding invoices — all from one smart dashboard."
        },
        {
            number: "02",
            title: "Multi-Device Access & PWA Support",
            description: "Manage your practice anytime, anywhere — desktop, tablet, or mobile. Install PatientHub as a Progressive Web App for offline access."
        },
        {
            number: "03",
            title: "Google Calendar Sync",
            description: "Sync your appointments with Google Calendar automatically so your schedule stays up-to-date across all your devices and apps."
        },
        {
            number: "04",
            title: "Digital Prescriptions",
            description: "Issue and track digital prescriptions per patient with full dosage details, medication history, and treatment notes."
        },
        {
            number: "05",
            title: "Expense & Financial Tracking",
            description: "Log and categorize clinic expenses by type. Monitor cash flow alongside income for complete financial clarity."
        },
        {
            number: "06",
            title: "Multi-Clinic Management",
            description: "Run multiple clinic locations from a single account. Assign staff, configure schedules, and track billing per clinic."
        },
        {
            number: "07",
            title: "Public Booking & Clinic Directory",
            description: "Each doctor gets a shareable booking link. Your branded clinic directory lets patients browse doctors and book online 24/7."
        },
        {
            number: "08",
            title: "Data Security & Privacy",
            description: "Patient data is securely stored with encrypted connections, JWT authentication, role-based access controls, and audit logging."
        }
    ],
    testimonials: [
        {
            id: 1,
            name: "John Smith",
            role: "Dermatologist",
            text: "PatientHub transformed how I manage my clinic. The interface is intuitive and saving me hours every week.",
            img: "https://i.pravatar.cc/50?img=1"
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            role: "Cardiologist",
            text: "The best platform for patient management I've used. Secure, fast, and reliable.",
            img: "https://i.pravatar.cc/50?img=2"
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Pediatrician",
            text: "My staff loves the appointment scheduling feature. It has reduced no-shows significantly.",
            img: "https://i.pravatar.cc/50?img=6"
        },
        {
            id: 4,
            name: "Bakir Naim",
            role: "Speech Therapist",
            text: "The billing and dental chart features are a game changer. Everything in one platform — I don't need any other tool.",
            img: "https://i.pravatar.cc/80?img=3"
        },
        {
            id: 5,
            name: "Emily Davis",
            role: "General Practitioner",
            text: "The public booking page alone saves us hours of phone calls every week. Patients love it.",
            img: "https://i.pravatar.cc/50?img=7"
        },
        {
            id: 6,
            name: "David Wilson",
            role: "Orthopedist",
            text: "Highly recommended! The support team is also very responsive and helpful.",
            img: "https://i.pravatar.cc/50?img=4"
        },
        {
            id: 7,
            name: "Jessica Taylor",
            role: "Neurologist",
            text: "WhatsApp reminders have improved patient compliance dramatically. A must-have tool for any clinic.",
            img: "https://i.pravatar.cc/50?img=5"
        }
    ],
    pricing: [
        {
            name: "Basic Plan",
            tagline: "For solo practitioners",
            desc: "One staff user · Unlimited patients · Core clinic tools",
            features: [
                "Appointment management",
                "Patient management",
                "Prescriptions",
                "To-do list",
                "Dashboard",
                "Multi-device access & PWA",
                "Data security"
            ]
        },
        {
            name: "Professional",
            tagline: "For growing practices",
            desc: "Two staff users · Billing · Forms & Workflows · WhatsApp",
            isPopular: true,
            features: [
                "Everything in Basic",
                "Billing & invoicing",
                "Forms & workflows",
                "WhatsApp notifications",
                "Google Calendar sync",
                "Expense tracking",
                "Public booking page"
            ]
        },
        {
            name: "Clinical",
            tagline: "For clinics & teams",
            desc: "Five staff users · Multi-clinic · Dental chart · Full access",
            features: [
                "Everything in Professional",
                "Multi-clinic management",
                "Dental chart",
                "Clinic directory page",
                "Role-based permissions",
                "Activity tracking & audit logs",
                "Priority support"
            ]
        }
    ],
    faq: [
        {
            question: "What is PatientHub used for?",
            answer: "PatientHub is a clinic management platform that helps doctors and clinics manage patients, appointments, billing, prescriptions, dental charts, staff, and more — all in one system."
        },
        {
            question: "Who is PatientHub designed for?",
            answer: "It's built for doctors, clinic administrators, and medical secretaries of all practice sizes — from solo practitioners to multi-clinic organizations."
        },
        {
            question: "Is my data secure?",
            answer: "Yes. All data is securely stored with encrypted connections (HTTPS), JWT-based authentication, role-based access controls, and audit logging to track all system activity."
        },
        {
            question: "Can I manage all patient records in one place?",
            answer: "Yes. All patient information, history, prescriptions, billing records, dental charts, and form submissions are centralized and easy to access."
        },
        {
            question: "How does appointment scheduling work?",
            answer: "Doctors and staff can create, track, and manage appointments from a full calendar view. Patients can also self-book through the doctor's public booking link."
        },
        {
            question: "Can patients book appointments online?",
            answer: "Yes. Each doctor gets a shareable booking link. Patients can select a clinic, pick an available time slot, and confirm their booking online — no phone call needed."
        },
        {
            question: "Does PatientHub support billing and invoicing?",
            answer: "Yes. Billing is fully available. You can generate invoices, track payment status, monitor revenue KPIs, and view financial performance charts per clinic."
        },
        {
            question: "Is there a dental chart feature?",
            answer: "Yes. PatientHub includes an interactive dental chart where you can record per-tooth treatments, clinical notes, and track treatment history for each patient."
        },
        {
            question: "Does PatientHub send WhatsApp reminders?",
            answer: "Yes. PatientHub integrates with WhatsApp to send automated appointment reminders, booking confirmations, and clinic notifications directly to patients."
        },
        {
            question: "Can I sync appointments with Google Calendar?",
            answer: "Yes. PatientHub supports Google Calendar sync so your appointments are automatically reflected in your Google Calendar."
        },
        {
            question: "Can patients submit forms before their visit?",
            answer: "Yes. Doctors can build custom intake forms and questionnaires. Patients fill them out digitally before their appointment to save time during the visit."
        },
        {
            question: "Can I manage multiple clinic locations?",
            answer: "Yes. The Clinical plan supports multi-clinic management. You can assign staff, configure schedules, and track billing separately per clinic."
        },
        {
            question: "How does the to-do list help daily practice management?",
            answer: "The built-in to-do list helps doctors and staff track daily tasks, follow-ups, and reminders. You can assign tasks, set priorities, and mark them complete."
        },
        {
            question: "Can I access the platform from any device?",
            answer: "Yes. PatientHub works on desktop, tablet, and mobile. It can also be installed as a Progressive Web App (PWA) for fast, offline-capable access."
        },
        {
            question: "What roles and permissions does the system support?",
            answer: "PatientHub supports four roles: System Admin, Clinic Administrator, Doctor, and Secretary. Each role has configurable module and action permissions."
        }
    ]
};
