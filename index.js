
const pick =  new Array();

pick[0] = "  Have a Cupcakes"
pick[1] =  " Share the joy of a Oreo
pick[2] = "Have a Kitkat Choclate"
pick[3] = "Go have a Cheez-It "
pick[4] = " Go have some Chips"
pick[5] = "Go Have some Choclate"
pick[6] = " Haters are gonna hate, people say haters gonna hate, makers gonna make. I say Let them Hate, Absorb the ate and use it to build or start your day - Arav Narula"
pick[7] = " You can do this, You have the power. By the power vested in me by the state of the world, you can do it"
pick[8] = "“The purpose of our lives is to be happy.” "
pick[9] = " Wake up, Drink Coffee, then have heck of a good day, repat - Arav Narula"
pick[10] = " Self Plug - If you enjoy today's content, then Consider buying me a coffee at buymeacoff.ee/arav"
pick[11] = " Covid-19 can't stop us, we can stop covid - Arav Narula"
pick[12] = "  Make it, Build it, but have fun or you're getting bored - Arav Narula"
pick[13] = " The world might criztize you, but every words helps you - Arav Narula"
pick[14] = " Somebody once told me, that 2020 is the year you do something good - Arav Narula"
pick[15]  =" It's a plane, Its A Bird, Wait No It's Superman, Oh Wait it's You :)"
const choose = Math.floor((Math.random() * 15))
const show = pick[choose] 

console.log(pick[choose])
document.getElementById('snack').innerHTML=show;



