import '../src/config'
import { expect } from "@jest/globals";
import _ from "lodash";

/**
 *	unit test
 */
describe( "Config Test", () =>
{
	beforeAll( async () =>
	{
	} );
	afterAll( async () =>
	{
	} );

	describe( "Test Yaml", () =>
	{
		it( "should load configuration variables from .yml", async () =>
		{
			//console.log( `DotYml config: `, process.env );
			//
			//    {
			//       ...,
			//       de: { yml: { deyml: true } },
			//       p2p: {
			//         bootstrappers: [
			//           '/ip4/8.140.247.159/tcp/8011/p2p/QmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL',
			//           '/ip4/40.81.205.197/tcp/8011/p2p/AmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL',
			//           '/ip4/20.243.160.34/tcp/8011/p2p/CmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL'
			//         ]
			//       },
			//       _deyml: true
			//    }
			//
			expect( process.env ).toBeDefined();
			expect( process.env ).toHaveProperty( `_deyml` );
			expect( process.env._deyml ).toBeTruthy();

			expect( process.env ).toHaveProperty( `de` );
			expect( _.isObject( process.env.de ) ).toBeTruthy();

			const dotObject : any = { ...process.env.de as any };
			expect( dotObject ).toHaveProperty( 'yml' );
			expect( _.isObject( dotObject[ `yml` ] ) ).toBeTruthy();
			expect( dotObject[ `yml` ] ).toHaveProperty( 'deyml' );
			expect( dotObject[ `yml` ][ `deyml` ] ).toBeTruthy();

			expect( process.env ).toHaveProperty( `p2p` );
			expect( process.env.p2p ).toHaveProperty( `bootstrappers` );

			const p2pObject : any = { ...process.env.p2p as any };
			expect( p2pObject ).toHaveProperty( 'bootstrappers' );
			expect( _.isArray( p2pObject[ `bootstrappers` ] ) ).toBeTruthy();
			expect( p2pObject[ `bootstrappers` ].length ).toBeGreaterThan( 0 );
			expect( _.isString( p2pObject[ `bootstrappers` ][ 0 ] ) ).toBeTruthy();
			expect( p2pObject[ `bootstrappers` ][ 0 ].length ).toBeGreaterThan( 0 );
		} );
	} );
});
