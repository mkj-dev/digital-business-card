const e = React.createElement;

const emailBtn = e('button', { key: 'email-button', className: 'email-button', type: 'button'}, 
    [
        e('img', {key: 'email-icon', className: 'email-icon', src: './images/Mail.png' }, null),
        e('a', { key: 'send-email', className: 'send-email', href: 'mailto: abc@example.com' }, 'Email'),
    ]
);

export default emailBtn;