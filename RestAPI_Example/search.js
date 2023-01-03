// search.js

function getTimeValueFromHoursMinutesString(time, i){
	console.log("getTimeValueFromHoursMinutesString called")
	if(time.indexOf(":") > -1)
	{
		console.log("time string contains :")
		let arr = time.split(":");
		console.log("arr = " + arr);
		console.log("returning = " + arr[i]);
		return arr[i];
	}
	
	console.log("returning = 0");
	return 0;
}

function setTimeToMax(date){
	console.log("setTimeToMax called")
	if(typeof date === "date")
	{
		console.log("date is of type date")
		date.setHours(23);
		date.setMinutes(59);
		date.setSeconds(59);
		date.setMilliseconds(999);
	}
	else
	{
		date = new Date(1776,1,1,23,59,0,0);
	}
	
	return date;
}

function getState(stateAbbreviation){
	switch(stateAbbreviation) {
		case "AL":
			return "Alabama";
			break;
		case "AK":
			return "Alaska";
			break;
		case "AZ":
			return "Arizona";
			break;
		case "AR":
			return "Arkansas";
			break;
		case "AS":
			return "American Samoa";
			break;
		case "CA":
			return "California";
			break;
		case "CO":
			return "Colorado";
			break;
		case "CT":
			return "Connecticut";
			break;
		case "DE":
			return "Delaware";
			break;
		case "DC":
			return "District of Columbia";
			break;
		case "GA":
			return "Georgia";
			break;
		case "GU":
			return "Guam";
			break;
		case "HI":
			return "Hawaii";
			break;
		case "ID":
			return "Idaho";
			break;
		case "IL":
			return "Illinois";
			break;
		case "IN":
			return "Indiana";
			break;
		case "IA":
			return "Iowa";
			break;
		case "KS":
			return "Kansas";
			break;
		case "KY":
			return "Kentucky";
			break;
		case "LA":
			return "Louisiana";
			break;
		case "ME":
			return "Maine";
			break;
		case "MD":
			return "Maryland";
			break;
		case "MA":
			return "Massachusetts";
			break;
		case "MI":
			return "Michigan";
			break;
		case "MN":
			return "Minnesota";
			break;
		case "MS":
			return "Mississippi";
			break;
		case "MO":
			return "Missouri";
			break;
		case "MT":
			return "Montana";
			break;
		case "NE":
			return "Nebraska";
			break;
		case "NV":
			return "Nevada";
			break;
		case "NH":
			return "New Hampshire";
			break;
		case "NJ":
			return "New Jersey";
			break;
		case "NM":
			return "New Mexico";
			break;
		case "NY":
			return "New York";
			break;
		case "NC":
			return "North Carolina";
			break;
		case "ND":
			return "North Dakota";
			break;
		case "MP":
			return "Northern Mariana Islands";
			break;
		case "OH":
			return "Ohio";
			break;
		case "OK":
			return "Oklahoma";
			break;
		case "OR":
			return "Oregon";
			break;
		case "PA":
			return "Pennsylvania";
			break;
		case "PR":
			return "Puerto Rico";
			break;
		case "RI":
			return "Rhode Island";
			break;
		case "SC":
			return "South Carolina";
			break;
		case "SD":
			return "South Dakota";
			break;
		case "TN":
			return "Tennessee";
			break;
		case "TX":
			return "Texas";
			break;
		case "TT":
			return "Trust Territories";
			break;
		case "UT":
			return "Utah";
			break;
		case "VT":
			return "Vermont";
			break;
		case "VI":
			return "Virgin Islands";
			break;
		case "WA":
			return "Washington";
			break;
		case "WV":
			return "West Virginia";
			break;
		case "WI":
			return "Wisconsin";
			break;
		case "WY":
			return "Wyoming";
			break;
			
		default:
			return "";
	}
}

