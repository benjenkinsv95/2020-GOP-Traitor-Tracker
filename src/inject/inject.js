// USAGE:
// abbrState('New York', 'abbr');
// https://gist.github.com/calebgrove/c285a9510948b633aa47
function abbrState(input, to){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}

// ----------------------------------------------------------
const generalTraitors = [{"firstName":"Eric","lastName":"Schmitt","state":"Missouri","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"John","lastName":"Sauer","state":"Missouri","title":"Solicitor General","titleAbbreviation":"SG"},{"firstName":"Justin","lastName":"Smith","state":"Missouri","title":"Deputy Attorney General","titleAbbreviation":"DAG"},{"firstName":"Steve","lastName":"Marshall","state":"Alabama","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Leslie","lastName":"Rutledge","state":"Arkansas","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Ashley","lastName":"Moody","state":"Florida","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Curtis","lastName":"Hill","state":"Indiana","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Derek","lastName":"Schmidt","state":"Kansas","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Jeff","lastName":"Landry","state":"Louisiana","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Lynn","lastName":"Fitch","state":"Mississippi","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Tim","lastName":"Fox","state":"Montana","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Douglas","lastName":"Peterson","state":"Nebraska","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Wayne","lastName":"Stenehjem","state":"North Dakota","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Mike","lastName":"Hunter","state":"Oklahoma","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Alan","lastName":"Wilson","state":"South Carolina","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Jason","lastName":"Ravnsborg","state":"South Dakota","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Herbert","lastName":"Slatery","state":"Tennessee","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Sean","lastName":"Reyes","state":"Utah","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Patrick","lastName":"Morrisey","state":"West Virginia","title":"Attorney General","titleAbbreviation":"AG"},{"firstName":"Ken","lastName":"Paxton","state":"Texas","title":"Attorney General","titleAbbreviation":"AG"}]
const houseRepresentativeTraitors = [{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mike","lastName":"Johnson","state":"Louisiana","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Gary","lastName":"Palmer","state":"Alabama","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Steve","lastName":"Scalise","state":"Louisiana","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jim","lastName":"Jordan","state":"Ohio","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ralph","lastName":"Abraham","state":"Louisiana","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Rick","lastName":"Allen","state":"Georgia","congressionalDistrict":"12th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"James","lastName":"Baird","state":"Indiana","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jim","lastName":"Banks","state":"Indiana","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jack","lastName":"Bergman","state":"Michigan","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Andy","lastName":"Biggs","state":"Arizona","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Gus","lastName":"Bilirakis","state":"Florida","congressionalDistrict":"12th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Dan","lastName":"Bishop","state":"North Carolina","congressionalDistrict":"9th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mike","lastName":"Bost","state":"Illinois","congressionalDistrict":"12th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Kevin","lastName":"Brady","state":"Texas","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mo","lastName":"Brooks","state":"Alabama","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ken","lastName":"Buck","state":"Colorado","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ted","lastName":"Budd","state":"North Carolina","congressionalDistrict":"13th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Tim","lastName":"Burchett","state":"Tennessee","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Michael","lastName":"Burgess","state":"Texas","congressionalDistrict":"26th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Bradley","lastName":"Byrne","state":"Alabama","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ken","lastName":"Calvert","state":"California","congressionalDistrict":"42nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Earl","lastName":"Carter","state":"Georgia","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Buddy","lastName":"Carter","state":"Georgia","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ben","lastName":"Cline","state":"Virginia","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Michael","lastName":"Cloud","state":"Texas","congressionalDistrict":"27th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mike","lastName":"Conaway","state":"Texas","congressionalDistrict":"11th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Rick","lastName":"Crawford","state":"Arkansas","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Dan","lastName":"Crenshaw","state":"Texas","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mario","lastName":"Diaz-Balart","state":"Florida","congressionalDistrict":"25th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jeff","lastName":"Duncan","state":"South Carolina","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Neal","lastName":"Dunn","state":"Florida","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Tom","lastName":"Emmer","state":"Minnesota","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ron","lastName":"Estes","state":"Kansas","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Drew","lastName":"Ferguson","state":"Georgia","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Chuck","lastName":"Fleischmann","state":"Tennessee","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Bill","lastName":"Flores","state":"Texas","congressionalDistrict":"17th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jeff","lastName":"Fortenberry","state":"Nebraska","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Virginia","lastName":"Foxx","state":"North Carolina","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Russ","lastName":"Fulcher","state":"Idaho","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Matt","lastName":"Gaetz","state":"Florida","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Greg","lastName":"Gianforte","state":"Montana","congressionalDistrict":"at-large"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Bob","lastName":"Gibbs","state":"Ohio","congressionalDistrict":"7th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Louie","lastName":"Gohmert","state":"Texas","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Lance","lastName":"Gooden","state":"Texas","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Sam","lastName":"Graves","state":"Missouri","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mark","lastName":"Green","state":"Tennessee","congressionalDistrict":"7th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Michael","lastName":"Guest","state":"Mississippi","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Andy","lastName":"Harris","state":"Maryland","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Vicky","lastName":"Hartzler","state":"Missouri","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Kevin","lastName":"Hern","state":"Oklahoma","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Clay","lastName":"Higgins","state":"Louisiana","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Trey","lastName":"Hollingsworth","state":"Indiana","congressionalDistrict":"9th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Richard","lastName":"Hudson","state":"North Carolina","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Bill","lastName":"Huizenga","state":"Michigan","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Bill","lastName":"Johnson","state":"Ohio","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"John","lastName":"Joyce","state":"Pennsylvania","congressionalDistrict":"13th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Fred","lastName":"Keller","state":"Pennsylvania","congressionalDistrict":"12th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mike","lastName":"Kelly","state":"Pennsylvania","congressionalDistrict":"16th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Trent","lastName":"Kelly","state":"Mississippi","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Steve","lastName":"King","state":"Iowa","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"David","lastName":"Kustoff","state":"Tennessee","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Darin","lastName":"LaHood","state":"Illinois","congressionalDistrict":"18th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Doug","lastName":"LaMalfa","state":"California","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Doug","lastName":"Lamborn","state":"Colorado","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Robert","lastName":"Latta","state":"Ohio","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Debbie","lastName":"Lesko","state":"Arizona","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Blaine","lastName":"Luetkemeyer","state":"Missouri","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Kenny","lastName":"Marchant","state":"Texas","congressionalDistrict":"24th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Roger","lastName":"Marshall","state":"Kansas","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Tom","lastName":"McClintock","state":"California","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Cathy","lastName":"McMorris Rodgers","state":"Washington","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Dan","lastName":"Meuser","state":"Pennsylvania","congressionalDistrict":"9th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Carol","lastName":"Miller","state":"West Virginia","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"John","lastName":"Moolenaar","state":"Michigan","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Alex","lastName":"Mooney","state":"West Virginia","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Markwayne","lastName":"Mullin","state":"Oklahoma","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Gregory","lastName":"Murphy","state":"North Carolina","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Dan","lastName":"Newhouse","state":"Washington","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ralph","lastName":"Norman","state":"South Carolina","congressionalDistrict":"5th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Scott","lastName":"Perry","state":"Pennsylvania","congressionalDistrict":"10th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Guy","lastName":"Reschenthaler","state":"Pennsylvania","congressionalDistrict":"14th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Tom","lastName":"Rice","state":"South Carolina","congressionalDistrict":"7th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"John","lastName":"Rose","state":"Tennessee","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"David","lastName":"Rouzer","state":"North Carolina","congressionalDistrict":"7th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"John","lastName":"Rutherford","state":"Florida","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Austin","lastName":"Scott","state":"Georgia","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mike","lastName":"Simpson","state":"Idaho","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Adrian","lastName":"Smith","state":"Nebraska","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jason","lastName":"Smith","state":"Missouri","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ross","lastName":"Spano","state":"Florida","congressionalDistrict":"15th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Elise","lastName":"Stefanik","state":"New York","congressionalDistrict":"21st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Glenn","lastName":"Thompson","state":"Pennsylvania","congressionalDistrict":"15th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Tom","lastName":"Tiffany","state":"Wisconsin","congressionalDistrict":"7th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"William","lastName":"Timmons","state":"South Carolina","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ann","lastName":"Wagner","state":"Missouri","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Tim","lastName":"Walberg","state":"Michigan","congressionalDistrict":"7th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Michael","lastName":"Waltz","state":"Florida","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Randy","lastName":"Weber","state":"Texas","congressionalDistrict":"14th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Daniel","lastName":"Webster","state":"Florida","congressionalDistrict":"11th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Brad","lastName":"Wenstrup","state":"Ohio","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Bruce","lastName":"Westerman","state":"Arkansas","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Roger","lastName":"Williams","state":"Texas","congressionalDistrict":"25th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Joe","lastName":"Wilson","state":"South Carolina","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Rob","lastName":"Wittman","state":"Virginia","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ron","lastName":"Wright","state":"Texas","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Ted","lastName":"Yoho","state":"Florida","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Lee","lastName":"Zeldin","state":"New York","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Kevin","lastName":"McCarthy","state":"California","congressionalDistrict":"23rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Robert","lastName":"Aderholt","state":"Alabama","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jodey","lastName":"Arrington","state":"Texas","congressionalDistrict":"19th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Brian","lastName":"Babin","state":"Texas","congressionalDistrict":"36th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Doug","lastName":"Collins","state":"Georgia","congressionalDistrict":"9th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Scott","lastName":"DesJarlais","state":"Tennessee","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Morgan","lastName":"Griffith","state":"Virginia","congressionalDistrict":"9th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jim","lastName":"Hagedorn","state":"Minnesota","congressionalDistrict":"1st"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jody","lastName":"Hice","state":"Georgia","congressionalDistrict":"10th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Billy","lastName":"Long","state":"Missouri","congressionalDistrict":"7th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Barry","lastName":"Loudermilk","state":"Georgia","congressionalDistrict":"11th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Steven","lastName":"Palazzo","state":"Mississippi","congressionalDistrict":"4th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Greg","lastName":"Pence","state":"Indiana","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Bill","lastName":"Posey","state":"Florida","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mike","lastName":"Rogers","state":"Alabama","congressionalDistrict":"3rd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Pete","lastName":"Stauber","state":"Minnesota","congressionalDistrict":"8th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"W.","lastName":"Gregory Steube","state":"Florida","congressionalDistrict":"17th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jeff","lastName":"Van Drew","state":"New Jersey","congressionalDistrict":"2nd"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Mark","lastName":"Walker","state":"North Carolina","congressionalDistrict":"6th"},{"title":"Representative","titleAbbreviation":"Rep","firstName":"Jackie","lastName":"Walorski","state":"Indiana","congressionalDistrict":"2nd"}]
const allTraitors = [...generalTraitors, ...houseRepresentativeTraitors]

const getStrictAllTraitorsSelector = () => {	
	const traitorsCssQueries = allTraitors.map(traitor => {
        const { firstName, lastName, title, titleAbbreviation, state } = traitor
        const stateAbbreviation = abbrState(state, 'abbr')

		return `*:contains("${firstName}"):contains("${lastName}"):contains("${title}"):contains("${state}"),` +
				// Do the same search with titleAbbreviation
  				`*:contains("${firstName}"):contains("${lastName}"):contains("${titleAbbreviation}"):contains("${state}"),` +
				// Same as 2 above, but with stateAbbreviation
				`*:contains("${firstName}"):contains("${lastName}"):contains("${title}"):contains("${stateAbbreviation}"),` +

  				`*:contains("${firstName}"):contains("${lastName}"):contains("${titleAbbreviation}"):contains("${stateAbbreviation}")`
	})

	// combine the individiual queries into one massive query with a comma
	return traitorsCssQueries.join(',')
}


const verifiedTraitors = new Set()
const buildLooseVerifiedTraitorsSelector = () => {	
	const traitorsCssQueries = Array.from(verifiedTraitors).map(traitor => {
        const { firstName, lastName } = traitor

		return `*:contains("${firstName}"):contains("${lastName}")`
	})

	// combine the individiual queries into one massive query with a comma
	return traitorsCssQueries.join(',')
}

const strictAllTraitorsCssSelector = getStrictAllTraitorsSelector()


// find the elements that have state, firstName, lastName, and job, without a similar element within them
const getInnerMostTraitorElements = (containerSelector, traitorsSelector = strictAllTraitorsCssSelector) => {
	const allTraitorElements = $(containerSelector).find(traitorsSelector)
	const innermostTraitorElements = allTraitorElements.not(allTraitorElements.has(allTraitorElements))
	return innermostTraitorElements
}



// match a single traitor with regex string
const createIndividualTraitorRegexString = traitor =>
	// select first name, followed by optional middle name and nickname ?(\\s\\S*)?(\\s\\S*)? 
	`(\"?${traitor.firstName}\"?(\\s\\S*)?(\\s\\S*)? \"?${traitor.lastName}\"?)`

// match a single traitor with regex proper    
const createIndividualTraitorRegex = (houseTraitor) => {
	const individualTraitorRegex = createIndividualTraitorRegexString(houseTraitor)
	// wrap in parenthesis, so we can match a single traitor later and replace their name
	return new RegExp(`((Rep\\.\\s)?${individualTraitorRegex})`)
}
// match any traitor
// will look something like this /((Mike Johnson)|(Gary Palmer))/
const createAnyTraitorRegex = () => {
	// Build regex to search for any of the traitors names https://stackoverflow.com/a/185529/3500171

	const traitorRegexStr = allTraitors
		.map(createIndividualTraitorRegexString) // (Mike Johnson)
		.join('|') // (Mike Johnson)|(Gary Palmer)

	// wrap in parenthesis, so we can match a single traitor later and replace their name
	return new RegExp(`(${traitorRegexStr})`)
}

const createTraitorToIndividualRegexMap = () => {
	const traitorToIndividualRegex = new Map()
	allTraitors.forEach(currentTraitor => {
		const individualTraitorRegex = createIndividualTraitorRegex(currentTraitor)
		traitorToIndividualRegex.set(currentTraitor, individualTraitorRegex)
	})
	return traitorToIndividualRegex
}

const traitorToIndividualRegex = createTraitorToIndividualRegexMap()
const anyTraitorRegex = createAnyTraitorRegex()


const buildTraitorObjects = (node) => {
	const numWords = node.text().split(/\s+/).length
	
	// Only highlight if it's rather specific, like a paragraph.
	if (numWords < 75) {
		const text = node.text()

		// search for the specific possible traitor we matched, so we can verify they are a traitor
		const specificTraitor = allTraitors.find(currentTraitor => {
			const individualTraitorRegex = traitorToIndividualRegex.get(currentTraitor)
			
			const currentTraitorMatches = text.match(individualTraitorRegex)
			// if the current traitor matches contains the potential traitor we matched, then we found the object we are looking for
			return currentTraitorMatches && currentTraitorMatches.length > 0
		})
	
		if (specificTraitor && !verifiedTraitors.has(specificTraitor)) {
			console.log('add to verified traitors', specificTraitor)
			verifiedTraitors.add(specificTraitor)
		}
	}
}

const markTraitors = (node, text, onlyHighlight) => {
	// find all potential traitor matches
	console.log('text', node.text())
	// const matches = new Set(text.match(houseTraitorRegex))
	$(node).addClass('traitor-against-america-2020')
}

const processNode = jQueryNode => {
	const innerMostNode = jQueryNode
	const numWords = innerMostNode.text().split(/\s+/).length
	
	// Only highlight if it's rather specific, like a paragraph.
	if (numWords < 75) {
		markTraitors(innerMostNode, innerMostNode.text())
	}
}

// Select the node that will be observed for mutations
const targetNode = document.querySelector('body');

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const markNewContent = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        for (let node of mutation.addedNodes) {

			// find the elements that have state, firstName, lastName, and job, without a similar element within them
			getInnerMostTraitorElements(node).each(function () {
				buildTraitorObjects($(this))
			})
        }
	}
	const looseVerifiedTraitorsCssSelector = buildLooseVerifiedTraitorsSelector()
	// Now look for only the verified traitors
	getInnerMostTraitorElements('body', looseVerifiedTraitorsCssSelector)
		.each(function() {
			console.log('process')
			processNode($(this))
	})
};

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// This part of the script triggers when page is done loading
		 console.log("Traitor Tracker Loaded")
		$(() => {

			// Look for all of the traitors by first, last, state, and position
			getInnerMostTraitorElements('body')
			  .each(function() {
				console.log('building')
				buildTraitorObjects($(this))
			})

			const looseVerifiedTraitorsCssSelector = buildLooseVerifiedTraitorsSelector()
			// Now look for only the verified traitors
			getInnerMostTraitorElements('body', looseVerifiedTraitorsCssSelector)
			  .each(function() {
			    console.log('process')
				processNode($(this))
			})
			
			
			// Create an observer instance linked to the callback function
			const observer = new MutationObserver(markNewContent);

			// Start observing the target node for configured mutations
			observer.observe(document, config);
		})
	}
	}, 10);
});