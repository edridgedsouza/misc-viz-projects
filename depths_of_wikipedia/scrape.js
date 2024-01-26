// Load up the user's SECOND ig image, then paste into console
// Can't start at very first image on someone's profile, because
// then the navigation button selection is wonky and I'm not good
// enough at javascript to handle that 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function getRndTime(min, max) {
    return Math.random()*1000 + getRndInteger(min, max)
}

let database = {};
for (let i = 0; i < 1500; i++) {
    let dateOnly = 'NA';

    let timeElement = document.querySelector('time._aaqe');
    if (timeElement) {
        let datetimeAttributeValue = timeElement.getAttribute('datetime');
        dateOnly = datetimeAttributeValue.split('T')[0];
    } else {
        console.log(`Error in element ${i}`);
        continue;
    }

  let currentURL = window.location.href;

  let newElement = {
    ig_url: currentURL,
    date: dateOnly
  };

  database[i] = newElement;
  console.log(`Added element ${i}:`);

  // Wait
  await new Promise(resolve => setTimeout(resolve, getRndTime(1000, 4000)));
  if (i % 10 == 0) {
    console.log(`Current JSON for index ${i}: `, database)
  }

  // Click the next button
  const nextButton = document.querySelector("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div:nth-child(1) > div > div > div._aaqg._aaqh > button")
    if (nextButton) {
        nextButton.click();
    } else {
    console.log(`Next button not found for element ${i}`);
    continue;
    }
}

// Print the final JSON, copy it, and then save to ./data/data.json
console.log("Updated JSON:", database);
