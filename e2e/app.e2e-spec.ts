import { ProjektStalPage } from './app.po';

describe('projekt-stal App', function() {
  let page: ProjektStalPage;

  beforeEach(() => {
    page = new ProjektStalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
