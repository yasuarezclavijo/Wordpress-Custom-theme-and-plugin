import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/editor';

registerBlockType('blocks-cv/about-us', {
    title: 'About Us CV',
    category: 'common',
    icon: 'smiley',
    description: 'Bloque para mostrar primera parte del CV',
    attributes: {
        nameCv: {
            type: 'string',
            source: 'html',
            selector: '.nameCv'
        },
        addressCv: {
            type: 'string',
            source: 'html',
            selector: '.addressCv'
        },
        phoneCv: {
            type: 'string',
            source: 'html',
            selector: '.phoneCv'
        },
        emailCv: {
            type: 'string',
            source: 'html',
            selector: '.emailCv'
        },
        abstractCv: {
            type: 'string',
            source: 'html',
            selector: '.abstractCv'
        },
        linkedinCv: {
            type: 'string',
            source: 'html',
            selector: '.linkedinCv'
        },
        twitterCv: {
            type: 'string',
            source: 'html',
            selector: '.twitterCv'
        },
        githubCv: {
            type: 'string',
            source: 'html',
            selector: '.githubCv'
        },
        facebookCv: {
            type: 'string',
            source: 'html',
            selector: '.facebookCv'
        },
    },
    edit: (props) => {
        const { attributes: {nameCv, addressCv, phoneCv, emailCv, abstractCv, linkedinCv}, setAttributes} = props;
        const onchangeName = (newName) => {
            setAttributes({nameCv: newName})
        };
        const onchangeAddress = (newAddress) => {
            setAttributes({addressCv: newAddress})
        };
        const onchangePhone = (newPhone) => {
            setAttributes({phoneCv: newPhone})
        };
        const onchangeEmail = (newEmail) => {
            setAttributes({emailCv: newEmail})
        };
        const onchangeAbstract = (newAbstract) => {
            setAttributes({abstractCv: newAbstract})
        };
        const onchangeLinkedIn = (newLinkedIn) => {
            setAttributes({linkedinCv: newLinkedIn})
        };
        return (
            <div>
                <RichText
                    placeholder="Indique el nombre del cv"
                    onChange={onchangeName}
                    value={nameCv}
                />
                <RichText
                    placeholder="Indique la dirección del cv"
                    onChange={onchangeAddress}
                    value={addressCv}
                />
                <RichText
                    placeholder="Indique la telefono del cv"
                    onChange={onchangePhone}
                    value={phoneCv}
                />
                <RichText
                    placeholder="Indique la email del cv"
                    onChange={onchangeEmail}
                    value={emailCv}
                />
                <RichText
                    placeholder="Indique la resumen del cv"
                    onChange={onchangeAbstract}
                    value={abstractCv}
                />
                <RichText
                    placeholder="LinkedIn"
                    onChange={onchangeLinkedIn}
                    value={linkedinCv}
                />
            </div>
        )
    },
    save: (props) => {
        const { attributes: {nameCv, addressCv,phoneCv, emailCv, abstractCv, linkedinCv}, setAttributes} = props;
        return (
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        {nameCv}
                    </h1>
                    <div class="subheading mb-5">
                        {addressCv}, {phoneCv} ·
                        <a href="mailto:{emailCv}">{emailCv}</a>
                    </div>
                    <p class="lead mb-5">{abstractCv}</p>
                    <div class="social-icons">
                        <a class="social-icon" href={linkedinCv} target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="#!"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
        );
    }
});