function getStateAbbreviation(state){
	switch(state) {
		case "Alabama":
			return "AL";
			break;
		case "Alaska":
			return "AK";
			break;
		case "Arizona":
			return "AZ";
			break;
		case "Arkansas":
			return "AR";
			break;
		case "American Samoa":
			return "AS";
			break;
		case "California":
			return "CA";
			break;
		case "Colorado":
			return "CO";
			break;
		case "Connecticut":
			return "CT";
			break;
		case "Delaware":
			return "DE";
			break;
		case "District of Columbia":
			return "DC";
			break;
		case "Georgia":
			return "GA";
			break;
		case "Guam":
			return "GU";
			break;
		case "Hawaii":
			return "HI";
			break;
		case "Idaho":
			return "ID";
			break;
		case "Illinois":
			return "IL";
			break;
		case "Indiana":
			return "IN";
			break;
		case "Iowa":
			return "IA";
			break;
		case "Kansas":
			return "KS";
			break;
		case "Kentucky":
			return "KY";
			break;
		case "Louisiana":
			return "LA";
			break;
		case "Maine":
			return "ME";
			break;
		case "Maryland":
			return "MD";
			break;
		case "Massachusetts":
			return "MA";
			break;
		case "Michigan":
			return "MI";
			break;
		case "Minnesota":
			return "MN";
			break;
		case "Mississippi":
			return "MS";
			break;
		case "Missouri":
			return "MO";
			break;
		case "Montana":
			return "MT";
			break;
		case "Nebraska":
			return "NE";
			break;
		case "Nevada":
			return "NV";
			break;
		case "New Hampshire":
			return "NH";
			break;
		case "New Jersey":
			return "NJ";
			break;
		case "New Mexico":
			return "NM";
			break;
		case "New York":
			return "NY";
			break;
		case "North Carolina":
			return "NC";
			break;
		case "North Dakota":
			return "ND";
			break;
		case "Northern Mariana Islands":
			return "MP";
			break;
		case "Ohio":
			return "OH";
			break;
		case "Oklahoma":
			return "OK";
			break;
		case "Oregon":
			return "OR";
			break;
		case "Pennsylvania":
			return "PA";
			break;
		case "Puerto Rico":
			return "PR";
			break;
		case "Rhode Island":
			return "RI";
			break;
		case "South Carolina":
			return "SC";
			break;
		case "South Dakota":
			return "SD";
			break;
		case "Tennessee":
			return "TN";
			break;
		case "Texas":
			return "TX";
			break;
		case "Trust Territories":
			return "TT";
			break;
		case "Utah":
			return "UT";
			break;
		case "Vermont":
			return "VT";
			break;
		case "Virgin Islands":
			return "VI";
			break;
		case "Washington":
			return "WA";
			break;
		case "West Virginia":
			return "WV";
			break;
		case "Wisconsin":
			return "WI";
			break;
		case "Wyoming":
			return "WY";
			break;
			
		default:
			return "";
	}
}

