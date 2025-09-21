let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=0.9
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <4){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
    window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hi")||message.includes("hey")){
        speak("Hello sir, what can i help you?")
    }

    else if(message.includes("how are you")){
        speak("i am fine, thank you sir, what can i help you")
    }
    else if(message.includes("what is your name")){
        speak("my name is jarviss i am virtual assistant, created by hamad khan")
    }
    else if(message.includes("who create you")){
        speak("my name is jarviss i am virtual assistant, created by hamad khan")
    }
    else if(message.includes("who are you")||message.includes("hi")||message.includes("how r u")){
        speak("i am virtual assistant, created by hamad khan")
    }
    else if(message.includes("thank you")){
        speak("you welcome, and most welcome hamad khan")
    }
    else if(message.includes("thank you jarvis")){
        speak("you welcome, and most welcome hamad khan")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("play music")||message.includes("play song")){
        speak("playing music")
        window.open("https://www.youtube.com/watch?v=XLqmL9cPN1E")
    }
    else if(message.includes("play pakistani music")||message.includes("play pakistani song")){
        speak("playing pakistani music")
        window.open("https://www.youtube.com/watch?v=hXklj79UyEY")
    }
    else if(message.includes("play english music")||message.includes("play english song")){
        speak("playing english music")
        window.open("https://www.youtube.com/watch?v=kffacxfA7G4")
    }
    else if(message.includes("play indian music")||message.includes("play indian song")){
        speak("playing indian music")
        window.open("https://www.youtube.com/watch?v=1pc60L6mBt0")
    }
    else if(message.includes("open google chrome")){
        speak("opening google chrome")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open canva" ,"_blank")){
        speak("opening canva")
        window.open("https://www.canva.com/")
    }
    else if(message.includes("open fiverr" ,"_blank")){
        speak("opening fiverr")
        window.open("https://www.fiverr.com/")
    }
    else if(message.includes("open fiver" ,"_blank")){
        speak("opening fiverr")
        window.open("https://www.fiverr.com/")
    }
    else if(message.includes("open fiber")){
        speak("opening fiverr")
        window.open("https://www.fiverr.com/" ,"_blank")
    }
    else if(message.includes("open upwork")){
        speak("opening upwork")
        window.open("https://www.upwork.com/" ,"_blank")
    }
    else if(message.includes("open up work")){
        speak("opening upwork")
        window.open("https://www.upwork.com/" ,"_blank")
    }
    else if(message.includes("open my portfolio")){
        speak("opening portfolio website")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open my website")){
        speak("opening portfolio website")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open my personal website")){
        speak("opening portfolio website")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open gmail")){
        speak("opening gmail")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open email")){
        speak("opening email")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open e-mail")){
        speak("opening email")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open yahoo")){
        speak("opening yahoo")
        window.open("https://mail.yahoo.com/","_blank")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.linkedin.com/","_blank")
    }
    else if(message.includes("open github")){
        speak("opening github")
        window.open("https://github.com/","_blank")
    }
    else if(message.includes("open infinityfree")){
        speak("opening infinityfree hosting server")
        window.open("https://www.infinityfree.com/","_blank")
    }
    else if(message.includes("open infinity free")){
        speak("opening infinityfree hosting server")
        window.open("https://www.infinityfree.com/","_blank")
    }
    else if(message.includes("cv generate")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("cv generator")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("generate the cv")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("create the cv")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open cv")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("cv open")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("resume generate")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("resume generator")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("game play")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("games play")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("play the game")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open game")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open games")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("daily news")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("daily newspaper")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("today newspaper")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("today news")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open today news")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open today newspaper")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open express news")){
        speak("opening express news")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open daily jang news")){
        speak("opening daily jang news")
        window.open("https://e.jang.com.pk/","_blank")
    }
    else if(message.includes("open daily aaj news")){
        speak("opening daily aaj news")
        window.open("https://epaper.dailyaaj.com.pk/","_blank")
    }
    else if(message.includes("open geo news")){
        speak("opening geo news")
        window.open("https://www.geonewsurdu.tv/","_blank")
    }
    else if(message.includes("open ary news")){
        speak("opening ary news")
        window.open("https://arynews.tv/","_blank")
    }
    else if(message.includes("tell me about of pakistan")){
        speak("Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre.")
        window.open("https://www.google.com/search?q=tell%20me%20about%20of%20pakistan","_blank")
    }
    else if(message.includes("tell me about of university of swabi")){
        speak("University of Swabi was established in 2012 with the mission to advance knowledge and learning through quality research and education for the whole nation. Currently, the university comprises of two campuses, old campus and main campus having a combined area of 188 acres nears M1 Motorway.")
        window.open("https://uoswabi.edu.pk/","_blank")
    }
    else if(message.includes("tell me about of university of sawari")){
        speak("University of Swabi was established in 2012 with the mission to advance knowledge and learning through quality research and education for the whole nation. Currently, the university comprises of two campuses, old campus and main campus having a combined area of 188 acres nears M1 Motorway.")
        window.open("https://uoswabi.edu.pk/","_blank")
    }
    else if(message.includes("tell me about of university of sawabi")){
        speak("University of Swabi was established in 2012 with the mission to advance knowledge and learning through quality research and education for the whole nation. Currently, the university comprises of two campuses, old campus and main campus having a combined area of 188 acres nears M1 Motorway.")
        window.open("https://uoswabi.edu.pk/","_blank")
    }
    else if(message.includes("tell me about of hammad khan")){
        speak("hamad khan a graduate in BSCS Bachelor Of Science In Computer Science, So hamad gained all the basic knowledge from my study, that’s why i knew many works related to web programming before entering this business. i'm a dynamic and driven individual with a passion for technology, innovation, and lifelong learning. my journey is marked by a strong academic foundation, a diverse skill set, and a deep interest in leveraging technology to solve real-world problems. with a blend of technical expertise and creative thinking, i is carving out a unique path for himself in the ever-evolving world of technology.")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("tell me about of lahore degree college")){
        speak("Lahore Degree College a government Educational Institution under the KP Higher Education Department Established in 1986. In 2012, the college introduced 4 years BS programs in Physics. Later, Chemistry, Botany, Economics and Political Science. The master's degree courses are shelved due to introduction of BS programs.")
        window.open("https://www.google.com/search?q=lahore+degree+college+swabi+college+about&sca_esv=9221048d9dc68eb4&sxsrf=AE3TifP62TFqVvSi44-nXHDs_y5RUCUd9w%3A1757751325121&ei=HSjFaNOWB7Tqi-gPoPuD-A8&ved=0ahUKEwiTmdn6pdWPAxU09QIHHaD9AP8Q4dUDCBA&uact=5&oq=lahore+degree+college+swabi+college+about&gs_lp=Egxnd3Mtd2l6LXNlcnAiKWxhaG9yZSBkZWdyZWUgY29sbGVnZSBzd2FiaSBjb2xsZWdlIGFib3V0MggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FMgUQABjvBTIIEAAYgAQYogRIgmhQvURYgmRwAngBkAEAmAGxAqABlxyqAQYyLTEzLjG4AQPIAQD4AQGYAgegAugKwgIKEAAYsAMY1gQYR8ICBBAjGCeYAwCIBgGQBgKSBwUyLjAuNaAH5C6yBwMyLTW4B9EKwgcFMi0yLjXIB0A&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("open sublime")){
        speak("opening sublime")
        window.open("sublime://")
    }
    else if (message.includes("open recycle bin")) {
        speak("opening recycle bin");
        window.open("recycle://");
    }
    else if (message.includes("open my computer")) {
        speak("opening My Computer");
        window.open("mycomputer://");
    }
    else if (message.includes("open microsoft google")) {
        speak("opening Microsoft Google");
        window.open("msedge://");
    }
    else if (message.includes("open idm")) {
        speak("opening IDM");
        window.open("idm://");
    }
    else if (message.includes("open internet download manager")) {
        speak("opening Internet Download Manager");
        window.open("idm://");
    }
    else if (message.includes("open photoshop")) {
        speak("opening Adobe Photoshop");
        window.open("photoshop://");
    }
    else if (message.includes("open vsdc")) {
        speak("opening VSDC Free Video Editor");
        window.open("vsdc://");
    }
    else if (message.includes("open vsdc video editor")) {
        speak("opening VSDC Free Video Editor");
        window.open("vsdc://");
    }
    else if (message.includes("open adobe premiere pro")) {
        speak("opening Adobe Premiere Pro 2019");
        window.open("premiere://");
    }
    else if (message.includes("open camtasia")) {
        speak("opening Camtasia 2020");
        window.open("camtasia://");
    }
    else if (message.includes("open vs code")) {
        speak("opening Visual Studio Code");
        window.open("https://vscode.dev/","_blank")
    }
    else if (message.includes("open visual studio code")) {
        speak("opening Visual Studio Code");
        window.open("https://vscode.dev/","_blank")
    }
    else if (message.includes("open word")) {
        speak("opening Microsoft Word");
        window.open("wordapp://");
    }
    else if (message.includes("open microsoft word")) {
        speak("opening Microsoft Word");
        window.open("wordapp://");
    }
    else if (message.includes("open powerpoint")) {
        speak("opening Microsoft PowerPoint");
        window.open("powerpoint://");
    }
    else if (message.includes("open microsoft powerpoint")) {
        speak("opening Microsoft PowerPoint");
        window.open("powerpoint://");
    }
    else if (message.includes("open excel")) {
        speak("opening Microsoft Excel");
        window.open("excelapp://");
    }
    else if (message.includes("open microsoft excel")) {
        speak("opening Microsoft Excel");
        window.open("excelapp://");
    }
    else if (message.includes("open access")) {
        speak("opening Microsoft Access");
        window.open("accessapp://");
    }
    else if (message.includes("open microsoft access")) {
        speak("opening Microsoft Access");
        window.open("accessapp://");
    }
    else if (message.includes("open acrobat")) {
        speak("opening Adobe Acrobat");
        window.open("acrobatapp://");
    }
    else if (message.includes("open adobe acrobat")) {
        speak("opening Adobe Acrobat");
        window.open("acrobatapp://");
    }
    else if (message.includes("open git bash")) {
        speak("opening Git Bash");
        window.open("gitbash://");
    }
    else if (message.includes("open get bash")) {
        speak("opening Git Bash");
        window.open("gitbash://");
    }
    else if (message.includes("open get bass")) {
        speak("opening Git Bash");
        window.open("gitbash://");
    }
    else if (message.includes("open github desktop")) {
        speak("opening GitHub Desktop");
        window.open("githubdesktop://");
    }
    else if (message.includes("open github")) {
        speak("opening GitHub");
        window.open("githubdesktop://");
    }
    else if (message.includes("open filezilla")) {
        speak("opening FileZilla");
        window.open("filezillaapp://");
    }
    else if (message.includes("open minitool")) {
        speak("opening MiniTool Partition Wizard");
        window.open("minitool://");
    }
    else if (message.includes("open mini tool")) {
        speak("opening MiniTool Partition Wizard");
        window.open("minitool://");
    }
    else if (message.includes("open miniTool partition wizard")) {
        speak("opening MiniTool Partition Wizard");
        window.open("minitool://");
    }
    else if (message.includes("open bandicam")) {
        speak("opening Bandicam");
        window.open("bandicam://");
    }
    else if (message.includes("open bandi cam")) {
        speak("opening Bandicam");
        window.open("bandicam://");
    }
    else if (message.includes("open bande game")) {
        speak("opening Bandicam");
        window.open("bandicam://");
    }
    else if (message.includes("open server control panel")) {
        speak("opening XAMPP Control Panel");
        window.open("xampp://");
    }
    else if (message.includes("open control panel")) {
        speak("opening XAMPP Control Panel");
        window.open("xampp://");
    }
    else if (message.includes("open camera")) {
        speak("opening Camera");
        window.open("camera://");
    }
    else if (message.includes("shutdown")) {
        speak("Shutting down the computer");
        window.open("shutdown://");
    }
    else if (message.includes("shut down")) {
        speak("Shutting down the computer");
        window.open("shutdown://");
    }
    else if (message.includes("system shut down")) {
        speak("Shutting down the computer");
        window.open("shutdown://");
    }
    else if (message.includes("system lock")) {
        speak("locking your computer");
        window.open("lock://");
    }
    else if (message.includes("system block")) {
        speak("locking your computer");
        window.open("lock://");
    }
    else if (message.includes("open dictation")) {
        speak("opening Windows dictation");
        window.open("dictationwin+h://");
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("jarvis","") || message.replace("jarvis","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`,"_blank")
    }
}