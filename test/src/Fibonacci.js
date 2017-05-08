import test from 'ava' ;
import https from 'https' ;

import * as number from '@aureooms/js-number' ;
import * as integer from '@aureooms/js-integer' ;
import { list , map , range } from '@aureooms/js-itertools' ;
import { Fibonacci } from '../../src' ;

const URL = 'https://raw.githubusercontent.com/aureooms/integer-sequence-fibonacci/master/sequence/' ;

const N = 78 ; // biggest fibonacci number smaller than 2^53

function macro ( t , [ name , impl ] , i ) {

	const F = new Fibonacci( impl ) ;

	let data = '' ;

	https.get(
		URL + i ,
		res => {
			res.on( 'data' , chunk => { data += chunk ; } ) ;
			res.on( 'end' , ( ) => {
				t.is( impl.stringify( F.nth( i ) ) , data.trim() ) ;
				t.end( ) ;
			} ) ;
		}
	).on('error', e => {
		t.fail( e.message ) ;
		t.end( ) ;
	} ) ;

}

macro.title = ( _ , [ name , impl ] , i ) => `Fibonacci (${name}, ${i})` ;

for ( const model of [ [ '@aureooms/js-number' , number ] , [ '@aureooms/js-integer' , integer ] ] )
for ( const i of range( 0 , N + 1 ) )
test.cb( macro , model , i ) ;

// t.deepEqual( list( map ( integer.stringify , F.range( n ) ) ) , a ) ;
