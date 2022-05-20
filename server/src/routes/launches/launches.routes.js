const launchesRouter = require( 'express' ).Router();

const { 
    httpGetAllLaunches,
    httpAddnewLaunch,
    httpAbortLaunch
} = require( './launches.controller' );

launchesRouter.get( '/', httpGetAllLaunches );
launchesRouter.post( '/', httpAddnewLaunch );
launchesRouter.delete( '/:id', httpAbortLaunch );

module.exports = launchesRouter;