//does dark mode work

const {darkMode} = require('./DarkMode')
test('if works', ()=>{
    expect(darkMode).not.toBeTruthy();
})