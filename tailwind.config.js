module.exports = {
   content: ['./public/**/*.{html,js}'],
   theme: {
      extend: {
         fontFamily: {
            redHat: ['Red Hat Display'],
         },
         fontSize: {
            '4xl2': ['2.75rem', { lineHeight: '1' }],
         },
         letterSpacing: {
            custom: '4px',
         },
         borderRadius: {
            '4xl': '2rem',
         },
         colors: {
            headingColor: '#28283D',
            textColor: '#87879D',
            primaryGreen: '#4D96A9',
            primaryPurple: '#855FB1',
         },
         backgroundImage: {
            footerImgMob: "url('./assets/mobile/image-footer.jpg')",
            footerImgDesk: "url('./assets/desktop/image-footer.jpg')",
         },
         container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: '1.25rem',

            // default breakpoints but with 40px removed
            screens: {
               sm: '600px',
               md: '728px',
               lg: '800px',
               xl: '1100px',
               '2xl': '1496px',
            },
         },
      },
   },
   plugins: [],
};
