import { last , take , drop } from '@aureooms/js-itertools' ;
import { NotImplementedError } from '@aureooms/js-error' ;

export class IntegerSequence {

	constructor ( integer ) {

		this.integer = integer ;

	}

	nth ( n ) {

		return last( this.range( n + 1 ) ) ;

	}

	range ( i , j ) {

		if ( j === undefined ) return take( this.all( ) , i ) ;

		return drop( take( this.all( ) , j ) , i ) ;

	}

	all ( ) {

		throw NotImplementedError('IntegerSequence#all is not implemented.') ;

	}

}
