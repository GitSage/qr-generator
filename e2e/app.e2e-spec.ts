import { QrGeneratorPage } from './app.po';

describe('qr-generator App', () => {
  let page: QrGeneratorPage;

  beforeEach(() => {
    page = new QrGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
