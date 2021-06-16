import { Knex } from 'knex';

import { DateTimeHelperPostgres } from './datetime';

export function knexTransforms(knex: Knex) {
	switch (knex.client.constructor.name) {
		// case 'Client_MySQL':
		// 	constructor = require('./dialects/mysql').default;
		// 	break;
		case 'Client_PG':
			return {
				datetime: new DateTimeHelperPostgres(knex),
			};
		// case 'Client_SQLite3':
		// 	constructor = require('./dialects/sqlite').default;
		// 	break;
		// case 'Client_Oracledb':
		// case 'Client_Oracle':
		// 	constructor = require('./dialects/oracledb').default;
		// 	break;
		// case 'Client_MSSQL':
		// 	constructor = require('./dialects/mssql').default;
		// 	break;

		default:
			throw Error('Unsupported driver used: ' + knex.client.constructor.name);
	}
}
