import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    const api_key = "a9a53121a79b11f19ef86092cf29a2a5";

    // const urlencodedtext =
      // "Great%20service%2C%20high%20prices%2C%20slightly%20above%20average%20food.%20I%20had%20the%20steak%20and%20eggs%2C%20and%20the%20steak%20was%20a%20little%20over%20cooked%20for%20my%20liking%20(medium%20well).%20The%20eggs%20were%20ok%20but%20nothing%20special%3B%20however%2C%20the%20avocado%20that%20came%20with%20it%20was%20really%20good.%20The%20black%20beans%20that%20came%20with%20it%20were%20cold%3B%20clearly%20by%20design%2C%20but%20it%20surprised%20me%20and%20was%20a%20put%20off.%5Cn%5CnMy%20wife%20had%20the%20avocado%20toast%2C%20after%20they%20told%20us%20they%20had%20just%20run%20out%20of%20the%20protein%20pancakes.%20She%20liked%20the%20toast%20but%20said%20it%20wasn%27t%20anything%20to%20write%20home%20about.%5Cn%5CnWe%20also%20got%20some%20bacon%20to%20split%2C%20which%20was%20reasonably%20priced%20at%20%243%20for%20three%20strips%2C%20but%20the%20bacon%20strips%20were%20pretty%20thin.%20There%20just%20wasn%27t%20a%20lot%20to%20it.%20The%20bone%20broth%20was%20scalding%20hot%2C%20and%20didn%27t%20have%20a%20ton%20of%20flavor%2C%20but%20it%20was%20nice%20and%20warming%20with%20the%20near%20zero%20degree%20(Fahrenheit)%20temperatures%20outside.%5Cn%5CnWe%20grabbed%20some%20small%20desserts%20that%20they%20had%3B%20my%20wife%20had%20the%20collagen%20chocolate%20pudding%20which%20my%20wife%20loved.%20I%20had%20the%20raw%20chocolate%20chip%20cookie%20dough%3B%20it%20was%20very%20dense%20but%20the%20taste%20was%20really%20good.%5Cn%5CnStaff%20was%20really%20nice%20and%20friendly%2C%20and%20it%20was%20great%20to%20find%20some%20healthy%20options%20while%20traveling.%20I%20can%27t%20give%20it%20the%20highest%20marks%2C%20but%20we%20will%20probably%20be%20back%20just%20to%20keep%20having%20healthy%20options%20on%20our%20trip.";

const urlencodedtext = `I%20tried%20Impact%20Kitchen%20when%20it%20first%20opened%20via%20Uber%20eats.%20They%20were%20still%20working%20out%20a%20few%20kinks,%20especially%20with%20regard%20to%20portion%20size,%20which%20I%20found%20to%20be%20too%20small.%0A%0AThey%20have%20since%20improved%20a%20lot,%20adding%20a%20lot%20of%20different%20menu%20items%20and%20to-go%20options.%20Angela%20runs%20a%20tight%20ship%20and%20this%20is%20now%20one%20of%20my%20go-to%20spots.%20The%20only%20downside%20is%20that%20it%20is%20fairly%20expensive.%0A%0AMy%20favorite%20items%20on%20the%20menu%20are%20the%20winter%20citrus%20salad%20with%20falafel%20add-on;%20chicken%20bone%20broth,%20thai%20butternut%20squash%20soup%20(delicious!)%20and%20the%20halo%20power%20bowl.%0A%0AThe%20collagen%20chocolate%20pudding%20is%20an%20amazing%20dessert%20for%20when%20those%20cravings%20kick%20in.',
'This%20place%20tastes%20%22healthy%22%20in%20the%20way%20that%20means%20%22fresh%22%20and%20not%20as%20a%20euphemism%20for%20%22bland%22.%20Ordered%20a%20workplace%20dinner%20from%20here%20on%20hungrhub.%20Food%20arrived%20on%20time,%20of%20good%20quality,%20flavourful%20and%20pretty.%20Prices%20very%20reasonable%20and%20falafel%20is%20even%20moist!%0A%0AYum',
'Annoyed%20at%20the%20very%20slow%20slow%20service.%20%0AFor%20the%20price%20and%20location%20I%20expect%20at%20least%20a%20bag%20and%20some%20cutlery.%0AI%20had%20to%20ask%20for%20a%20bag,%20and%20they%20didn't%20bother%20putting%20in%20napkins%20and%20cutlery.%0A%0AI%20waiting%2010%20min%20for%20an%20iced%20americano%20when%20there%20was%20no%20one%20ahead%20of%20me.%20%0A%0AFor%20an%20experience%20that%20is%20set%20up%20to%20be%20streamline,%0Athey%20need%20to%20stop%20hiring%20kids%20and%20speed%20things%20up%20asap.',
'Excellent%20taco%20stand%20with%20great%20food%20to%20go%20along%20with%20good%20prices%20and%20service.%20%20I%20found%20about%20this%20place%20from%20an%20article%20on%20Blog.To.%20%20%20I%20had%20the%20Baja%20fish%20haddock%20tacos%20and%20they%20were%20among%20the%20best%20tacos%20I%20had%20anywhere,%20and%20that%20includes%20those%20made%20in%20Texas%20or%20California.%20%20%20%20%0A%0AThere%20is%20very%20limited%20seating%20and%20it%20is%20cash%20only.%20%20%20%20But%20I%20am%20not%20going%20to%20let%20that%20cost%20them%20a%20five-star%20review%20by%20making%20Seven%20Lives%20out%20to%20be%20something%20that%20it%20is%20not.%20%20%20%20I%20would%20strongly%20suggest%20this%20establishment%20if%20you%20are%20craving%20for%20tacos,%20enough%20said.',
'Went%20here%20during%20my%20first%20trip%20to%20Kensington,%20and%20found%20their%20tacos%20to%20be%20just%20pure%20deliciousness!%20I%20tried%20their%20daily%20special%20-%20blackened%20cod%20with%20mango/pineapple%20salsa,%20and%20for%20$7,%20it%20was%20the%20right%20proportion%20and%20flavours!%20The%20only%20down%20side%20is%20there%20is%20always%20a%20line-up%20and%20barely%20any%20space%20to%20eat%20indoors,%20so%20we%20ended%20up%20eating%20on%20the%20street.%20%0A%0AThe%20place%20offers%20a%20variety%20of%20vegetarian%20and%20meat%20options,%20and%20has%20their%20own%20take%20on%20the%20authentic%20Mexican%20tacos.%20Best%20to%20park%20nearby%20and%20walk%20here%20as%20part%20of%20your%20Kensington%20market%20loop.%20Also%20remember%20to%20bring%20cash%20and%20they%20don't%20accept%20credit%20cards!%20%0A%0ADefinitely%20coming%20back%20for%20some%20more%20another%20day!`


    let concepts = []

    fetch(
      `https://api.meaningcloud.com/topics-2.0?key=${api_key}&lang=en&txt=${urlencodedtext}&tt=c&uw=y&rt=y`,
      {
        method: "POST",
      }
    )
      .then(results => {
        return results.json();
      })
      .then(results => {
        // console.log(results);
        if (results.status.msg === 'OK') {
          results.concept_list.forEach(function(item) {
            if (item.relevance > 0) {
              // threshold of relevance
              concepts.push(item.form);
            }
          })
          console.log(concepts)
          } else {
            console.log('error occured');
          }
      });
  }

  render() {
    return <div>hi</div>;
  }
}

export default Test;