function executeSearch(list, rtn, searchParameters, searchTerms) {
	
	for ( var i = 0; i < list.length; i++ )
	{
		
		for ( var j = 0; j < searchParameters.length; j++ )
		{
			let searchName = null;
			if(searchTerms[0])
			{
				searchName = searchTerms[0];
			}
			
			let searchState = null;
			if(searchTerms[1])
			{
				searchState = searchTerms[1];
			}
			
			let searchTime = null;
			if(searchTerms[2])
			{
				searchTime = searchTerms[2];
			}
			
			console.log("searchName = " + searchName);
			console.log("searchState = " + searchState);
			console.log("searchTime = " + searchTime);
			console.log("typeof searchTime = " + typeof searchTime);
			console.log("typeof searchTime[0] = " + searchTime[0]);
			console.log("typeof searchTime[1] = " + searchTime[1]);
			
			if(!searchName && !searchState && (!searchTime || (!searchTime[0] && !searchTime[1])))
			{
				console.log("All search criteria empty. Add all items")
				if (rtn.indexOf(list[i]) == -1)
				{
					rtn.push(list[i])
				}
				j = searchParameters.length;
			}
			else
			{
				if((searchParameters[j] === "availability" || searchParameters[j] ===  "opening") && typeof searchTime === 'object')
				{
					console.log("Checking date range")
					// deal with date range
					let itemFromValue = new Date(1776,1,1,0,0,0,0);
					let itemToValue = new Date(1776,1,1,23,59,0,0);
					
					let searchTermFromValue = new Date(1776,1,1,0,0,0,0);
					let searchTermToValue = new Date(1776,1,1,23,59,0,0);
					
					if((searchTime[0] === 'undefined' || searchTime[0] === null) && (searchTime[1] === 'undefined' || searchTime[1] === null))
					{
						// no search required via the from or to times, so just add the item and exit
						
						console.log("no search required via the from or to times, so just continue")
					}
					else
					{
						let isException = false;
						
						if(searchTime[0] !== 'undefined' && searchTime[0] !== null)
						{
							try
							{
								// only care about the from value if we are searching with a from 
								console.log("searchParameters[j] = " + searchParameters[j])
								console.log("list[i][searchParameters[j]] = " + list[i][searchParameters[j]])
								console.log("list[i][searchParameters[j]][0] = " + list[i][searchParameters[j]]["from"])
								let itemFromHours = getTimeValueFromHoursMinutesString(list[i][searchParameters[j]]["from"], 0);
								console.log("itemFromHours = " + itemFromHours)
								if(itemFromHours == 24)
								{
									console.log("itemFromHours is 24")
									itemFromValue = setTimeToMax(itemFromValue);
								}
								else
								{
									console.log("itemFromHours is not 24")
									itemFromValue.setHours(itemFromHours);
									itemFromValue.setMinutes(getTimeValueFromHoursMinutesString(list[i][searchParameters[j]]["from"], 1));
								}
								
								let searchTermFromHours = getTimeValueFromHoursMinutesString(searchTime[0], 0);
								console.log("searchTermFromHours = " + searchTermFromHours)
								if(searchTermFromHours == 24)
								{
									console.log("searchTermFromHours is 24")
									searchTermFromValue = setTimeToMax(searchTermFromValue);
								}
								if(searchTermFromHours == 0)
								{
									let searchTermFromMinutes = getTimeValueFromHoursMinutesString(searchTime[0], 1)
									
									if(searchTermFromMinutes == 0)
									{
										searchTermFromValue = setTimeToMax(searchTermFromValue);;
									}
								}
								else
								{
									console.log("searchTermFromValue is not 24")
									searchTermFromValue.setHours(searchTermFromHours);
									searchTermFromValue.setMinutes(getTimeValueFromHoursMinutesString(searchTime[0], 1));
								}
							}
							catch
							{
								console.log("Exception caught: list[i][searchParameters[j]]['from']")
								console.log("searchParameters[j] = " + searchParameters[j])
								isException = true;
							}
						}
						
						if(searchTime[1] !== 'undefined' && searchTime[1] !== null)
						{
							try
							{
								console.log("list[i][searchParameters[j]][1] = " + list[i][searchParameters[j]]["to"])
					
								let itemToHours = getTimeValueFromHoursMinutesString(list[i][searchParameters[j]]["to"],0);
								console.log("itemToHours = " + itemToHours)
								if(itemToHours == 24)
								{
									console.log("itemToValue is 24")
									itemToValue = setTimeToMax(itemToValue);
								}
								else
								{
									console.log("itemToValue is not 24")
									itemToValue.setHours(itemToHours);
									itemToValue.setMinutes(getTimeValueFromHoursMinutesString(list[i][searchParameters[j]]["to"], 1));
								}
								
								let searchTermToHours = getTimeValueFromHoursMinutesString(searchTime[1], 0);
								console.log("searchTermToHours = " + searchTermToHours)
								if(searchTermToHours == 24)
								{
									console.log("searchTermToHours is 24")
									searchTermToValue = setTimeToMax(searchTermToValue);
								}
								if(searchTermToHours == 0)
								{
									let searchTermToMinutes = getTimeValueFromHoursMinutesString(searchTime[1], 1)
									
									if(searchTermToMinutes == 0)
									{
										searchTermToValue = setTimeToMax(searchTermToValue);;
									}
								}
								else
								{
									console.log("searchTermToValue is not 24")
									searchTermToValue.setHours(searchTermToHours);
									searchTermToValue.setMinutes(getTimeValueFromHoursMinutesString(searchTime[1], 1));
								}
							}
							catch
							{
								console.log("Exception caught: list[i][searchParameters[j]]['to']")
								console.log("searchParameters[j] = " + searchParameters[j])
								isException = true;
							}
							
						}
						
						if(!isException)
						{
							console.log("itemFromValue = " + itemFromValue)
					
							console.log("itemToValue = " + itemToValue)
							console.log("searchTermFromValue = " + searchTermFromValue)
							console.log("searchTermToValue = " + searchTermToValue)
							
							if(searchTermFromValue >= itemFromValue && searchTermToValue <= itemToValue)
							{
								console.log("Item added")
								if (rtn.indexOf(list[i]) == -1)
								{
									rtn.push(list[i])
								}
							}
							else if (rtn.indexOf(list[i]) > -1)
							{
								console.log("Date not in range. Item rejected")
								rtn.splice(rtn.indexOf(list[i]), 1);
								console.log("Item removed from rtn")
								console.log("Item rejected")
								j = searchParameters.length;
							}
							else
							{
								console.log("Date not in range. Item rejected")
								j = searchParameters.length;
							}
						}
						
					}	
				}
				else if((searchParameters[j] === "name" || searchParameters[j] ===  "clinicName") && searchName)
				{
					console.log("Checking searchName")
					console.log("searchParameters[j] = " + searchParameters[j])
					console.log("list[i][searchParameters[j]] = " + list[i][searchParameters[j]])
					
					let clinicName = list[i][searchParameters[j]];
					
					if(clinicName)
					{
						if (clinicName.startsWith(searchName))
						{
							console.log("Item added")
							if (rtn.indexOf(list[i]) == -1)
							{
								rtn.push(list[i])
							}
						}
						else if (rtn.indexOf(list[i]) > -1)
						{
							console.log("name or clinic name does not start with searched name. Item rejected")
							rtn.splice(rtn.indexOf(list[i]), 1);
							console.log("Item removed from rtn")
							console.log("Item rejected")
							j = searchParameters.length;
						}
					}
				}
				else if((searchParameters[j] === "stateName" || searchParameters[j] ===  "stateCode") && searchState)
				{
					console.log("Checking searchState")
					
					//convert state to either state name or state abbreviation, then perform the startsWith on it
					let state = list[i][searchParameters[j]];
					
					if(state)
					{
						console.log("state = " + state)
						if (getState(state).startsWith(searchState) 
							|| getStateAbbreviation(state).startsWith(searchState)
							|| state.startsWith(searchState))
						{
							console.log("Item added")
							if (rtn.indexOf(list[i]) == -1)
							{
								rtn.push(list[i])
							}
						}
						else if (rtn.indexOf(list[i]) > -1)
						{
							console.log("name or clinic name does not start with searched name. Item rejected")
							rtn.splice(rtn.indexOf(list[i]), 1);
							console.log("Item removed from rtn")
							console.log("Item rejected")
							j = searchParameters.length;
						}
					}
					
				}
			}
		}
	}
	
	return rtn;
}

exports.executeSearch = executeSearch;