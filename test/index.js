var gobble = require( 'gobble' ),
	test = require( 'gobble-test' ),
	path = require( 'path' ),
	amdclean = require( '../' );

test([
	{
		name: 'amdclean without options',
		definition: gobble( path.join( __dirname, 'src' ) ).transform( amdclean ),
		expected: path.join( __dirname, 'expected/no-options' )
	},
	{
		name: 'amdclean with options',
		definition: gobble( path.join( __dirname, 'src' ) ).transform( amdclean, {
			wrap: {
				start: '(function () {\n',
				end: '\nwindow.example = example;\n}());'
			}
		}),
		expected: path.join( __dirname, 'expected/with-options' )
	}
]);