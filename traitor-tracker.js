const generalTraitors = [{"firstName":"Eric","lastName":"Schmitt","state":"Missouri","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"John","lastName":"Sauer","state":"Missouri","title":"Solicitor General","titleAbbreviation":"SG"},{"firstName":"Justin","lastName":"Smith","state":"Missouri","title":"Deputy Attorney General","titleAbbreviation":"DAG"},{"firstName":"Steve","lastName":"Marshall","state":"Alabama","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Leslie","lastName":"Rutledge","state":"Arkansas","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Ashley","lastName":"Moody","state":"Florida","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Curtis","lastName":"Hill","state":"Indiana","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Derek","lastName":"Schmidt","state":"Kansas","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Jeff","lastName":"Landry","state":"Louisiana","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Lynn","lastName":"Fitch","state":"Mississippi","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Tim","lastName":"Fox","state":"Montana","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Douglas","lastName":"Peterson","state":"Nebraska","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Wayne","lastName":"Stenehjem","state":"North Dakota","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Mike","lastName":"Hunter","state":"Oklahoma","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Alan","lastName":"Wilson","state":"South Carolina","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Jason","lastName":"Ravnsborg","state":"South Dakota","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Herbert","lastName":"Slatery","state":"Tennessee","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Sean","lastName":"Reyes","state":"Utah","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Patrick","lastName":"Morrisey","state":"West Virginia","title":"Attorney General","titleAbbreviation":"AG"}]
const houseRepresentativeTraitors = [{"firstName":"Mike","lastName":"Johnson","state":"Louisiana","congressionalDistrict":"4th"},{"firstName":"Gary","lastName":"Palmer","state":"Alabama","congressionalDistrict":"6th"},{"firstName":"Steve","lastName":"Scalise","state":"Louisiana","congressionalDistrict":"1st"},{"firstName":"Jim","lastName":"Jordan","state":"Ohio","congressionalDistrict":"4th"},{"firstName":"Ralph","lastName":"Abraham","state":"Louisiana","congressionalDistrict":"5th"},{"firstName":"Rick","lastName":"Allen","state":"Georgia","congressionalDistrict":"12th"},{"firstName":"James","lastName":"Baird","state":"Indiana","congressionalDistrict":"4th"},{"firstName":"Jim","lastName":"Banks","state":"Indiana","congressionalDistrict":"3rd"},{"firstName":"Jack","lastName":"Bergman","state":"Michigan","congressionalDistrict":"1st"},{"firstName":"Andy","lastName":"Biggs","state":"Arizona","congressionalDistrict":"5th"},{"firstName":"Gus","lastName":"Bilirakis","state":"Florida","congressionalDistrict":"12th"},{"firstName":"Dan","lastName":"Bishop","state":"North Carolina","congressionalDistrict":"9th"},{"firstName":"Mike","lastName":"Bost","state":"Illinois","congressionalDistrict":"12th"},{"firstName":"Kevin","lastName":"Brady","state":"Texas","congressionalDistrict":"8th"},{"firstName":"Mo","lastName":"Brooks","state":"Alabama","congressionalDistrict":"5th"},{"firstName":"Ken","lastName":"Buck","state":"Colorado","congressionalDistrict":"4th"},{"firstName":"Ted","lastName":"Budd","state":"North Carolina","congressionalDistrict":"13th"},{"firstName":"Tim","lastName":"Burchett","state":"Tennessee","congressionalDistrict":"2nd"},{"firstName":"Michael","lastName":"Burgess","state":"Texas","congressionalDistrict":"26th"},{"firstName":"Bradley","lastName":"Byrne","state":"Alabama","congressionalDistrict":"1st"},{"firstName":"Ken","lastName":"Calvert","state":"California","congressionalDistrict":"42nd"},{"firstName":"Earl","lastName":"Carter","state":"Georgia","congressionalDistrict":"1st"},{"firstName":"Buddy","lastName":"Carter","state":"Georgia","congressionalDistrict":"1st"},{"firstName":"Ben","lastName":"Cline","state":"Virginia","congressionalDistrict":"6th"},{"firstName":"Michael","lastName":"Cloud","state":"Texas","congressionalDistrict":"27th"},{"firstName":"Mike","lastName":"Conaway","state":"Texas","congressionalDistrict":"11th"},{"firstName":"Rick","lastName":"Crawford","state":"Arkansas","congressionalDistrict":"1st"},{"firstName":"Dan","lastName":"Crenshaw","state":"Texas","congressionalDistrict":"2nd"},{"firstName":"Mario","lastName":"Diaz-Balart","state":"Florida","congressionalDistrict":"25th"},{"firstName":"Jeff","lastName":"Duncan","state":"South Carolina","congressionalDistrict":"3rd"},{"firstName":"Neal","lastName":"Dunn","state":"Florida","congressionalDistrict":"2nd"},{"firstName":"Tom","lastName":"Emmer","state":"Minnesota","congressionalDistrict":"6th"},{"firstName":"Ron","lastName":"Estes","state":"Kansas","congressionalDistrict":"4th"},{"firstName":"Drew","lastName":"Ferguson","state":"Georgia","congressionalDistrict":"3rd"},{"firstName":"Chuck","lastName":"Fleischmann","state":"Tennessee","congressionalDistrict":"3rd"},{"firstName":"Bill","lastName":"Flores","state":"Texas","congressionalDistrict":"17th"},{"firstName":"Jeff","lastName":"Fortenberry","state":"Nebraska","congressionalDistrict":"1st"},{"firstName":"Virginia","lastName":"Foxx","state":"North Carolina","congressionalDistrict":"5th"},{"firstName":"Russ","lastName":"Fulcher","state":"Idaho","congressionalDistrict":"1st"},{"firstName":"Matt","lastName":"Gaetz","state":"Florida","congressionalDistrict":"1st"},{"firstName":"Greg","lastName":"Gianforte","state":"Montana","congressionalDistrict":"at-large"},{"firstName":"Bob","lastName":"Gibbs","state":"Ohio","congressionalDistrict":"7th"},{"firstName":"Louie","lastName":"Gohmert","state":"Texas","congressionalDistrict":"1st"},{"firstName":"Lance","lastName":"Gooden","state":"Texas","congressionalDistrict":"5th"},{"firstName":"Sam","lastName":"Graves","state":"Missouri","congressionalDistrict":"6th"},{"firstName":"Mark","lastName":"Green","state":"Tennessee","congressionalDistrict":"7th"},{"firstName":"Michael","lastName":"Guest","state":"Mississippi","congressionalDistrict":"3rd"},{"firstName":"Andy","lastName":"Harris","state":"Maryland","congressionalDistrict":"1st"},{"firstName":"Vicky","lastName":"Hartzler","state":"Missouri","congressionalDistrict":"4th"},{"firstName":"Kevin","lastName":"Hern","state":"Oklahoma","congressionalDistrict":"1st"},{"firstName":"Clay","lastName":"Higgins","state":"Louisiana","congressionalDistrict":"3rd"},{"firstName":"Trey","lastName":"Hollingsworth","state":"Indiana","congressionalDistrict":"9th"},{"firstName":"Richard","lastName":"Hudson","state":"North Carolina","congressionalDistrict":"8th"},{"firstName":"Bill","lastName":"Huizenga","state":"Michigan","congressionalDistrict":"2nd"},{"firstName":"Bill","lastName":"Johnson","state":"Ohio","congressionalDistrict":"6th"},{"firstName":"John","lastName":"Joyce","state":"Pennsylvania","congressionalDistrict":"13th"},{"firstName":"Fred","lastName":"Keller","state":"Pennsylvania","congressionalDistrict":"12th"},{"firstName":"Mike","lastName":"Kelly","state":"Pennsylvania","congressionalDistrict":"16th"},{"firstName":"Trent","lastName":"Kelly","state":"Mississippi","congressionalDistrict":"1st"},{"firstName":"Steve","lastName":"King","state":"Iowa","congressionalDistrict":"4th"},{"firstName":"David","lastName":"Kustoff","state":"Tennessee","congressionalDistrict":"8th"},{"firstName":"Darin","lastName":"LaHood","state":"Illinois","congressionalDistrict":"18th"},{"firstName":"Doug","lastName":"LaMalfa","state":"California","congressionalDistrict":"1st"},{"firstName":"Doug","lastName":"Lamborn","state":"Colorado","congressionalDistrict":"5th"},{"firstName":"Robert","lastName":"Latta","state":"Ohio","congressionalDistrict":"5th"},{"firstName":"Debbie","lastName":"Lesko","state":"Arizona","congressionalDistrict":"8th"},{"firstName":"Blaine","lastName":"Luetkemeyer","state":"Missouri","congressionalDistrict":"3rd"},{"firstName":"Kenny","lastName":"Marchant","state":"Texas","congressionalDistrict":"24th"},{"firstName":"Roger","lastName":"Marshall","state":"Kansas","congressionalDistrict":"1st"},{"firstName":"Tom","lastName":"McClintock","state":"California","congressionalDistrict":"4th"},{"firstName":"Cathy","lastName":"McMorris Rodgers","state":"Washington","congressionalDistrict":"5th"},{"firstName":"Dan","lastName":"Meuser","state":"Pennsylvania","congressionalDistrict":"9th"},{"firstName":"Carol","lastName":"Miller","state":"West Virginia","congressionalDistrict":"3rd"},{"firstName":"John","lastName":"Moolenaar","state":"Michigan","congressionalDistrict":"4th"},{"firstName":"Alex","lastName":"Mooney","state":"West Virginia","congressionalDistrict":"2nd"},{"firstName":"Markwayne","lastName":"Mullin","state":"Oklahoma","congressionalDistrict":"2nd"},{"firstName":"Gregory","lastName":"Murphy","state":"North Carolina","congressionalDistrict":"3rd"},{"firstName":"Dan","lastName":"Newhouse","state":"Washington","congressionalDistrict":"4th"},{"firstName":"Ralph","lastName":"Norman","state":"South Carolina","congressionalDistrict":"5th"},{"firstName":"Scott","lastName":"Perry","state":"Pennsylvania","congressionalDistrict":"10th"},{"firstName":"Guy","lastName":"Reschenthaler","state":"Pennsylvania","congressionalDistrict":"14th"},{"firstName":"Tom","lastName":"Rice","state":"South Carolina","congressionalDistrict":"7th"},{"firstName":"John","lastName":"Rose","state":"Tennessee","congressionalDistrict":"6th"},{"firstName":"David","lastName":"Rouzer","state":"North Carolina","congressionalDistrict":"7th"},{"firstName":"John","lastName":"Rutherford","state":"Florida","congressionalDistrict":"4th"},{"firstName":"Austin","lastName":"Scott","state":"Georgia","congressionalDistrict":"8th"},{"firstName":"Mike","lastName":"Simpson","state":"Idaho","congressionalDistrict":"2nd"},{"firstName":"Adrian","lastName":"Smith","state":"Nebraska","congressionalDistrict":"3rd"},{"firstName":"Jason","lastName":"Smith","state":"Missouri","congressionalDistrict":"8th"},{"firstName":"Ross","lastName":"Spano","state":"Florida","congressionalDistrict":"15th"},{"firstName":"Elise","lastName":"Stefanik","state":"New York","congressionalDistrict":"21st"},{"firstName":"Glenn","lastName":"Thompson","state":"Pennsylvania","congressionalDistrict":"15th"},{"firstName":"Tom","lastName":"Tiffany","state":"Wisconsin","congressionalDistrict":"7th"},{"firstName":"William","lastName":"Timmons","state":"South Carolina","congressionalDistrict":"4th"},{"firstName":"Ann","lastName":"Wagner","state":"Missouri","congressionalDistrict":"2nd"},{"firstName":"Tim","lastName":"Walberg","state":"Michigan","congressionalDistrict":"7th"},{"firstName":"Michael","lastName":"Waltz","state":"Florida","congressionalDistrict":"6th"},{"firstName":"Randy","lastName":"Weber","state":"Texas","congressionalDistrict":"14th"},{"firstName":"Daniel","lastName":"Webster","state":"Florida","congressionalDistrict":"11th"},{"firstName":"Brad","lastName":"Wenstrup","state":"Ohio","congressionalDistrict":"2nd"},{"firstName":"Bruce","lastName":"Westerman","state":"Arkansas","congressionalDistrict":"4th"},{"firstName":"Roger","lastName":"Williams","state":"Texas","congressionalDistrict":"25th"},{"firstName":"Joe","lastName":"Wilson","state":"South Carolina","congressionalDistrict":"2nd"},{"firstName":"Rob","lastName":"Wittman","state":"Virginia","congressionalDistrict":"1st"},{"firstName":"Ron","lastName":"Wright","state":"Texas","congressionalDistrict":"6th"},{"firstName":"Ted","lastName":"Yoho","state":"Florida","congressionalDistrict":"3rd"},{"firstName":"Lee","lastName":"Zeldin","state":"New York","congressionalDistrict":"1st"},{"firstName":"Kevin","lastName":"McCarthy","state":"California","congressionalDistrict":"23rd"},{"firstName":"Robert","lastName":"Aderholt","state":"Alabama","congressionalDistrict":"4th"},{"firstName":"Jodey","lastName":"Arrington","state":"Texas","congressionalDistrict":"19th"},{"firstName":"Brian","lastName":"Babin","state":"Texas","congressionalDistrict":"36th"},{"firstName":"Doug","lastName":"Collins","state":"Georgia","congressionalDistrict":"9th"},{"firstName":"Scott","lastName":"DesJarlais","state":"Tennessee","congressionalDistrict":"4th"},{"firstName":"Morgan","lastName":"Griffith","state":"Virginia","congressionalDistrict":"9th"},{"firstName":"Jim","lastName":"Hagedorn","state":"Minnesota","congressionalDistrict":"1st"},{"firstName":"Jody","lastName":"Hice","state":"Georgia","congressionalDistrict":"10th"},{"firstName":"Billy","lastName":"Long","state":"Missouri","congressionalDistrict":"7th"},{"firstName":"Barry","lastName":"Loudermilk","state":"Georgia","congressionalDistrict":"11th"},{"firstName":"Steven","lastName":"Palazzo","state":"Mississippi","congressionalDistrict":"4th"},{"firstName":"Greg","lastName":"Pence","state":"Indiana","congressionalDistrict":"6th"},{"firstName":"Bill","lastName":"Posey","state":"Florida","congressionalDistrict":"8th"},{"firstName":"Mike","lastName":"Rogers","state":"Alabama","congressionalDistrict":"3rd"},{"firstName":"Pete","lastName":"Stauber","state":"Minnesota","congressionalDistrict":"8th"},{"firstName":"W.","lastName":"Gregory Steube","state":"Florida","congressionalDistrict":"17th"},{"firstName":"Jeff","lastName":"Van Drew","state":"New Jersey","congressionalDistrict":"2nd"},{"firstName":"Mark","lastName":"Walker","state":"North Carolina","congressionalDistrict":"6th"},{"firstName":"Jackie","lastName":"Walorski","state":"Indiana","congressionalDistrict":"2nd"}]

// match a single traitor with regex string
const createIndividualTraitorRegexString = houseTraitor =>
    // select first name, followed by optional middle name and nickname ?(\\s\\S*)?(\\s\\S*)? 
    `(\"?${houseTraitor.firstName}\"?(\\s\\S*)?(\\s\\S*)? \"?${houseTraitor.lastName}\"?)`

// match a single traitor with regex proper    
const createIndividualTraitorRegex = (houseTraitor) => {
	const individualTraitorRegex = createIndividualTraitorRegexString(houseTraitor)
    // wrap in parenthesis, so we can match a single traitor later and replace their name
    return new RegExp(`((Rep\\.\\s)?${individualTraitorRegex})`, 'g')
}

// match any house traitor
// will look something like this /((Mike Johnson)|(Gary Palmer))/
const createHouseTraitorRegex = () => {
    // Build regex to search for any of the traitors names https://stackoverflow.com/a/185529/3500171

    const traitorRegexStr = houseRepresentativeTraitors
        .map(createIndividualTraitorRegexString) // (Mike Johnson)
        .join('|') // (Mike Johnson)|(Gary Palmer)

    // wrap in parenthesis, so we can match a single traitor later and replace their name
    return new RegExp(`((Rep\\.\\s)?${traitorRegexStr})`, 'g')
}




const houseTraitorRegex = createHouseTraitorRegex()

$('p,h1,h2,h3,h4,h5,h6').each(function() {
    const text = $(this).text();

    // find all potential traitor matches
    const matches = text.match(houseTraitorRegex)

    // if we found possible traitors
    if (matches && matches.length > 0) {
        console.log('matches', matches)
        // loop through each possible traitor we matched
        for (const match in matches) {
            
            let individualTraitorRegex
            // search for the specific possible traitor we matched, so we can verify they are a traitor
            const specificTraitor = houseRepresentativeTraitors.find(currentTraitor => {
                individualTraitorRegex = createIndividualTraitorRegex(currentTraitor)
                
                const currentTraitorMatches = text.match(individualTraitorRegex)
                // if the current traitor matches contains the potential traitor we matched, then we found the object we are looking for
	
                return currentTraitorMatches && currentTraitorMatches.length > 0
            })

          
            if (specificTraitor) {
            	// verify the state of the traitor and that they are a representative
            	const verifyTraitorStateRegex = new RegExp(`(${specificTraitor.state})`, 'i')
            	const verifyTraitorStateMatches = text.match(verifyTraitorStateRegex)
            	
            	const verifyTraitorJobRegex = /((Rep\\.)(Representative)(Pol\\.)(Politician))/i
            	const verifyTraitorJobMatches = text.match(verifyTraitorJobRegex)
            	
            	if (verifyTraitorStateMatches && verifyTraitorStateMatches.length > 0
            	   && verifyTraitorStateMatches && verifyTraitorStateMatches.length > 0) {
            		$(this).html(text.replace(individualTraitorRegex, "<span class='traitor-against-america-2020'>$1, traitor against the United States of America,</span>"));
            	}
            	
            }
            
        }


    }
    
});
