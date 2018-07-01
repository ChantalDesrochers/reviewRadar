import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {

    const urlencodedtext =
      "Great%20service%2C%20high%20prices%2C%20slightly%20above%20average%20food.%20I%20had%20the%20steak%20and%20eggs%2C%20and%20the%20steak%20was%20a%20little%20over%20cooked%20for%20my%20liking%20(medium%20well).%20The%20eggs%20were%20ok%20but%20nothing%20special%3B%20however%2C%20the%20avocado%20that%20came%20with%20it%20was%20really%20good.%20The%20black%20beans%20that%20came%20with%20it%20were%20cold%3B%20clearly%20by%20design%2C%20but%20it%20surprised%20me%20and%20was%20a%20put%20off.%5Cn%5CnMy%20wife%20had%20the%20avocado%20toast%2C%20after%20they%20told%20us%20they%20had%20just%20run%20out%20of%20the%20protein%20pancakes.%20She%20liked%20the%20toast%20but%20said%20it%20wasn%27t%20anything%20to%20write%20home%20about.%5Cn%5CnWe%20also%20got%20some%20bacon%20to%20split%2C%20which%20was%20reasonably%20priced%20at%20%243%20for%20three%20strips%2C%20but%20the%20bacon%20strips%20were%20pretty%20thin.%20There%20just%20wasn%27t%20a%20lot%20to%20it.%20The%20bone%20broth%20was%20scalding%20hot%2C%20and%20didn%27t%20have%20a%20ton%20of%20flavor%2C%20but%20it%20was%20nice%20and%20warming%20with%20the%20near%20zero%20degree%20(Fahrenheit)%20temperatures%20outside.%5Cn%5CnWe%20grabbed%20some%20small%20desserts%20that%20they%20had%3B%20my%20wife%20had%20the%20collagen%20chocolate%20pudding%20which%20my%20wife%20loved.%20I%20had%20the%20raw%20chocolate%20chip%20cookie%20dough%3B%20it%20was%20very%20dense%20but%20the%20taste%20was%20really%20good.%5Cn%5CnStaff%20was%20really%20nice%20and%20friendly%2C%20and%20it%20was%20great%20to%20find%20some%20healthy%20options%20while%20traveling.%20I%20can%27t%20give%20it%20the%20highest%20marks%2C%20but%20we%20will%20probably%20be%20back%20just%20to%20keep%20having%20healthy%20options%20on%20our%20trip.";

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
        console.log(results);
      });
  }

  render() {
    return <div>hi</div>;
  }
}

export default Test;
