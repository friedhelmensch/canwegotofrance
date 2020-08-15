export function makeGetNewCases(fetch) {
  return async (from, to) => {
    const request = `https://api.covid19api.com/country/france/status/confirmed?from=${from.toISOString()}&to=${to.toISOString()}`;
    console.log(request);
    const result = await fetch(request);

    var datapoints = result.data.filter((x) => x.Province === "");

    var latestNewCases =
      datapoints[datapoints.length - 1].Cases -
      datapoints[datapoints.length - 2].Cases;

    if (latestNewCases === 0) {
      return { error: "No data. No new cases reported." };
    }

    var newCases =
      datapoints[datapoints.length - 1].Cases - datapoints[0].Cases;

    return newCases.toFixed(2);
  };
}

export function getCasesPer100kResidents(cases, residents) {
  return (cases / (residents / 100000)).toFixed(2);
}
