import {Selector} from "testcafe";

fixture('iFrame')
    .page("http://127.0.0.1:8080/")

test('Verify iFrame and the Automate API in Browser stack', async t => {
    await t.hover(Selector('h1'))
    await t.switchToIframe(Selector('iframe#inlineFrameExample'))
    await t.hover(Selector('p'))
    console.log(await Selector('p').innerText)
    await t.switchToMainWindow()
});
