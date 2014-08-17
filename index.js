module.exports = amdclean;

function amdclean ( code, options ) {
	options.code = code;
	return require( 'amdclean' ).clean( options );
}

amdclean.defaults = {
	accept: '.js'
};
