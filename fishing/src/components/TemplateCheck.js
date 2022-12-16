
function checkTemplate(templates, body) : [] {
	
	const changedTemp = templates
	const bodyarray = body.split(' ');
	
	for (let i = 0; i < changedTemp.length; i++) {
		const tempbodyarray = changedTemp[i].body.split(' ');
		
		let commonwords = 0;
		for(let j = 0; j < bodyarray.length; j++) {
			
			for (let k = 0; k < tempbodyarray.length; k++) {
				
				if (bodyarray[j].includes(tempbodyarray[k])) {
					commonwords = commonwords + 1;
					break;
				}
			}
			
		}
		
		const score = (commonwords / bodyarray.length) * 100;
		changedTemp[i].percentage_matching = Math.round((score + Number.EPSILON) * 100) / 100;
		changedTemp[i].s_status = (score > 85) ? 1 : 0; 
	
	}
	
	return changedTemp
}

module.exports = {
	checkTemplate : checkTemplate
}