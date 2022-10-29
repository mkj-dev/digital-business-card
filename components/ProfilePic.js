const e = React.createElement;

export default function ProfilePic() {
    return e('img', { key: "profile-pic", className: 'profile-picture', src: './images/person.jpg' }, null);
}