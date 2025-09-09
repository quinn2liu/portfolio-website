export type ProjectItem = {
    name: string;
    date: string;
    subtitle: string;
    description: string;
    technologies: string[];
    image: string;
    link?: string;
}

export const projectItems: ProjectItem[] = [
    {
        name: "Cloud Search Engine",
        date: "Winter 2024",
        subtitle: "Distributed web crawler and search engine.",
        description: "Implemented a from-scratch search engine using Java, deployed onto the cloud using AWS EC2 instances. The search engine, specifically the crawler and indexer, is built using a custom implementations of a distributed key-value store and Apache Spark-like analytics engine, as well as a custom-built webserver, resulting in a total of 50,000+ processed webpages. Search queries were optimized using parallelized lookups, index optimizations, and bigram term support to support the Term Frequency/Inverse Document Frequency and Pagerank metrics used in the project's ranking mechanisms. The frontend used HTML, CSS, and Bootstrap for page design and Javascript + AJAX for scripting.",
        technologies: ["Java", "AWS"],
        image: "/images/megacrawl.png",
        link: ""
    },
    {
        name: "Automated Cocktail Maker",
        date: "Spring 2024",
        subtitle: "ATMega32PB microcontroller-based machine.",
        description: "Engineered and programmed automated cocktail machine to take the hassle out of creating cocktails. Users can select pre-determined drinks using integrated joystick and button. Fluids dispension performed via brushless DC pumps. Includes built-in drink mixer that can mix at variable speeds due to PWM control over DC motor. Ensured proper power management with through with MOSFETs, diodes, and resistors. User interface programmed using self-implemented LCD graphics library and displayed on LCD screen. Project was programmed and wired using ATmega328PB microcontroller. Developed as ESE 3500 final project.",
        technologies: ["C", "ATmega328PB"],
        image: "/images/cocktail.jpeg",
        link: "https://ese3500.github.io/final-project-prime-hydration/"
    },
    {
        name: "UFO Sightings Data Analysis",
        date: "Winter 2023",
        subtitle: "Machine learning modeling on UFO sightings.",
        description: "In this project, we wanted to perform a deep dive on the https://www.kaggle.com/datasets/jonwright13/ufo-sightings-around-the-world-better dataset, which details UFO over '80,000+ documented close encounters from the past 70 years'. This data included information regarding sighting location, time, duration, shape, coordinates, and a description. Outside of performing standard exploratory data anaylsis and visualization, we created a classification models to classify UFO shape and regression models to predict the number of sightings for a given date. After leveraging data science and machine learning techniques, we were able to learn about factors and trends that underline UFO sightings.",
        technologies: ["Python", "Pandas", "Scikit-Learn"],
        image: "/images/ufo.png",
        link: "https://github.com/quinn2liu/UFOSightingsAnalysis"
    },
    {
        name: "PennOS",
        date: "Winter 2023",
        subtitle: "UNIX-like operating system implemented in C.",
        description: "For this project, we successfully implemented a single-core, UNIX-like, user-level operating system complete with a FAT-based filesystem, a kernel, and a task scheduler. The OS preserves abstractions bewteen the kernel space, system, and user space. We have implemented a number of builtin shell functions that interact with our filesystem, such as cat, echo, touch, along with support pipelines and redirections. System tested rigourously to ensure proper CPU utilization. Verified no memory leaks using Valgrind memory profiler. Created as CIS 3800 final project.",
        technologies: ["C", "POSIX Library"],
        image: "/images/linux.png"
    }
];