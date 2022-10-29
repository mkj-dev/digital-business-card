import ProfilePic from "./components/ProfilePic.js";
import PersonInfo from "./components/PersonInfo.js";
import Socials from "./components/Socials.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    React.createElement('div', {className: 'container'},
        [
            ProfilePic(),
            PersonInfo(),
            Socials()
        ]
    )
);