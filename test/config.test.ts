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
			//       dot: { yml: { dotyml: true } },
			//       p2p: {
			//         bootstrappers: [
			//           '/ip4/8.140.247.159/tcp/8011/p2p/QmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL',
			//           '/ip4/40.81.205.197/tcp/8011/p2p/AmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL',
			//           '/ip4/20.243.160.34/tcp/8011/p2p/CmUNaruC7WfHNLeFNH2CUPBWLVPzjDg5shj2zs9nGaajSL'
			//         ]
			//       },
			//       _dotyml: true
			//    }
			//
			expect( process.env ).toBeDefined();
			expect( process.env ).toHaveProperty( `_dotyml` );
			expect( process.env._dotyml ).toBeTruthy();

			expect( process.env ).toHaveProperty( `dot` );
			expect( _.isObject( process.env.dot ) ).toBeTruthy();

			const dotObject : any = { ...process.env.dot as any };
			expect( dotObject ).toHaveProperty( 'yml' );
			expect( _.isObject( dotObject[ `yml` ] ) ).toBeTruthy();
			expect( dotObject[ `yml` ] ).toHaveProperty( 'dotyml' );
			expect( dotObject[ `yml` ][ `dotyml` ] ).toBeTruthy();

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
