import fs from 'fs';
import path from 'path';
import jsYaml from "js-yaml";
import _ from "lodash";

/**
 * 	@class
 */
export class DotYml
{
	/**
	 * 	@description Loads configuration variables from .yml to process.env
	 * 	@returns {boolean}
	 */
	public load() : boolean
	{
		let dotenvPath = path.resolve( process.cwd(), '.yml' )

		try
		{
			let ymlConfig = jsYaml.load( fs.readFileSync( dotenvPath, { encoding : 'utf8' } ) );
			if ( ! _.isObject( ymlConfig ) )
			{
				ymlConfig = {};
			}

			let processEnv = process.env;
			if ( ! _.isObject( processEnv ) )
			{
				processEnv = {};
			}

			const mergedObject = _.merge({}, processEnv, ymlConfig, { _deyml : true } );
			process.env = _.cloneDeep( mergedObject );

			//	...
			return true;
		}
		catch ( err )
		{
			console.log( `))) error in deyml:`, err );
		}

		return false;
	}
}
