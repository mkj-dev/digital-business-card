import emailBtn from "./EmailBtn.js";

const e = React.createElement;

const aboutSection = e('div', { key: "person-about", className: 'person-about' },
    [
        e('h3', { key: 'person-about-title', className: 'person-about-title' }, 'About'),
        e('p', { key: 'person-about-para', className: 'person-about-para' }, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ratione totam nostrum debitis? Incidunt magnam vitae ad velit recusandae ab voluptas deserunt minima quae numquam. Vero, eveniet. Magni error, non facere tempora at sint consectetur.')
    ]
);


const interestsSection = e('div', { key: "person-interests", className: 'person-interests' }, 
    [
        e('h3', { key: 'person-interests-title', className: 'person-about-title' }, 'Interests'),
        e('p', { key: 'person-interests-para', className: 'person-interests-para' }, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente a magnam ipsum nihil dolor molestiae!')
    ]
);

const personInfo = e('div', { key: 'person-info', className: 'person-info' },
    [
        e('h2', { key: 'person-name', className: 'person-name' }, 'John Doe'),
        e('h3', { key: 'person-occupation', className: 'person-occupation' }, 'Frontend Developer'),
        e('a', { key: 'person-website', className: 'person-website', href: '#' }, 'johndoe.website'),
        emailBtn,
        aboutSection,
        interestsSection
    ]
);



export default function Info() {
    return personInfo;
};