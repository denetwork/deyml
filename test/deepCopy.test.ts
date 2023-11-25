import _ from 'lodash';
import { expect } from "@jest/globals";

/**
 *	unit test
 */
describe( "deepCopy", () =>
{
	beforeAll( async () =>
	{
	} );
	afterAll( async () =>
	{
	} );

	describe( "Test deepCopy", () =>
	{
		it( "should merge object from all sources to target", async () =>
		{
			const sourceObject = {
				name: 'John',
				age: 25,
				address: {
					city: 'New York',
					country: 'USA',
				},
			};

			const targetObject = {
				name: 'Alice',
				address: {
					city: 'San Francisco',
				},
			};

			const mergedObject : any = _.merge({}, sourceObject, targetObject, undefined, { age : 30 } );
			//
			//    console.log('Merged Object:', mergedObject);
			//    Merged Object: {
			//       name: 'Alice',
			//       age: 30,
			//       address: { city: 'San Francisco', country: 'USA' }
			//    }
			//
			expect( mergedObject ).toBeDefined();
			expect( _.isObject( mergedObject ) ).toBeTruthy();
			expect( mergedObject ).toHaveProperty( 'name' );
			expect( mergedObject ).toHaveProperty( 'age' );
			expect( mergedObject ).toHaveProperty( 'address' );
			expect( mergedObject.address ).toHaveProperty( 'city' );

			expect( mergedObject.name ).toBe( `Alice` );
			expect( mergedObject.age ).toBe( 30 );
			expect( mergedObject.address.city ).toBe( `San Francisco` );
		} );
	} );
});
