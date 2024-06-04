/**
 * External dependencies
 */
import { test, expect } from '@woocommerce/e2e-playwright-utils';

test.describe( 'Demo 2 flaky tests', () => {
	test( 'Flaky test 3', async ( { page }, testInfo ) => {
		await page.goto( 'https://example.com' );
		// Introduce flakiness
		if ( testInfo.retry < 2 ) {
			throw new Error( 'Flaky failure' );
		}
		expect( true ).toBeTruthy();
	} );

	test( 'Flaky test 4', async ( { page }, testInfo ) => {
		await page.goto( 'https://example.com' );
		// Introduce flakiness
		if ( testInfo.retry < 2 ) {
			throw new Error( 'Flaky failure' );
		}
		expect( true ).toBeTruthy();
	} );
} );
