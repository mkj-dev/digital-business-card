const e = React.createElement;

export default function Socials() {
    return e('footer', { key: 'footer', className: 'footer' }, 
        [
            e('a', { key: 'twitter-website', className: 'twitter-website', href: '#' }, 
                e('img', { key: "twitter-icon", className: 'icon', src: './images/twitter.png' }, null)
            ),
            e('a', { key: 'fb-website', className: 'twitter-website', href: '#' }, 
                e('img', { key: "fb-icon", className: 'icon', src: './images/facebook.png' }, null)
            ),
            e('a', { key: 'ig-website', className: 'ig-website', href: '#' }, 
                e('img', { key: "ig-icon", className: 'icon', src: './images/instagram.png' }, null)
            ),
            e('a', { key: 'linkedin-website', className: 'linkedin-website', href: '#' }, 
                e('img', { key: "linkedin-icon", className: 'icon', src: './images/linkedin.png' }, null)
            ),
            e('a', { key: 'github-website', className: 'github-website', href: '#' },
                e('img', { key: "github-icon", className: 'icon', src: './images/github.png' }, null)
            )
        ]
    );
}