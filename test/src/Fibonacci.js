import test from 'ava' ;

import * as integer from '@aureooms/js-number' ;
import { list , map } from '@aureooms/js-itertools' ;
import { Fibonacci } from '../../src' ;

test( 'Fibonacci' , t => {

	const F = new Fibonacci( integer ) ;

	const n = 10 ;
	const a = [ "0" , "1" , "1" , "2" , "3" , "5" , "8" , "13" , "21" , "34" ] ;

	t.deepEqual( list( map ( integer.stringify , F.range( n ) ) ) , a ) ;

	t.deepEqual( integer.stringify( F.nth(  0 ) ) ,        "0" ) ;
	t.deepEqual( integer.stringify( F.nth( 38 ) ) , "39088169" ) ;

} ) ;
