import {test, expect } from '@playwright/test'

test('Capture screenshot', async({page})=> {

    await page.goto('https://www.youtube.com/@testerstalk/videos');

    //Element screenshot
    await page.locator('#page-header-banner').screenshot({path :'./screenshots/ElementScreenshot.png'});

    // Page screenshot
    await page.screenshot({path : './screenshots/PageScreenshot.png'});

    // Full page screenshot
    await page.screenshot({path : './screenshots/FullPageScreenshot.png', fullPage:true});


})