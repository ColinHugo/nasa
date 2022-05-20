const api = require( 'express' ).Router();

const planetsRouter = require( './planets/planets.routes' );
const launchesRouter = require( './launches/launches.routes' );

api.use( '/planets', planetsRouter );
api.use( '/launches', launchesRouter );

module.exports = api;