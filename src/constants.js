const icons = {
    twitter: 'm481 117c-13 18-28 34-46 47 0 3 0 7 0 12 0 25-3 50-11 74-7 25-18 49-33 71-14 23-32 43-52 61-21 17-45 31-74 41-29 11-60 16-92 16-52 0-99-14-142-42 7 1 14 2 22 2 43 0 81-14 115-40-20 0-38-6-54-18-16-12-27-27-33-46 7 1 13 2 18 2 8 0 16-1 24-4-21-4-39-15-53-31-14-17-21-37-21-59l0-1c13 7 27 11 42 11-13-8-23-19-30-32-8-14-11-29-11-44 0-17 4-33 12-47 23 28 51 51 84 68 33 17 69 27 107 29-2-8-3-15-3-22 0-25 9-47 27-65 18-18 40-27 66-27 26 0 49 10 67 29 21-4 40-11 59-22-7 22-21 39-41 51 18-2 35-7 53-14z',
    github: 'm475 256c0 48-14 91-41 129-28 38-64 65-109 79-5 1-8 1-11-2-2-2-3-5-3-8l0-61c0-18-5-32-15-40 11-1 20-3 29-5 9-3 18-6 27-11 9-6 17-12 23-19 6-8 11-18 15-30 4-13 6-27 6-43 0-23-8-43-23-59 7-18 7-37-2-59-5-1-13 0-23 4-10 3-19 8-26 12l-11 7c-18-5-36-7-55-7-19 0-37 2-55 7-3-2-7-5-12-8-5-3-13-6-24-11-11-4-19-5-24-4-9 22-9 41-2 59-15 16-23 36-23 59 0 16 2 30 6 42 4 13 9 23 15 30 6 8 14 14 23 20 9 5 18 8 27 11 8 2 18 4 29 5-8 7-12 17-14 29-4 2-8 4-13 5-4 1-10 1-16 1-6 0-13-2-19-6-6-4-11-10-16-18-3-6-8-11-14-15-5-4-10-6-14-7l-5-1c-4 0-7 1-9 2-1 1-2 2-1 3 0 1 1 3 2 4 2 1 3 2 4 3l2 2c4 2 8 5 13 11 4 5 7 10 9 14l2 7c3 7 7 13 13 17 6 5 12 8 19 9 7 1 14 2 20 2 6 0 12 0 16-1l6-1c0 7 0 16 1 25 0 10 0 15 0 16 0 3-2 6-4 8-2 3-6 3-11 2-45-14-81-41-109-79-27-38-41-81-41-129 0-40 9-77 29-110 20-34 46-60 80-80 33-20 70-29 110-29 40 0 77 9 110 29 34 20 60 46 80 80 20 33 29 70 29 110z',
    linkedin: 'm104 404l66 0 0-198-66 0z m71-259c-1-10-4-19-11-25-6-6-15-10-26-10-11 0-20 4-27 10-7 6-11 15-11 25 0 9 4 17 10 24 7 7 16 10 27 10l0 0c11 0 20-3 27-10 7-7 11-15 11-24z m167 259l66 0 0-114c0-29-7-51-21-66-14-15-32-23-55-23-26 0-46 11-60 34l1 0 0-29-66 0c0 12 0 78 0 198l66 0 0-111c0-7 0-12 2-16 2-7 7-12 12-17 6-5 13-7 22-7 22 0 33 15 33 45z m133-285l0 274c0 23-8 42-24 58-16 16-35 24-58 24l-274 0c-23 0-42-8-58-24-16-16-24-35-24-58l0-274c0-23 8-42 24-58 16-16 35-24 58-24l274 0c23 0 42 8 58 24 16 16 24 35 24 58z',
    envelope: 'm512 203l0 227c0 12-4 23-13 32-9 9-20 13-33 13l-420 0c-13 0-24-4-33-13-9-9-13-20-13-32l0-227c8 9 18 17 29 25 69 47 116 79 142 98 11 8 20 15 26 19 7 4 16 9 27 14 12 4 22 7 32 7l0 0c10 0 20-3 32-7 11-5 20-10 27-14 6-4 15-11 26-19 33-23 80-56 142-98 11-8 21-16 29-25z m0-84c0 15-5 29-14 43-9 14-21 25-35 35-71 50-116 81-134 93-1 1-6 4-12 9-6 4-11 8-15 11-4 2-9 5-15 9-6 3-11 6-16 8-6 1-10 2-15 2l0 0c-5 0-9-1-15-2-5-2-10-5-16-8-6-4-11-7-15-9-4-3-9-7-15-11-6-5-11-8-12-9-18-12-43-30-75-52-33-23-52-36-59-41-12-8-23-19-33-33-11-14-16-27-16-39 0-15 4-27 12-37 8-10 19-15 34-15l420 0c13 0 23 5 32 14 9 9 14 19 14 32z',
};

export const socialIcons = [
    {
        link: 'https://github.com/patitonar',
        icon: icons.github
    },
    {
        link: 'https://twitter.com/patitonar',
        icon: icons.twitter
    },
    {
        link: 'https://www.linkedin.com/in/gerardonardelli',
        icon: icons.linkedin
    },
    {
        link: 'mailto:patitonardelli@gmail.com',
        icon: icons.envelope
    }
];

export const aboutMe = [
    "I'm a Software Engineer from Argentina, also a frustrated gamer and a football fan. I love researching cutting edge technologies and playing around with them.",
    "I have experience working as a full stack developer, although frontend development is what I really like. Some of the technologies I worked with are PHP, Java and nodejs in the backend. On the frontend I built some apps using backbone, angular and react. Also, Ionic for mobile development and React-VR just for VR fun.",
    "I'm really good at learning new techs and I always try to build great applications writing elegant code, making focus on good UI/UX, performance, maintainability and working with tools that help me be productive. Also I like contributing to open source projects whenever I have the opportunity."
];