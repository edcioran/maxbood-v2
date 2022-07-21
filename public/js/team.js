const personDetails = document.querySelector(`#person-details`)
const overlay = document.querySelector(`#person-details-overlay`)

const profilePicture = personDetails.firstElementChild.firstElementChild.firstElementChild
const personName = profilePicture.nextElementSibling
const biography = personDetails.lastElementChild.lastElementChild

function showPersonDetails(e) {
    personDetails.classList.remove('max-h-0', 'overflow-hidden')
    personDetails.classList.add('max-h-[80vh]', 'overflow-y-scroll')
    overlay.classList.replace('hidden', 'block')

    // Fetch details
    let key = e.target.id
    profilePicture.src = team[key].img
    personName.innerHTML = team[key].name
    biography.innerHTML = team[key].bio
}
function closePersonDetails() {
    personDetails.classList.remove('max-h-[80vh]', 'overflow-y-scroll')
    personDetails.classList.add('max-h-0', 'overflow-hidden')
    overlay.classList.replace('block', 'hidden')
}

document.addEventListener('click', function(e){
    if(e.target.classList.contains('person-card-overlay')){
        showPersonDetails(e)
    }
})

overlay.addEventListener('click', function(){
    closePersonDetails()
})

class teamMember {
    constructor(img, name, bio){
        this.img=img;
        this.name=name;
        this.bio=bio;
    }
}

let arijanti = new teamMember(
    '../src/img/team/arijanti.jpg',
    'Arijanti Erfin',
    `
        <li>Arijanti Erfin (Yanti) has extensive experiences in the area of business management, insurance, marketing, business development, mergers and acquisitions as well as human resources development.</li>
        <li>Yanti has a long and outstanding experiences at the director and senior management levels in various large corporate groups (Taspen, ASEI, Waskita Karya, BRI and ANTV) during the period 1993-2022.</li>
        <li>Yanti is also experienced in the divestment process of several mega infrastructure toll roads projects in Indonesia.</li>
        <li>Yanti earned a bachelor's degree from the University of Indonesia (1990) and continued her education at the PPM Business Masters (2022). Yanti is also a Certified Wealth Manager holder.</li>
    `
)
let taufik = new teamMember(
    '../src/img/team/taufik.jpg',
    'Taufik Hendra',
    `
        <li>Taufik Hendra (Taufik) has experiences as commissioner, director and senior management in various large group companies (Radiant, Hutama Karya, Ooredoo, Indosat, Waskita Karya) in the area of finance, business development, HR, risk management and general (2004-2022) in multiple industries (oil & gas, hospital, construction, infrastructure, property, telecommunications, digital, payment systems, investment).</li>
        <li>Taufik had also been in the world of policy and performance auditing of public entities during his time at BPKP (1996-2004).</li>
        <li>Taufik holds an MBA from Gadjah Mada University (2010), Master in Laws from Leeds Beckett University (2022) and Doctor of Economics from Trisakti University (2018). Taufik also continued his academic level in the Doctoral program in Business Administration from Prague University of Economics and Business, Czech Republic (2022).</li>
        <li>Taufik holds  at least 15 local and international professional certification in the area of finance, accounting, taxation and law.</li>
        <li>Taufik has successfully experienced managing one of the largest and most complex restructuring processes in an infrastructure BUMN in his role as Chief Restructuring Officer (CRO).</li>
    `
)
let hadjar = new teamMember(
    '../src/img/team/hadjar.jpg',
    'Hadjar Seti Adji',
    `
        <li>Hadjar Seti Adji (Hadjar) has extensive experiences in human resources management, business transformation, system integration, business turnaround and company performance improvement.</li>
        <li>Hadjar holds a Master in Construction Management from the University of New South Wales Australia (2002).</li>
        <li>Hadjar has a long extensive career at the level of commissioners, directors and senior management in state-owned construction companies (Waskita Karya and Housing Development). Hadjar was also successful in his assignment as Chief Transformation Officer (CTO) in the transformation program held by the Ministry of State Owned Enterprises.</li>
    `
)
let yudi = new teamMember(
    '../src/img/team/yudi.jpg',
    'Yudi Ali',
    `
        <li>Yudi Ali Marsyahid (Yudi) has long experience in the managerial level in the area of government policy analysis, business development, financial modeling and business turnaround.</li>
        <li>Having extensive managerial experience in several large companies (Hutama Karya, Kereta Api Indonesia, Astra) during the period 2012-2022, Yudi combines his experiences in the private sector with experiences in the public sector at the Ministry of Finance Republic of Indoensia and several public policy institutions related to economic and political analysis (2000-2012).</li>
        <li>Yudi studied at Trisakti University's Master of Islamic Economics and Finance (2018). Yudi is also the holder of the title of Broker-Dealer Representative (WPPE) and Deputy Investment Manager (WMI) as a professional requirement in the Indoensian capital market.
    `
)
let manar = new teamMember(
    '../src/img/team/manar.jpg',
    'Manar Barmawi',
    `
        <li>Muhammad Manar Barmawi (Manar) has extensive experiences in financial restructuring, financial modeling, business turnaround and corporate rating performance management. Manar is also familiar with fiscal management and the process of procurement of government goods and services.</li>
        <li>With a master's background in accounting from the University of Indonesia (2010), Manar has an ouststanding career (2011-2022) at the managerial level in several large companies (Wijya Karya, Housing Development, Pefindo, Medco) and government (BPKP, 1995-2011).</li>
        <li>Manar also holds the Chartered Accountant (CA) and Australian Certified Management Accountant (CMA) professional certifications.</li>
    `
)
let azwir = new teamMember(
    '../src/img/team/azwir.jpg',
    'Azwir Zamrinurdin',
    `
        <li>Azwir Zamrinurdin (Azwir) has long been involved in policy formulation, politics and state financial management at the Ministry of Finance of the Republic of Indonesia (1996-2010).</li>
        <li>Azwir also has in-depth experiences in the areas of company performance analysis, business transformation, financial and operational audits, human resource management and financial modeling in various senior management positions in several consultants and State Owned Enterprises (RNI, Perum Damri) during the 2010-2022 period.</li>
        <li>Azwir completed his Masters in Accounting from the University of Indonesia (2012) and has several professional certification degrees, including Certified Public Accountant and Customs & Excise Expert.</li>
    `
)

let team = {
    arijanti,
    taufik,
    hadjar,
    yudi,
    manar,
    azwir
}