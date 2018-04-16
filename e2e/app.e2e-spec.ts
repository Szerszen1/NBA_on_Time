import { NbaOnTimePage } from './app.po';

describe('nba-on-time App', function() {
  let page: NbaOnTimePage;

  beforeEach(() => {
    page = new NbaOnTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
