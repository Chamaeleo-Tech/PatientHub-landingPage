const data = {
    stats: [
        { count: "10+", label: "Doctors" },
        { count: "10+", label: "Specialities" },
        { count: "10+", label: "Clinics" }
    ],
    missionVision: {
        mission: "To amplify healthcare workforce by helping doctors manage patients, appointments and tasks virtually so they can focus on what matters most: patient care.",
        vision: "To empower medical professionals with smart, intuitive tools that make healthcare management more organized, connected, and human."
    },
    features: [
        {
            title: "Streamlined Patient Management",
            description: "Access patient records, history, and appointments in one organized dashboard.",
            icon: "images/stethoscope.svg",
            styleClass: "border-purple f-purple"
        },
        {
            title: "Smart Appointment Scheduling",
            description: "Schedule, track, and manage patient appointments with ease and clarity.",
            icon: "images/calendar.svg",
            styleClass: "border-pink f-pink"
        },
        {
            title: "To do List",
            description: "Organize daily tasks, follow-ups, and reminders to stay on top of your practice.",
            icon: "images/clock.svg",
            styleClass: "border-yellow f-yellow"
        },
        {
            title: "Organized Dashboard",
            description: "Get a clear overview of your day, patients, and tasks-all from one smart dashboard.",
            icon: "images/chart-line.svg",
            styleClass: "border-green f-green"
        },
        {
            title: "Billing & Inventory",
            description: "Handle invoices and payments effortlessly, with inventory management features launching",
            icon: "images/brain.svg",
            styleClass: "border-blue f-blue coming-soon-card",
            isComingSoon: true
        }
    ],
    services: [
        {
            number: "01",
            title: "Practice Dashboard & Insights",
            description: "View data about patient activity and key performance data at a glance."
        },
        {
            number: "02",
            title: "Multi-Device Access",
            description: "Manage your practice anytime, anywhere—desktop, tablet, or mobile."
        },
        {
            number: "03",
            title: "Data Security & Privacy",
            description: "Protect sensitive patient information with industry-standard security and compliance."
        },
        {
            number: "04",
            title: "Automated Notifications & Reminders",
            description: "Send appointment reminders, follow-ups, and important alerts automatically."
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
            role: "Speech Doctor",
            text: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Corem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "https://i.pravatar.cc/80?img=3"
        },
        {
            id: 5,
            name: "Emily Davis",
            role: "General Practitioner",
            text: "A game changer for small clinics. The billing and inventory tools are coming soon and I can't wait.",
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
            text: "Automated reminders have improved patient compliance. A must-have tool.",
            img: "https://i.pravatar.cc/50?img=5"
        }
    ],
    pricing: [
        {
            name: "Basic Plan",
            price: "$25",
            currency: "USD",
            desc: "Only one doctor, No secretary, Unlimited patients, No billing,No inventory",
            features: [
                "To do management",
                "Appointments management",
                "Patient management",
                "Dashboard",
                "Multi device access"
            ]
        },
        {
            name: "Professional",
            price: "$50",
            currency: "USD",
            desc: "Only one doctor, one secretary, Unlimited patients, billing, inventory",
            isPopular: true,
            features: [
                "To do management",
                "Appointments management",
                "Patient management",
                "Dashboard",
                "Multi device access",
                "Data security",
                "Billing",
                "Inventory"
            ]
        },
        {
            name: "clinical",
            price: "$25",
            currency: "USD",
            desc: "A clinic manager, two doctors, two secretaries, Unlimited patients, billing, inventory for every extra doctor $15",
            features: [
                "To do management",
                "Appointments management",
                "Patient management",
                "Dashboard",
                "Multi device access",
                "Data security",
                "Billing",
                "Inventory"
            ]
        }
    ],
    faq: [
        "What is this platform used for?",
        "Who is this system designed for?",
        "Is my data secure?",
        "Can I manage all patient records in one place?",
        "How does appointment scheduling work?",
        "Can patients submit forms before their visit?",
        "How does the to-do list help daily practice management?",
        "Can I set reminders or follow-up tasks?",
        "Does the platform support billing and invoicing?",
        "Can I access the platform from any device?",
        "Is training or onboarding provided?",
        "Can this system be customized for my clinic?"
    ]
};
