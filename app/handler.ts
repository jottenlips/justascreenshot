// const captureWebsite = require("capture-website");
// this module will be provided by the layer
const chromium = require("chrome-aws-lambda");

export const screenshot = async (url, queryStringParameters) => {
  // launch a headless browser
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    defaultViewport: { height: 900, width: 1440 },
  });

  // open a new tab
  const page = await browser.newPage();
  // navigate to the page
  await page.goto(url, { waitUntil: "networkidle0" });
  // take a screenshot
  const capture = await page.screenshot({
    fullPage: true,
    encoding: "base64",
  });
  await browser.close();
  console.log(url, capture);
  return capture;
};

export const jas = async (event: any) => {
  const qs = event.queryStringParameters;
  const url = qs.url;
  const res = await screenshot(url, qs);
  return {
    statusCode: 200,
    body: res,
    headers: {
      "content-type": "image/png",
    },
    isBase64Encoded: true,
  };
};
