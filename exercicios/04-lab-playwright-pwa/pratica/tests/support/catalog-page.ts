import { Page, Locator } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  readonly pulpFictionCard: Locator;
  readonly favoritesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pulpFictionCard = page.getByRole('article').filter({ hasText: 'Pulp Fiction' });
    this.favoritesButton = page.getByRole('button', { name: /Favoritos/i });
  }

  async goto() {
    await this.page.goto('/qa');
  }

  async favoritePulpFiction() {
    await this.pulpFictionCard.getByRole('button', { name: /Favoritar/i }).click();
  }

  async openFavorites() {
    await this.favoritesButton.click();
  }
}