/**
 * Created by alexone22 on 7/21/15.
 */

function MyError(message){
    this.name = 'MyError';
    this.message = message || 'Default Message';
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
    throw new MyError();

} catch(e){
    console.log(e.name);
    console.log(e.message);
}