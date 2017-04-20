import { IntegerSequence } from './IntegerSequence' ;
import { __generator__ } from '@aureooms/js-fibonacci' ;

export class Fibonacci extends IntegerSequence {

	all ( ) {

		const { iadd , $0 , $1 } = this.integer ;
		const generator =  __generator__( iadd , $0 , $1 ) ;
		const F = generator( ) ;
		return F ;

	}

}
